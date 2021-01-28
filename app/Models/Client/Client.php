<?php

namespace App\Models\Client;
use Illuminate\Support\Facades\DB;


class Client{
     
    public static function getList($OrganizationId){
        $sql = "SELECT p.OrganizationId, p.Name as Partner
                from
                organization p  
                where p.ParentOrganizationId = {$OrganizationId}
                order by p.Name";
        
        return  DB::select($sql);
    }
}
