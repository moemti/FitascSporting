<?php

/* to do

    -- master key fields could be array

*/

namespace App\Models;
use Illuminate\Support\Facades\DB;


class BObject2{

    public static function MasterKeyField(){ return '';} 
    public static function DetailKeyField(){ return '';}
    public static function MasterFields(){ return [];}
    public static function DetailFields(){ return [];}
    public static function CustomFilters(){ return [];}  // predefinited filters
    public static function FilterSource(){ return [];}  // filter source for custom filters
    public static function DefaultMasterValues(){ return [];} // default values




    public static $MasterItemSelect = 'bb';
    public static $MasterSelect = 'nn';
    public static $MasterInsert = '';
    public static $MasterUpdate = '';
    public static $MasterDelete = '';
    public static $DetailItemSelect = '';
    public static $DetailSelect = '';
    public static $DetailInsert = '';
    public static $DetailUpdate = '';
    public static $DetailDelete = '';

    // overrideable functions for sql statements
    public static function GetMasterSelect($OrganizationId, $filter){
        return '';
    }
    public static function GetMasterItemSelect(){
        return '';
    }
    public static function GetMasterInsert($fields){
        return '';
    }
    public static function GetMasterUpdate($fields){
        return '';
    }
    public static function GetMasterDelete($ItemId){
        return '';
    }
    public static function GetDetailSelect($ItemId, $OrganizationId){ // toate detaliile
        return '';
    }
    public static function GetDetailItemSelect($ItemId){ // un singur detailiu
        return '';
    }
    public static function GetDetailInsert($fields, $MasterId, $master){
        return '';
    }
    public static function GetDetailUpdate($fields, $master){
        return '';
    }
    public static function GetDetailDelete($ItemId){
        return '';
    }

    public static function getMasterList($OrganizationId, $filter){
        
        $sql = self::GetMasterSelect($OrganizationId, $filter);

               
        if ($sql == ''){
            if ($filter != ''){
                $filter = " and ".$filter;
            }

            $sql = str_replace( array(":filter", ":OrganizationId") ,array("{$filter}", "{$OrganizationId}"), static::$MasterSelect) ;
        }

        return  DB::select($sql);
    }

    public static function getMaster($ItemId){
        $MasterKey = self::MasterKeyField();

        $sql = self::GetMasterItemSelect();

        if ($sql ==''){
            $sql = str_replace( array(":ItemId") ,array("{$ItemId}"), static::$MasterItemSelect) ;
        }

        return DB::select($sql);

    }

    public static function Save($fields){

        $MasterKey = static::MasterKeyField();

    
   
        try {
            DB::beginTransaction();
            if ((!isset($fields[$MasterKey])) || ($fields[$MasterKey]== "")) {

               

                $sql = static::GetMasterInsert($fields);
                if ($sql == ''){
                    $sql = static::$MasterInsert;
                    foreach($fields as $key => $value){
                        if (!is_array($value))
                            $sql = str_replace(":".$key, $value, $sql); 
                    }
                
                    
                }       

                DB::unprepared($sql);

                $sql = " select LAST_INSERT_ID() as ItemId";

                $ItemId = DB::select($sql)[0]->ItemId;

               

            } else {
              
                $ItemId = $fields[static::MasterKeyField()];

                $sql = static::GetMasterUpdate($fields);
                if ($sql == ''){
                   $sql = static::$MasterUpdate;
                    foreach($fields as $key => $value){
                        if (!is_array($value))
                            $sql = str_replace(":".$key, $value, $sql); 
                    }
                
                  
                } 


                DB::unprepared($sql);
              
            }
            if (array_key_exists('delta', $fields)) 
                self::updateDetails($fields['delta'], $ItemId, $fields);
            DB::commit();
        }
        catch(\Exception $e){
                DB::rollBack();
                throw $e;
        }
   
        return self::getMaster($ItemId);
    }

    public static function updateDetails($delta, $MasterId, $master){

        if ($delta == [])
            return 'no delta';

        foreach($delta as $s){
                
            $d = (object) ($s);
            switch ($d->Operation){
                case "D": self::deleteDetail($s[static::DetailKeyField()]);
                    break;
                case "U":  self::updateDetail($d, $master);
                    break;
                case "I": self::insertDetail($d, $MasterId, $master);
                    break;    

            }
        }

    }



    public static function deleteMaster($ItemId){
        $sql = self::GetMasterDelete($ItemId);
        if ($sql == '')
            $sql = str_replace( array(":ItemId") ,array("{$ItemId}"), static::$MasterDelete) ;
        DB::unprepared($sql);
    }


    public static function getDetails($ItemId, $OrganizationId){

        $sql = self::GetDetailSelect($ItemId, $OrganizationId);
        if ($sql == '')
            $sql = str_replace( array(":ItemId", ":OrganizationId") ,array("{$ItemId}", "{$OrganizationId}"), static::$DetailSelect) ;
        return DB::select($sql);

    }

    public static function insertDetail($detail, $DocumentId, $master){

        
        $sql = self::GetDetailInsert($detail, $DocumentId, $master);

        if ($sql == ''){
            $sql = static::$DetailInsert;
            $sql = str_replace(":".static::MasterKeyField(), $DocumentId, $sql); 
            foreach($detail as $key => $value){
                $sql = str_replace(":".$key, $value, $sql); 
            }
            foreach($master as $key => $value){
                if (!is_array($value))
                    $sql = str_replace(":".$key, $value, $sql); 
            }

            
           
   
        }

        DB::unprepared($sql);
    }

    public static function updateDetail($detail, $master){

        
        $sql = self::GetDetailUpdate($detail, $master);

        if ($sql == ''){
            $sql = static::$DetailUpdate;
            foreach($detail as $key => $value){
                $sql = str_replace(":".$key, $value, $sql); 
            }
            foreach($master as $key => $value){
                if (!is_array($value))
                    $sql = str_replace(":".$key, $value, $sql); 
            }
         
        }
       
        DB::unprepared($sql);
    }

    public static function deleteDetail($ItemId){
        $sql = self::GetDetailDelete($ItemId);
        if ($sql == '')
            $sql = str_replace( array(":ItemId") ,array("{$ItemId}"), static::$DetailDelete) ;
        return DB::unprepared($sql);
    }

    public static function getFieldValues($fields, $valfields, $isarray = false, $isinsert = false, $nullvalue = 'null' ) {

        $val  = [];
        $val2 = [];
        $val3 = [];
        

        $val = $valfields;// explode(',', $valfields);

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

}