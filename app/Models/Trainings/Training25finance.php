<?php

namespace App\Models\Trainings;
use Illuminate\Support\Facades\DB;
use App\Models\BObject;

class Training25finance extends BObject{

    public function MasterKeyField(){
        return 'ClubTransactionId';
    } 

   


    public function CustomFilters(){ 
        $PersonId = session('PersonId');

        $IsSuperUser = session('IsSuperUser');

        $filter = [];

        array_push($filter,
                ['Caption'=> 'My collectings',  'Filter'=> 'My', 'Label'=>'My', 'Warning' => '' ]);

        array_push($filter,
                ['Caption'=> 'My clay collectings',  'Filter'=> 'MyClay', 'Label'=>'My clay', 'Warning' => '' ]);  
                
        array_push($filter,
                ['Caption'=> 'My other colectings',  'Filter'=> 'MyOther', 'Label'=>'My other', 'Warning' => '' ]);

        if ($IsSuperUser == 1){

            array_push($filter,
                ['Caption'=> 'All persons !!!',  'Filter'=> '1=1', 'Label'=>'All', 'Warning' => 'Doriti sa aduceti pentru toate persoanele !?!' ]);
            
        }
        
        
        array_push($filter,
            ['Caption'=> 'For validate payment',  'Filter'=> 'Validate', 'Label'=>'Pay', 'Warning' => '' ]);
    
        return $filter;
    
    } 


    public function DefaultMasterValues(){ 
        $PersonId = session('PersonId');

        return [ 'IsClay'=>0, "ColectorId"=>$PersonId]; 
    
    } 

    public function GetPersonInfo($PersonId){
        $Price = DB::select("select ifnull(Value,25) as Price from personxparam x
        inner join param p on p.ParamId = x.ParamId and p.Name = 'Price25'

        where PersonId = {$PersonId} 
        union all select 25") ;
        return ['Price' => $Price[0]->Price]; 

    }


    public function GetMasterSelect($OrganizationId, $filter, $others = null){
        $sql = "SELECT `ClubTransactionId`, `Date`, `Price` * Qty as Price, 1 as Qty, c.`PersonId`, `ColectorId`, `IsClay`, 
                `Description`, `IsPaid`, `UserId` ,
                    Price * Qty as Value, IsValidat, p.NickName as Name, ifnull(IsClay,0) as IsClay, f.NickName as Person
                FROM `clubtransaction` c
                inner join person p on p.PersonId = c.ColectorId
                left join person f on f.PersonId = c.PersonId
                where  IfNull(c.PersonId, -9999) <> c.ColectorId and :filter
                order by date desc";
        
        $PersonId =  $others['PersonId'] ;  

        while (is_array($filter))
                $filter = $filter[1]; // un bug undeva
                   
        

        if ($filter == '1=1'){
            $sql = str_replace( array(":filter") ,array(" 1 = 1"), $sql);
        }else

        if ($filter == 'Validate'){
            $sql = str_replace( array(":filter") ,array(" c.ColectorId = $PersonId and IsPaid = 0"), $sql);
        }else
        if ($filter == 'My'){
            $sql = str_replace( array(":filter") ,array(" c.ColectorId = $PersonId and IsPaid = 1"), $sql);
        }else
        if ($filter == 'MyClay'){
            $sql = str_replace( array(":filter") ,array(" c.ColectorId = $PersonId and IsClay = 1 and IsPaid = 1") , $sql);
        }
        else
        if ($filter == 'MyOther'){
            $sql = str_replace( array(":filter") ,array(" c.ColectorId = $PersonId and IsClay = 0 and IsPaid = 1"), $sql);
        }else
        {
           
            $sql = str_replace( array(":filter", ) ,array( "c.ColectorId = $PersonId"), $sql);
            
        }
    
        return $sql;
    }

        
    public $MasterItemSelect = "SELECT `ClubTransactionId`, `Date`, `Price` * Qty as Price, `Qty`, `PersonId`, `ColectorId`, `IsClay`, `Description`, `IsPaid`, `UserId` ,
                                    Price * Qty as Value, IsValidat, ifnull(IsClay,0) as IsClay
                                FROM `clubtransaction` 
                where ClubTransactionId = :ClubTransactionId";
               

    public $MasterDelete = "delete from clubtransaction
                where ClubTransactionId = :ClubTransactionId"  ;

    public $MasterInsert = "INSERT INTO `clubtransaction`( `Date`, `Price`, `Qty`, `PersonId`, `ColectorId`, 
                        `IsClay`, `Description`, `IsPaid`, `UserId`, IsValidat) 
                        select ':Date', :Price, 1, :PersonId, :ColectorId, 
                        0, ':Description', :IsPaid, :_PersonId_, :IsValidat
                        from person p
                        where p.PersonId = :ColectorId" ;
                        
    public $MasterUpdate = "UPDATE `clubtransaction` t
                SET
                `Date`=':Date', 
                `Description` = ':Description', 
                t.`PersonId` = :PersonId, 
                Price = :Price,
                `Qty`= 1, 
                `ColectorId`= :ColectorId, 
                `IsClay` = 0,
                `IsPaid` = :IsPaid,
                `UserId` = :_PersonId_,
                IsValidat = :IsValidat   

                WHERE ClubTransactionId = :ClubTransactionId and IsClay = 0";


   public function getCollectors(){
        $OrganizationId = session('organizationId');
        $colectors = DB::select("select p.PersonId , p.Name from person p
        inner join personxrole x on x.PersonId = p.PersonId
        inner join role r on r.RoleId = x.RoleId and r.Code = 'CASIER' and p.OrganizationId = {$OrganizationId}");
        return $colectors;

   }

   

}
