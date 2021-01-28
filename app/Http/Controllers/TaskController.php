<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use App\Http\Controllers\Controller;

use App\Models\PM\Task;
use App\Models\PM\Project;
use App\Models\Users\User;



class TaskController extends MasterController
{

    public $BObject = 'App\Models\PM\Task';

    public $views = ['master'=>'PM/task'];

    public $ModuleCode = 'TASKS';

    
    public function getDictionaries(){
        $OrganizationId = session('organizationId');
        $dictionaries = $this->getdictionariesajax(new Request);

        $projects = (new Project)->getMasterList($OrganizationId, ' 1 = 1 ', null);
        $calendar = $this->BObject()->getCalendars($OrganizationId);
        $persons = User::getPersons($OrganizationId);
        $tasks = $this->BObject()->getMasterList( $OrganizationId, ' 1=1 ', null);

        return array_merge($dictionaries ,['projects'=>$projects, 'tasks'=>$tasks, 
        'calendar'=>$calendar, 'persons'=>$persons]);
    }



    public function getdictionariesajax(Request $request){
        $DictionaryCode = 'PM_TaskType';
        
        $dictionaryid = 0;
        $tasktype = app(DictionaryController::class)->getdictionaries($DictionaryCode, $dictionaryid);
        
        $DictionaryCode = 'PM_TaskStatus';
        $taskstatus = app(DictionaryController::class)->getdictionaries($DictionaryCode, $dictionaryid);
        
        $DictionaryCode = 'PM_TaskConstraint';
        $taskconstraint = app(DictionaryController::class)->getdictionaries($DictionaryCode, $dictionaryid);
        
        $DictionaryCode = 'PM_TaskStatus';
        $taskstatus = app(DictionaryController::class)->getdictionaries($DictionaryCode, $dictionaryid);

        $DictionaryCode = 'PM_ResourceType';
        $resourcetype = app(DictionaryController::class)->getdictionaries($DictionaryCode, $dictionaryid);

        $DictionaryCode = 'PM_DurationType';
        $durationtype = app(DictionaryController::class)->getdictionaries($DictionaryCode, $dictionaryid);
        
        

        return ['tasktype' => $tasktype , 'taskstatus' => $taskstatus,  'taskconstraint' => $taskconstraint,  'resourcetype' => $resourcetype,
                        'durationtype' => $durationtype,];


    }



    public function gettaskgantt(Request $request){

        $filter = $request->filter;

        while (is_array($filter))
            $filter = $filter[1]; // un bug undeva

        $OrganizationId = session('organizationId');
        return $this->BObject()->getTaskGantt($OrganizationId, $filter);
    }

    public function savetaskgantt(Request $request){

       // return $request->tasks;
        $OrganizationId = session('organizationId');

        $this->BObject()->updateGanttTasks($request->tasks);
            

        return 'OK';
    }


            
}
