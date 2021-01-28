<?php


namespace App\Models\Document;
use Illuminate\Support\Facades\DB;
use Mockery\Undefined;


class Document{

    
    
    public static function getDocumentAttachments($DocumentId){
        $sql = "SELECT DocumentAttachmentId, Description, Version, Name, Path FROM documentattachment d
                where d.DocumentId = {$DocumentId} order by Version desc, Name";
        return  DB::select($sql);
    }


    public static function getRelatedDocuments($DocumentId){
        $sql = "SELECT d.DocumentDate, d.DocumentId, d.DocumentNumber, ds.Name as State , dt.Name as Type, p.Name as Partner,
                d.Description, concat('Parent-',x.Type) as TypeR
                FROM `document` d
                inner join documentxdocument x on x.ParentDocumentId = d.DocumentId and x.ChildDocumentId = {$DocumentId}
                inner join documentstate ds on ds.DocumentStateId = d.documentstateid
                inner join documenttype dt on dt.DocumentTypeId = d.DocumentTypeId
                inner join organization p on p.OrganizationId = d.PartnerId

               union all

                SELECT d.DocumentDate, d.DocumentId, d.DocumentNumber, ds.Name as State , dt.Name as Type, p.Name as Partner,
                d.Description, concat('Child-', x.Type) as TypeR
                FROM `document` d
                inner join documentxdocument x on d.DocumentId = x.ChildDocumentId and  x.ParentDocumentId =  {$DocumentId}
                inner join documentstate ds on ds.DocumentStateId = d.documentstateid
                inner join documenttype dt on dt.DocumentTypeId = d.DocumentTypeId
                inner join organization p on p.OrganizationId = d.PartnerId
                order by DocumentDate";
        return  DB::select($sql);
    }

    public static function insertDocumentAttachements($DocumentId, $Version, $Name, $Path, $Description){
        $sql = "delete from documentattachment where Path = '{$Path}' and Name = '{$Name}'";
        DB::select($sql);

        $sql = "INSERT INTO documentattachment( DocumentId, Version, Name, Path, Description)
                VALUES ({$DocumentId}, {$Version}, '{$Name}', '{$Path}', '{$Description}')";
        DB::select($sql);
        return  self::getDocumentAttachments($DocumentId);
    }


    public static function deleteDocumentAttachements($AttachmentId, $DocumentId){

        $sql = "delete from documentattachment where DocumentAttachmentId = {$AttachmentId}";
        DB::select($sql);
        return  self::getDocumentAttachments($DocumentId);
    }

    public static function getDocumentAttachements($AttachmentId){
        $sql = "select Name, Path from documentattachment where DocumentAttachmentId = {$AttachmentId}";
        return DB::select($sql);
    }


    public static function deleteDocument($DocumentId){
        $sql = "delete  from document where DocumentId = {$DocumentId}";
        return DB::select($sql);
    }


    public static function getActions($DocumentTypeId, $DocumentStateId, $PersonId){
        $sql = "SELECT f.Name, f.Code, f.NextDocumentTypeId , f.FinalDocumentStateId
                FROM  documentflow f
                inner join documentstate s on s.DocumentStateId = f.FinalDocumentStateId
                left join action a on f.ActionId = a.ActionId
                left join 
                	(select r.ActionId, pr.PersonId , r.PermissionType
                     from permissionrole r
                		inner join personxrole pr on pr.RoleId = r.RoleId and pr.PersonId =  {$PersonId}
                     ) R on R.ActionId = a.ActionId
                left join permissionperson pp on pp.ActionId = a.ActionId and pp.PersonId = {$PersonId}

                WHERE f.DocumentTypeId = {$DocumentTypeId} and f.InitialDocumentStateId = {$DocumentStateId}
                        and coalesce(pp.PermissionType, R.PermissionType, case when f.ActionId is null then 1 else 0 end) = 1
                ";
        return DB::select($sql);
    }

    //==========  Doc flows  =============================

    public static function getDocFlows($OrganizationId){
        $sql = "SELECT
                d.DocumentFlowId, t.Name as DocumentType, s1.Name as InitialState, s2.Name as NextState, t2.Name as NextDocumentType,
                d.Name, d.Code, d.ActionId, t.DocumentTypeId, t2.DocumentTypeId as NextDocumentTypeId, s1.DocumentStateId as InitialDocumentStateId,
                s2.DocumentStateId as FinalDocumentStateId
                FROM `documentflow` d
                inner join documenttype t on t.DocumentTypeId = d.DocumentTypeId
                inner join documentstate s1 on s1.DocumentStateId = d.InitialDocumentStateId
                inner join documentstate s2 on s2.DocumentStateId = d.FinalDocumentStateId
                left join documenttype t2 on t2.DocumentTypeId = d.NextDocumentTypeId
                where d.OrganizationId = {$OrganizationId}
                order by 1, 2, 3"  ;
        return DB::select($sql);
    }

