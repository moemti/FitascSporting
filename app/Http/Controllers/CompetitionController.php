<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use App\Http\Controllers\Controller;

use App\Models\Competitions\Competition;




class CompetitionController extends MasterController
{

    public $BObject = 'App\Models\Competitions\Competition';

    public $views = ['master'=>'competitions/competition'];

    public $ModuleCode = 'COMPETITIONS';

    public function getDictionaries(){
        $sports = app(CommonDictionariesController::class)->getSports();
        $ranges = app(CommonDictionariesController::class)->getRanges();

        return ['sports' => $sports, 'ranges' => $ranges];
    }





}
