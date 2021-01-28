<?php

namespace App\Models\ClientDocs;
use Illuminate\Support\Facades\DB;


class ClientDoc{


    public static $TipDoc = 0;

    public static function getList($PersonId, $OrganizationId, $filter){

        if ($filter != ''){

            $filter = str_replace('state=','ds.name = ', $filter);

            $filter = " and ".$filter;
        }


        $sql = "SELECT d.DocumentDate, d.DocumentId, d.DocumentNumber, ds.Name as State , dt.Name as Type, p.Name as Partner
                FROM `document` d
                inner join documentstate ds on ds.DocumentStateId = d.documentstateid
                inner join documenttype dt on dt.DocumentTypeId = d.DocumentTypeId
                inner join organization p on p.OrganizationId = d.PartnerId
                where d.DocumentTypeId = ".static::$TipDoc." and  d.OrganizationId = {$OrganizationId} {$filter} order by d.DocumentNumber" ;

        return  DB::select($sql);
    }





    public static function getdocumentCount($OrganizationId){
        $sql = "SELECT count(d.DocumentId) as Count, ds.Name as State
                FROM  documentstate ds
                inner join documenttype dt on ds.DocumentTypeId = dt.DocumentTypeId
                left join document d on ds.DocumentStateId = d.DocumentStateid
                where ds.DocumentTypeId = ".static::$TipDoc." and dt.OrganizationId = {$OrganizationId}
                group by ds.Name ";

        return  DB::select($sql);
    }



    public static function getdocument($DocumentId){
        $sql = "SELECT d.DocumentDate, d.DocumentId, d.DocumentNumber, ds.Name as State , dt.Name as Type, p.Name as Partner, p.OrganizationId,
                d.Description, v.Version, d.DocumentStateId, d.DocumentTypeId
                FROM `document` d
                inner join documentstate ds on ds.DocumentStateId = d.documentstateid
                inner join documenttype dt on dt.DocumentTypeId = d.DocumentTypeId
                inner join organization p on p.OrganizationId = d.PartnerId
                inner join documentversion v on v.documentversionid = d.CurrentDocumentVersionId
                where d.DocumentId = {$DocumentId}";

        return  DB::select($sql);
    }

    public static function getdocumentVersions($DocumentId){
        $sql = "SELECT d.Version, d.VersionDate,  ds.Name as State , d.Comment
                FROM documentversion d
                inner join documentstate ds on ds.DocumentStateId = d.DocumentStateId
                where d.DocumentId = {$DocumentId} order by Version desc" ;

        return  DB::select($sql);
    }



    public static function updatedocumentState($DocumentId, $State, $OrganizationId, $PersonId, $Description, $Comment,
            $NextDocumentTypeId, $CustomerId, $NextDocumentStateId){


        if ($State == 'DoVersion') {
            $DocumentStateId = null;
        }
        else{
            $DocumentStateId = $NextDocumentStateId;
        }


        try{
            $sql = "call updateDocument(?,?,?,?,?,?,?,?,?,?,?)";

            DB::beginTransaction();

            if ($NextDocumentTypeId != null){ // se creaza un nou document cu alt tip de document

                $sql = "call insertDocument(?,?,?,?,?,?,?,?)";

                $strDate = date('ymd');
                $DocumentIdNew = DB::select($sql, [$strDate, 0,  $NextDocumentTypeId, $Description, $OrganizationId, $CustomerId, $PersonId, 'New' ])[0]->DocumentId;

                DB::select("insert into documentxdocument values ({$DocumentId}, {$DocumentIdNew}, 'Create')");

            }
            else
                DB::select($sql,  [$DocumentId, null, null, $DocumentStateId, null, $Description, null, null, $PersonId, $Comment, 1]);


            DB::commit();
        }
        catch(\Exception $e){
            DB::rollBack();
            throw $e;
        }
        return self::getdocument($DocumentId);
    }

    public static function updateinsertdocument($DocumentId, $Date, $Number, $State, $CustomerId, $OrganizationId, $PersonId, $Description){

        $strDate = date( 'ymd', strtotime($Date));


        if (!isset($DocumentId)){
            try{
                $sql = "call insertDocument(?,?,?,?,?,?,?,?)";

                DB::beginTransaction();

                $DocumentId = DB::select($sql, [$strDate, $Number,  static::$TipDoc, $Description, $OrganizationId, $CustomerId, $PersonId, 'New' ])[0]->DocumentId;
            
                DB::commit();
            }
            catch(\Exception $e){
                DB::rollBack();
                throw $e;
            }


        }
        else{
            try{
                $sql = "call updateDocument(?,?,?,?,?,?,?,?,?,?,?)";

                DB::beginTransaction();

                DB::select($sql,  [$DocumentId, $strDate, $Number, null, static::$TipDoc, $Description, $OrganizationId, $CustomerId, $PersonId, null, 0 ]);


                DB::commit();
            }
            catch(\Exception $e){
                DB::rollBack();
                throw $e;
            }
        }

        return self::getdocument($DocumentId);

    }
}