    public static function getTypes($OrganizationId){
        $sql = "SELECT `DocumentTypeId`, `Name`, `Code`, Category FROM `documenttype`
                WHERE OrganizationId = {$OrganizationId} order by Category"  ;
        return DB::select($sql);
    }

    public static function getStates($OrganizationId){
        $sql = "SELECT `DocumentStateId`, `DocumentTypeId`, `Name`, `Code` , DocumentTypeId FROM `documentstate` s
                WHERE OrganizationId = {$OrganizationId} order by Name";
        return DB::select($sql);
    }

    public static function SaveDocumentFlow($OrganizationId, $DocumentFlowId, $Name, $Code, $DocumentTypeId, $InitialDocumentStateId,
            $FinalDocumentStateId, $NextDocumentTypeId, $ActionId){

        if (!isset($DocumentFlowId)){
            try{
                $sql = "call insertDocumentFlow(?,?,?,?,?,?,?,?)";

                DB::beginTransaction();

                $DocumentFlowId = DB::select($sql, [$InitialDocumentStateId, $FinalDocumentStateId, $DocumentTypeId, $NextDocumentTypeId, $OrganizationId
                    , $Name, $Code, $ActionId])[0]->DocumentFlowId;

                DB::commit();
            }
            catch(\Exception $e){
                DB::rollBack();
                throw $e;
            }


        }
        else{
            try{

                // if (!isset($NextDocumentTypeId))
                //     $NextDocumentTypeId = 'NULL';

                $NextDocumentTypeId = sqlnull($NextDocumentTypeId);
                $ActionId = sqlnull($ActionId)    ;

                $sql = "UPDATE `documentflow` SET `DocumentTypeId`= {$DocumentTypeId},`InitialDocumentStateId`={$InitialDocumentStateId},
                        `FinalDocumentStateId`={$FinalDocumentStateId},`NextDocumentTypeId`={$NextDocumentTypeId},`Name`='{$Name}',`Code`='{$Code}', ActionId = {$ActionId}
                        WHERE DocumentFlowId = {$DocumentFlowId}";

                DB::beginTransaction();

                DB::select($sql);


                DB::commit();
            }
            catch(\Exception $e){
                DB::rollBack();
                throw $e;
            }
        }

        
        
        return self::getDocFlow($DocumentFlowId);


    }

    public static function getDocFlow($DocumentFlowId){
        $sql = "SELECT
                d.DocumentFlowId, t.Name as DocumentType, s1.Name as InitialState, s2.Name as NextState, t2.Name as NextDocumentType,
                d.Name, d.Code, d.ActionId, t.DocumentTypeId, t2.DocumentTypeId as NextDocumentTypeId, s1.DocumentStateId as InitialDocumentStateId,
                s2.DocumentStateId as FinalDocumentStateId
                FROM `documentflow` d
                inner join documenttype t on t.DocumentTypeId = d.DocumentTypeId
                inner join documentstate s1 on s1.DocumentStateId = d.InitialDocumentStateId
                inner join documentstate s2 on s2.DocumentStateId = d.FinalDocumentStateId
                left join documenttype t2 on t2.DocumentTypeId = d.NextDocumentTypeId
                where d.DocumentFlowId = {$DocumentFlowId}"  ;
        return DB::select($sql);
    }

    public static function deleteDocFlow($DocumentFlowId){
        $sql = "delete from documentflow
                where DocumentFlowId = {$DocumentFlowId}"  ;
        return DB::select($sql);
    }

    public static function getDocumentTypeByDocId($DocumentId){
        $sql = "SELECT t.`DocumentTypeId`, t.`Name`, t.`Code`, t.Category
                FROM `documenttype` t
                inner join document d on d.DocumentTypeId = t.DocumentTypeId
                WHERE d.DocumentId = {$DocumentId} "  ;
        return DB::select($sql);
    }
    


    //=======================  Docment Types ===============================

    public static function getDocumentType($DocumentTypeId){
        $sql = "SELECT `DocumentTypeId`, `Name`, `Code`, Category FROM `documenttype`
                WHERE DocumentTypeId = {$DocumentTypeId} "  ;
        return DB::select($sql);
    }

    public static function getDocumentStates($DocumentTypeId){
        $sql = "SELECT `DocumentTypeId`, `Name`, `Code`, DocumentStateId, IsInitial FROM `documentstate`
                WHERE DocumentTypeId = {$DocumentTypeId} " ;
        return DB::select($sql);
    }

