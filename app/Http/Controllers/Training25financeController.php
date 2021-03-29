<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use App\Http\Controllers\MasterController;
use App\Models\Dictionaries\Dictionary;





class Training25financeController extends MasterController
{
    public $BObject = 'App\Models\Trainings\Training25finance';

    public $views = ['master'=>'trainings/training25finance'];

    public $Training25financeCode = 'TRAINING25FINANCE';

    public function getDictionaries(){
        $OrganizationId = session('organizationId');
        return ['colectors'=>$this->BObject()->getCollectors(), 'persons' => Dictionary::getPersons($OrganizationId)];
    }

    public function getPersonInfo(Request $request){

        $PersonId = $request['PersonId'];

        $PersonInfo =  $this->BObject()->getPersonInfo($PersonId);

        foreach($this->theobject->MasterFixedFields() as $field){
            session(["LAST_".$field => $PersonInfo[$field]]);
                
        }

        return $PersonInfo;
    }

}