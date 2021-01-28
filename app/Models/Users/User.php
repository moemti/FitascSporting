<?php


namespace App\Models\Users;
use Illuminate\Support\Facades\DB;
use App\Models\BObject;



class User extends BObject{
    
    public function MasterKeyField(){
        return 'PersonId';
    }

    public $MasterKeyIsNew = false;
    
    public $MasterSelect = 
                "SELECT u.PersonId, u.UserName, u.Password, p.Name, u.IsSuperUser
                from user u
                inner join person p on p.PersonId = u.PersonId
                where p.OrganizationId = :_OrganizationId_ 
                order by p.Name" ;


    public $MasterItemSelect =  "SELECT u.PersonId, u.UserName, u.Password, u.IsSuperUser 
                        from user u
                        where u.PersonId = :PersonId" ;
                                        

    public $MasterInsert =  "INSERT INTO `user`( PersonId, `UserName`,  `Password`, IsSuperUser)
                                values (:PersonId, ':UserName', ':Password', :IsSuperUser)";

    public $MasterUpdate = "UPDATE `user` SET
                        `UserName`= ':UserName', `Password` = ':Password', IsSuperUser = :IsSuperUser
                        WHERE PersonId = :PersonId";

    public $MasterDelete = "delete from user
            where PersonId = :PersonId"  ;
    
    
}