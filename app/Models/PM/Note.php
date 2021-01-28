<?php

namespace App\Models\PM;
use Illuminate\Support\Facades\DB;
use Exception;
use Hamcrest\Type\IsArray;
use Illuminate\Mail\Message;

class Note{


   

    const FilterSource=[
        ['label'=> 'Title', 'value'=> 'n.Title', 'type'=> 'string' ],
        ['label'=> 'Tags', 'value'=> 'n.Tags', 'type'=> 'string' ],
        ['label'=> 'Text', 'value'=> 'n.Text', 'type'=> 'string' ],
    ];


    const CustomFilters=[
        ['Caption'=> 'Tags', 'Filter'=> '(n.Tags like  "%<input>%")', 'Label'=>'Tags', 'Warning' => '' , 'HTML'=>'input'],
        ['Caption'=> 'Search all',  'Filter'=> '(ifnull(n.Tags,"") like  "%<input>%" or n.Text like "%<input>%" or n.Title like "%<input>%")', 'Label'=>'All', 'Warning' => '', 'HTML' => 'input'],
    ];

    const MasterPrimaryKey = "NoteId";

    public static function getList($OrganizationId, $PersonId, $filter = null){

        if ($filter != ''){
            $filter = " and ".$filter;
        }


        $sql = "select * from note n
                where n.UserId = {$PersonId} and n.OrganizationId = {$OrganizationId} {$filter} 
                order by Title";
        

        return  DB::select($sql);

    }



    public static function  getnote($NoteId){
        return  DB::select("select * from note where NoteId = {$NoteId}");
    }

    public static function deletenote($NoteId){
        DB::beginTransaction();
        try{

            DB::select("delete from note where NoteId = {$NoteId}");

            DB::commit();
        }
        catch(Exception $e){
            DB::rollBack();
            throw $e;
        }

    }



    public static function getFieldValues($fields , $PersonId, $OrganizationId, $LocationId, $valfields, $isarray = false, $isinsert = false, $nullvalue = null ) {

        $val  = [];
        $val2 = [];
        $val3 = [];
        

        $val = explode(',', $valfields);

        foreach($val as $v){
            $v=  str_replace(array('`', ' ', "\n", "\t", "\r"), '', $v);
            array_push( $val2,$v);
        }

        foreach($val2 as $v){
            $IsDone = false;
            $pos = strpos ($v, ';d');
            if  ($pos !== false){
                $v = str_replace(';d', '', $v);
                if ($fields->$v != ''){
                    $v =  date( 'ymd', strtotime($fields->$v));
                    $IsDone = true;
                }

            } 
            else{
                $pos = strpos ($v, ';s');
                if  ($pos !== false){
                    $v = str_replace(';s', '', $v);
                    if ($fields->$v != ''){
                        $v = "'".$fields->$v."'";
                        $IsDone = true;
                    }
                    

                }else{
                    if ($fields->$v != ''){
                        $v = $fields->$v;
                        $IsDone = true;
                    }
                }
            }

            
            if ($v=='UserId'){
                $v = $PersonId;
                $IsDone = true;
            }
            if ($v=='OrganizationId'){
                $v = $OrganizationId;
                $IsDone = true;
            }
            if ($v=='LocationId'){
                $v = $LocationId;
                $IsDone = true;
            }

            if (!$IsDone)    
                $v = $nullvalue;



            array_push( $val3, $v);    
            
        }

        if ($isarray)
            return $val3;
        else{
            

            if ($isinsert){
                return implode (" , ", $val3);
            }
            else{
                $sql = [];
                foreach($val as $key=>$v){
                    array_push($sql , str_replace(array('`', ' ', "\n", "\t", "\r", ';d', ';s'), '', $v) . " = " . $val3[$key]);
                };


                return implode (" , ", $sql);
            }
        }

    }

    public static function SaveNote($fields, $PersonId, $OrganizationId, $LocationId){

        $NoteId = $fields->NoteId;

        if (!isset($NoteId)){
            $InsertFields = 'Text;s, Tags;s, UserId, Title;s, IsLink, OrganizationId';

            $sqlvalues = self::getFieldValues($fields , $PersonId, $OrganizationId, $LocationId, $InsertFields, false, true, 'null'); 
              
            $sql = "INSERT INTO note (Text, Tags, UserId, Title, IsLink, OrganizationId) values ( {$sqlvalues})";

            DB::select($sql);
            $NoteId = DB::select("select LAST_INSERT_ID() as NoteId")[0]->NoteId;


            


        }
        else{
            $UpdateFields = ' Text;s, Tags;s, UserId, Title;s, IsLink, OrganizationId';

            $sqlvalues = self::getFieldValues($fields , $PersonId, $OrganizationId, $LocationId, $UpdateFields, false, false, 'null'); 
              
            $sql = "update note set {$sqlvalues} where Noteid = {$NoteId}";

            DB::select($sql);
        }

        
        return self::getnote($NoteId); 

    }



    public static function getNoteAttachments($noteid){
        $sql = "select a.* from attachment a
        inner join notexattachment x on a.AttachmentId = x.AttachmentId
        where x.noteid = ".$noteid;
        $attachments =  DB::select($sql);
        return $attachments;

    }



    public static function deleteAttachment($AttachmentId){
        DB::beginTransaction();
        try{
            DB::select('delete from notexattachment where AttachmentId = ?', [$AttachmentId]);
            DB::select('delete from notexattachment where AttachmentId = ?', [$AttachmentId]);
            DB::select('delete from attachment where AttachmentId = ?', [$AttachmentId]);


            DB::commit();
        }
        catch(Exception $e){
            DB::rollBack();
            throw $e;
        }

    }

    public static function getAttachmentPath($AttachmentId){
        $path = DB::select('select Path from attachment where AttachmentId = ?', [$AttachmentId]);
        return $path;
    }




    public static function savefile($filepath, $description, $userid, $noteid, $name){
        DB::beginTransaction();
        try{
            $noteid = DB::select(' call insertAttachement (?, ?, ?, ?, ?)', [$noteid, $description, $filepath, $userid, $name]);

            DB::commit();
        }
        catch(Exception $e){
            DB::rollBack();
            throw $e;
        }

    }


    






}
