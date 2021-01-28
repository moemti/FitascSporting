<?php

namespace App\Models\Reports;
use Illuminate\Support\Facades\DB;


class Reportcat{

    const MasterKeyField = 'ReportcatId';  

    const MasterFields = ['Name;s', 'Code;s', 'IsActive', 'OrganizationId', 'VATCodeId', 'ReportcatCategoryId'];

    const FilterSource=[
        ['label'=> 'Reportcat name', 'value'=> 'a.Name', 'type'=> 'string' ],
        ['label'=> 'Reportcat code', 'value'=> 'a.Code', 'type'=> 'string' ],
       
    ];

    const CustomFilters=[
    ];

    const DefaultMasterValues = ['VATCodeId'=>1];




    public static function getList($OrganizationId, $filter){
        if ($filter != ''){
            $filter = " and ".$filter;
        }

        $sql = "SELECT ReportcatId, Name, Code, IsActive, OrganizationId, VATCodeId, ReportcatCategoryId
                    FROM reportcat a
                where a.OrganizationId = {$OrganizationId} {$filter}
                order by a.Name";

        return  DB::select($sql);
    }

    public static function SaveItem($fields){
    
        $MasterKey = static::MasterKeyField;

        try {
            if ((!isset($fields[$MasterKey])) || ($fields[$MasterKey]== "")) {

                $sqlValues = self::getFieldValues($fields, static::MasterFields, false, true);

                $sql = "INSERT INTO reportcat
                            (Name, Code, IsActive, OrganizationId, VATCodeId, ReportcatCategoryId)
                            VALUES({$sqlValues})";
                               
                DB::select($sql);

                $sql = " select LAST_INSERT_ID() as ItemId";

                $ItemId = DB::select($sql)[0]->ItemId;


            } else {
                $ItemId = $fields[$MasterKey];

                $sqlValues = self::getFieldValues($fields, static::MasterFields, false, false);

                $sql = "UPDATE `reportcat` SET
                      {$sqlValues} where {$MasterKey} = {$ItemId}";

                DB::select($sql);
              
            }
        }
        catch(\Exception $e){
                DB::rollBack();
                throw $e;
            }

        return self::getItem($ItemId);
    }

    public static function getItem($ItemId){
        $sql = "SELECT ReportcatId, Name, Code, IsActive, OrganizationId, VATCodeId, ReportcatCategoryId
                    FROM reportcat a
                    where a.ReportcatId = {$ItemId} ";

        return DB::select($sql);

    }

    public static function deleteItem($ItemId){
        $sql = "delete from reportcat
                where ReportcatId = {$ItemId}"  ;
        return DB::select($sql);
    }



    //=================================  maybe to do a general function  ==============



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
