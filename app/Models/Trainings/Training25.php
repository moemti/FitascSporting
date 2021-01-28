<?php

namespace App\Models\Trainings;
use Illuminate\Support\Facades\DB;
use App\Models\BObject;

class Training25 extends BObject{

    public function MasterKeyField(){
        return 'ClubTransactionId';
    } 

    public function DefaultMasterValues(){ 
        $PersonId = session('PersonId');
        $Price = DB::select("select ifnull(Price,25) as Price from personparam where PersonId = {$PersonId} union all select 25") ;
        return ['Price' => $Price[0]->Price, 'IsClay'=>1, "PersonId"=>$PersonId]; 
    
    } 

    public $MasterSelect  = "SELECT `ClubTransactionId`, `Date`, `Price`, `Qty`, `PersonId`, `ColectorId`, `IsClay`, `Description`, `IsPaid`, `UserId` ,
                    Price * Qty as Value, IsValidat
                FROM `clubtransaction` c
                where PersonId = :_PersonId_ :filter
                order by date desc";

        
    public $MasterItemSelect = "SELECT `ClubTransactionId`, `Date`, `Price`, `Qty`, `PersonId`, `ColectorId`, `IsClay`, `Description`, `IsPaid`, `UserId` ,
                                    Price * Qty as Value, IsValidat
                                FROM `clubtransaction` 
                where ClubTransactionId = :ClubTransactionId";
               
               
    public $MasterDelete = "delete from clubtransaction
                where ClubTransactionId = :ClubTransactionId"  ;

    public $MasterInsert = "INSERT INTO `clubtransaction`( `Date`, `Price`, `Qty`, `PersonId`, `ColectorId`, 
                        `IsClay`, `Description`, `IsPaid`, `UserId`, IsValidat) 
                        select ':Date', ifnull(pp.Price, 25), :Qty, :PersonId, :ColectorId, 
                        :IsClay, ':Description', :IsPaid, :_PersonId_, :IsValidat
                        from person p
                        left join personparam pp on pp.PersonId = p.PersonId
                        where p.PersonId = :_PersonId_" ;
                        
    public $MasterUpdate = "UPDATE `clubtransaction` t
                left join personparam p on p.PersonId = t.PersonId
    
                SET
                `Date`=':Date', 
                `Description` = ':Description', 
                t.`PersonId` = :PersonId, 
                `Qty`= :Qty, 
                t.`Price`= IfNUll(p.Price, 25),
                `ColectorId`= :ColectorId, 
                `IsClay` = :IsClay,
                `IsPaid` = :IsPaid,
                `UserId` = :_PersonId_,
                IsValidat = :IsValidat   

                WHERE ClubTransactionId = :ClubTransactionId";


   public function getCollectors(){
        $OrganizationId = session('organizationId');
        $colectors = DB::select("select p.PersonId , p.Name from person p
        inner join personxrole x on x.PersonId = p.PersonId
        inner join role r on r.RoleId = x.RoleId and r.Code = 'CASIER' and p.OrganizationId = {$OrganizationId}");
        return $colectors;

   }

   

}
