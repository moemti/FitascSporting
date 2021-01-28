<?php

namespace App\Models\Users;
use Illuminate\Support\Facades\DB;
use App\Models\BObject;

class Person extends BObject{

  
    public function MasterKeyField(){
        return 'PersonId';
    } 

    public function  DetailKeyField(){
        return 'RoleId';
    }


    public $MasterSelect = 
                "SELECT p.PersonId, p.Name, p.Email, GROUP_CONCAT(f.Name SEPARATOR ', ') as Role 
                from person p
                left join personxrole x on x.PersonId = p.PersonId
                left join role f on f.RoleId = x.RoleId
                where p.OrganizationId = :_OrganizationId_ :filter
                group by  p.PersonId, p.Name, p.Email
                order by p.Name"  ;

    public $MasterItemSelect = "SELECT p.PersonId, p.Name, p.Email, GROUP_CONCAT(f.Name SEPARATOR ', ') as Role 
                from person p
                left join personxrole x on x.PersonId = p.PersonId
                left join role f on f.RoleId = x.RoleId
                where p.PersonId = :PersonId
                group by  p.PersonId, p.Name, p.Email"  ;
                                        

    public $MasterInsert = "INSERT INTO person( OrganizationId, Name, Email)
                                values (:_OrganizationId_, ':Name', ':Email')";         
   

    public $MasterUpdate = "UPDATE `person` SET
                        `Email`= ':Email', `Name`=':Name'
                        WHERE PersonId = :PersonId";

    public $MasterDelete = "delete from person
            where PersonId = :PersonId"  ;


    //--------


    
  // punem old si new pentru a sti care a fost OLD la update/delete si NEW pentru insert/update
    public $DetailSelect = "SELECT x.PersonId, f.RoleId, f.Name, f.RoleId as OLD_RoleId, f.RoleId as NEW_RoleId
                from  personxrole x 
                inner join role f on f.RoleId = x.RoleId
                where x.PersonId = :PersonId
                order by f.Name"  ;


    public $DetailInsert = "INSERT INTO `personxrole`(`PersonId`, `RoleId`) 
            values(:PersonId, :NEW_RoleId)";

    public $DetailUpdate = "update `personxrole`
                         set RoleId = :NEW_RoleId
                        where RoleId = :OLD_RoleId and PersonId = :PersonId";    

    public $DetailDelete = "delete from `personxrole`
                        where RoleId = :OLD_RoleId and PersonId = :PersonId";

    public function getroles($OrganizationId){
        $sql = "Select `RoleId`, `Name`, `Code`, `OrganizationId` FROM `role`
            where OrganizationId = {$OrganizationId} order by Name"  ;

        return DB::select($sql);
        
    }

}
