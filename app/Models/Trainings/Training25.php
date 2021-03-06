<?php

namespace App\Models\Trainings;
use Illuminate\Support\Facades\DB;
use App\Models\BObject;

class Training25 extends BObject{

    public function MasterKeyField(){
        return 'ClubTransactionId';
    } 

   // public function MasterFixedFields(){ return ['Price'];} // for check not to be altered
    public function DetailFixedFields(){ return [];} // for check not to be altered  



    public function CustomFilters(){ 
        $PersonId = session('PersonId');

        $IsSuperUser = session('IsSuperUser');

        $filter = [];

        array_push($filter,
                ['Caption'=> 'My rounds',  'Filter'=> 'My', 'Label'=>'My', 'Warning' => '' ]);

        if ($IsSuperUser == 1){

            array_push($filter,
                ['Caption'=> 'All persons !!!',  'Filter'=> '1=1', 'Label'=>'All', 'Warning' => 'Doriti sa aduceti toate persoanele !?!' ]);
            
        }
        
        
        array_push($filter,
            ['Caption'=> 'For validate payment',  'Filter'=> 'Validate', 'Label'=>'Pay', 'Warning' => '' ]);
    
        return $filter;
    
    } 


    public function DefaultMasterValues(){ 
        $PersonId = session('PersonId');
        $Price = DB::select("select ifnull(Value,25) as Price from personxparam x
                inner join param p on p.ParamId = x.ParamId and p.Name = 'Price25'
        
                where PersonId = {$PersonId} 
            union all select 25") ;
        return ['Price' => $Price[0]->Price, 'IsClay'=>1, "PersonId"=>$PersonId]; 
    
    } 

    public function GetPersonInfo($PersonId){
        $Price = DB::select("select ifnull(Value,25) as Price from personxparam x
        inner join param p on p.ParamId = x.ParamId and p.Name = 'Price25'

        where PersonId = {$PersonId} 
        union all select 25") ;
        return ['Price' => $Price[0]->Price]; 

    }


    public function GetMasterSelect($OrganizationId, $filter, $others = null){
        $sql = "SELECT `ClubTransactionId`, `Date`, `Price`, `Qty`, c.`PersonId`, `ColectorId`, `IsClay`, `Description`, `IsPaid`, `UserId` ,
                    Price * Qty as Value, IsValidat, p.NickName as Name
                FROM `clubtransaction` c
                inner join person p on p.PersonId = c.PersonId
                where IsClay = 1 and  :filter
                order by date desc";
        
        $PersonId =  $others['PersonId'] ;  

        while (is_array($filter))
                $filter = $filter[1]; // un bug undeva
                   
        

        if ($filter == '1=1'){
            $sql = str_replace( array(":filter") ,array(" 1 = 1"), $sql);
        }else

        if ($filter == 'Validate'){
            $sql = str_replace( array(":filter") ,array(" c.ColectorId = $PersonId"), $sql);
        }else
        if ($filter == 'My'){
            $sql = str_replace( array(":filter") ,array(" c.PersonId = $PersonId"), $sql);
        }
        else{
           
            $sql = str_replace( array(":filter", ) ,array( "c.PersonId = $PersonId"), $sql);
            
        }
    
        return $sql;
    }

        
    public $MasterItemSelect = "SELECT `ClubTransactionId`, `Date`, `Price`, `Qty`, `PersonId`, `ColectorId`, `IsClay`, `Description`, `IsPaid`, `UserId` ,
                                    Price * Qty as Value, IsValidat
                                FROM `clubtransaction` 
                where ClubTransactionId = :ClubTransactionId";
               

    public $MasterDelete = "delete from clubtransaction
                where ClubTransactionId = :ClubTransactionId"  ;

    public $MasterInsert = "INSERT INTO `clubtransaction`( `Date`, `Price`, `Qty`, `PersonId`, `ColectorId`, 
                        `IsClay`, `Description`, `IsPaid`, `UserId`, IsValidat) 
                        select ':Date', ifnull(ppp.Value, 25), :Qty, :PersonId, :ColectorId, 
                        1, ':Description', :IsPaid, :_PersonId_, :IsValidat
                        from person p
                        left join (select pp.Value, pp.PersonId from
                            personxparam pp 
                        inner join param pa on pa.ParamId = pp.ParamId and pa.Name = 'Price25'
                        ) ppp on ppp.PersonId = p.PersonId
                        where p.PersonId = :PersonId" ;
                        
    public $MasterUpdate = "UPDATE `clubtransaction` t
                SET
                `Date`=':Date', 
                `Description` = ':Description', 
                t.`PersonId` = :PersonId, 
                `Qty`= :Qty, 
                `ColectorId`= :ColectorId, 
                `IsClay` = 1,
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
