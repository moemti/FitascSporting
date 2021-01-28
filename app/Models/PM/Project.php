<?php

namespace App\Models\PM;
use Illuminate\Support\Facades\DB;
use App\Models\BObject;

class Project extends BObject{

    public function MasterKeyField(){
        return 'ProjectId';
    } 

    public function  FilterSource(){
        return [
        ['label'=> 'Project name', 'value'=> 'p.Name', 'type'=> 'string' ],
        ['label'=> 'Project state', 'value'=> 's.Name', 'type'=> 'string' ],
       
        ];
    }

    public function CustomFilters(){
        return [ 
            ['Caption'=> 'Open', 'Filter'=> 's.name = "Open"', 'Label'=>'Open', 'Warning' => '' ],
            ['Caption'=> 'All projects !!!',  'Filter'=> '1=1', 'Label'=>'All', 'Warning' => 'Doriti sa aduceti toate proiectele !?!' ],
        ];
    }

    public $MasterSelect  = "SELECT p.`ProjectId` as id, p.`ProjectId`, p.`Name`, p.`Description`, `DateStart`, `DateEnd`, p.`ProjectStateId`, p.`ParentId`, p.`Priority`, p.`ProjectCategoryId`, p.`OrganizationId`,
                c.Name as Category , s.Name as State
                FROM `project` p
                inner join elemdictionary c on c.ElemDictionaryId = p.ProjectCategoryId
                inner join elemdictionary s on s.ElemDictionaryId = p.ProjectStateId
                where p.OrganizationId = :_OrganizationId_ :filter
                order by p.Name";

        
    public $MasterItemSelect = "SELECT p.`ProjectId`, p.`Name`, p.`Description`, `DateStart`, `DateEnd`, `ProjectStateId`, p.`ParentId`, p.`Priority`, p.`ProjectCategoryId`, p.`OrganizationId`,
                c.Name as Category, s.Name as State 
                FROM `project` p
                inner join elemdictionary c on c.ElemDictionaryId = p.ProjectCategoryId
                inner join elemdictionary s on s.ElemDictionaryId = p.ProjectStateId
                where p.ProjectId = :ProjectId
                order by p.Name";
                        


    public $MasterDelete = "delete from project
                where ProjectId = :ProjectId"  ;

    public $MasterInsert = "INSERT INTO `project`( `Name`, `Description`, `DateStart`, `DateEnd`, `ProjectStateId`, `ParentId`, `Priority`, 
                                        `ProjectCategoryId`, `OrganizationId`)
                        VALUES
                        (   ':Name', ':Description', ':DateStart', ':DateEnd', :ProjectStateId, :ParentId, :Priority, 
                                :ProjectCategoryId, :_OrganizationId_)";
                        
    public $MasterUpdate = "UPDATE `project` SET
                `Name`=':Name', 
                `Description` = ':Description', 
                `DateStart` = ':DateStart', 
                `DateEnd` = ':DateEnd', 
                `ProjectStateId` = :ProjectStateId, 
                `ParentId`= :ParentId, 
                `Priority`= :Priority, 
                `ProjectCategoryId` = :ProjectCategoryId   

                WHERE ProjectId = :ProjectId";


    public function beforeSaveInTran($fields){
        $parentid = $fields['ParentId'];
        $projectid = $fields['ProjectId'];

        if (($parentid != '') && ($parentid == $projectid))
            throw new \Exception("The parent cannot be the same as the element!");  
            
        if (($parentid != '') && ($projectid != '')){    
            $sql = "call checkParentChildProject({$projectid}, {$parentid})";
                
            $response = DB::select($sql)[0]->Response;
            
            if ($response != "OK")
                throw new \Exception($response);  
        }    
    }


}
