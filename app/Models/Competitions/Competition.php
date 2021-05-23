<?php

namespace App\Models\Competitions;
use Illuminate\Support\Facades\DB;
use App\Models\BObject;

class Competition extends BObject{


  
    

    const CustomFilters=[
    ];

    const DefaultMasterValues = [];


    public function MasterKeyField(){
        return 'CompetitionId';
    } 



    public $MasterSelect = "SELECT `CompetitionId`, c.Name, `OrganizationId`, `StartDate`, `EndDate`, c.`RangeId`, `Targets`, c.`SportId` ,
            r.name as `Range`, s.Name as Sport
            FROM `competition` c
            inner join `range` r on r.RangeId = c.RangeId
            inner join sport s on s.SportId = c.SportId
            WHERE 
            c.OrganizationId = :_OrganizationId_ :filter
        order by c.StartDate desc";

    public $MasterItemSelect = "SELECT `CompetitionId`, c.Name, `OrganizationId`, `StartDate`, `EndDate`, c.`RangeId`, `Targets`, c.`SportId` ,
            r.name as `Range`, s.Name as Sport
            FROM `competition` c
            inner join `range` r on r.RangeId = c.RangeId
            inner join sport s on s.SportId = c.SportId
            WHERE 
                c.CompetitionId = :CompetitionId ";
                                    

    public $MasterInsert = "INSERT INTO `competition`(`OrganizationId`, Name, `StartDate`, `EndDate`, `RangeId`, `Targets`, `SportId`)  
        values  (:_OrganizationId_, ':Name', ':StartDate',  ':EndDate', :RangeId, :Targets, :SportId)";            
   

    public $MasterUpdate = "UPDATE `competition` 
                set Name = ':Name',
                `StartDate` = ':StartDate', 
                `EndDate` = ':EndDate', 
                `RangeId` = :RangeId, 
                `Targets` = :Targets, 
                `SportId` = :SportId
    
            where CompetitionId = :CompetitionId";

    public $MasterDelete = "delete from competition
            where CompetitionId = :CompetitionId"  ;



}
