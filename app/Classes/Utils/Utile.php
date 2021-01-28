<?php

    function sqlnull($field, $delimiter = ''){
        if (!isset($field))
            return 'null';
        else 
            return $delimiter.$field.$delimiter;
      
    }
    
    
    function sqldate($field){
        
        if (!isset($field) || $field == "")
            return 'null';
        else 
            return date('ymd',strtotime($field));
        
        
    }

    function sqlstring($field){
        if (!isset($field) || $field == ""){
            return 'null';
        }
        else{

            $var = str_replace("'", "''", $field);
            return "'".$var."'";
        }
    
    }


    function arrayValue($array, $index, $type = null){
        if (array_key_exists($index, $array)){
            if ($type == 'date')
                return sqldate($array[$index]);

            if ($type == 'string')
                return sqlstring($array[$index]);

            return $array[$index];    
        
        }
        else
            return 'null';

    }
    