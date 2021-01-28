<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use App\Http\Controllers\Controller;

use App\Models\PM\Project;




class ProjectController extends MasterController
{

    public $BObject = 'App\Models\PM\Project';

    public $views = ['master'=>'PM/project'];

    public $ModuleCode = 'PROJECTS';

 
    
    public function getdictionariesajax(Request $request){
        $DictioanryCode = 'PM_Category';
        $dictionaryid = 0;
        $projectcategory = app(DictionaryController::class)->getdictionaries($DictioanryCode, $dictionaryid);
        
        $DictioanryCode = 'PM_ProjectState';
        $projectstate = app(DictionaryController::class)->getdictionaries($DictioanryCode, $dictionaryid);
        
        return ['category' => $projectcategory , 'state' => $projectstate];
    }

    




}
