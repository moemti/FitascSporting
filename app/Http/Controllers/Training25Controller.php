<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use App\Http\Controllers\MasterController;
use App\Models\Dictionaries\Dictionary;





class Training25Controller extends MasterController
{
    public $BObject = 'App\Models\Trainings\Training25';

    public $views = ['master'=>'trainings/training25'];

    public $Training25Code = 'TRAINING25';

    public function getDictionaries(){
        $OrganizationId = session('organizationId');
        return ['colectors'=>$this->BObject()->getCollectors(), 'persons' => Dictionary::getPersons($OrganizationId)];
    }

    public function getPersonInfo(Request $request){

        $PersonId = $request['PersonId'];
        return $this->BObject()->getPersonInfo($PersonId);
    }

}