    public static function getDocumentSerials($DocumentTypeId){
        $sql = "SELECT SerialId, DocumentTypeId, Serial, IsActive, StartDate, EndDate, LastNumber, Format
                FROM serials where DocumentTypeId = {$DocumentTypeId} " ;
        return DB::select($sql);
    }

    public static function SaveDocumentType($OrganizationId, $DocumentTypeId, $Name, $Code, $Category, $States, $Serials){

        DB::beginTransaction();

        try{
            if (!isset($DocumentTypeId)){

                $sql = "INSERT INTO `documenttype`( `OrganizationId`, `Name`, `Code`, `Category`)
                        values ({$OrganizationId}, '{$Name}', '{$Code}', '{$Category}')";

                DB::select($sql);

                $sql = " select  LAST_INSERT_ID() as DocumentTypeId";

                $DocumentTypeId = DB::select($sql)[0]->DocumentTypeId;


            }

            else{


                    $sql = "UPDATE `documenttype` SET
                        `Category`= '{$Category}', `Name`='{$Name}',`Code`='{$Code}'
                        WHERE DocumentTypeId = {$DocumentTypeId}";

                    DB::select($sql);

            }

            // si states-urile
            if (is_array($States)){
                foreach($States as $state){

                    if ($state['Operation'] == 'I'){

                        $Name = $state['Name'];
                        $Code = $state['Code'];
                        $IsInitial = $state['IsInitial'];

                        $sql = "INSERT INTO `documentstate`(`DocumentTypeId`, `Name`, `Code`, `OrganizationId`, IsInitial) values(
                                {$DocumentTypeId}, '{$Name}', '{$Code}', {$OrganizationId}, {$IsInitial} )";
                    };

                    if ($state['Operation'] == 'U'){

                        $DocumentStateId = $state['DocumentStateId'];
                        $Name = $state['Name'];
                        $Code = $state['Code'];
                        $IsInitial = $state['IsInitial'];

                        $sql = "update `documentstate`
                                    set Name = '{$Name}',
                                    Code = '{$Code}',
                                    IsInitial = {$IsInitial}
                                where DocumentStateId = {$DocumentStateId}";
                    };

                    if ($state['Operation'] == 'D'){

                        $DocumentStateId = $state['DocumentStateId'];

                        $sql = "delete from `documentstate`
                                where DocumentStateId = {$DocumentStateId}";
                    };

                    DB::select($sql);
                }
            }


            // si serial-urile
            if (is_array($Serials)){
                foreach($Serials as $serial){

                 

                    $SerialId = arrayValue($serial, 'SerialId');
                    $Serial = arrayValue($serial, 'Serial', 'string');
                    $Format = arrayValue($serial, 'Format', 'string');
                    $StartDate = arrayValue($serial, 'StartDate','date');
                    $EndDate = arrayValue($serial, 'EndDate', 'date');
                    $LastNumber = arrayValue($serial, 'LastNumber');
                    $IsActive = arrayValue($serial, 'IsActive');

                    if ($serial['Operation'] == 'I'){

                        $sql = "INSERT INTO serials
                                (DocumentTypeId, Serial, IsActive, StartDate, EndDate, LastNumber, Format)
                                VALUES({$DocumentTypeId}, {$Serial}, {$IsActive}, {$StartDate},{$EndDate}, {$LastNumber}, {$Format})";
                    };

                    if ($serial['Operation'] == 'U'){

                        $sql = "UPDATE serials
                                    SET DocumentTypeId={$DocumentTypeId}, Serial={$Serial}, IsActive = {$IsActive}, StartDate={$StartDate}, 
                                    EndDate={$EndDate}, LastNumber={$LastNumber}, Format={$Format}
                        WHERE SerialId = {$SerialId}";
                    };

                    if ($serial['Operation'] == 'D'){

                        $sql = "delete from serials
                                where SerialId = {$SerialId}";
                    };

                    DB::select($sql);
                }
            }


            DB::commit();
        }


        catch(\Exception $e){
            DB::rollBack();
            throw $e;
        }


        return self::getDocumentType($DocumentTypeId);
    }

    public static function deleteDocumentType($DocumentTypeId){

        DB::beginTransaction();

        try{
            $sql = "delete from documentstate
                    where DocumentTypeId = {$DocumentTypeId}"  ;
            DB::select($sql);

            $sql = "delete from documenttype
                    where DocumentTypeId = {$DocumentTypeId}"  ;

            DB::select($sql);

            DB::commit();

        }


        catch(\Exception $e){
            DB::rollBack();
            throw $e;
        }
        return 1;
    }

}
