<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use App\Http\Controllers\MasterController;






class ModuleController extends MasterController
{
    public $BObject = 'App\Models\Dictionaries\Module';

    public $views = ['master'=>'dictionaries/module'];

    public $ModuleCode = 'MODULES';

    public function getDictionaries(){
        return ['configurations' => $this->BObject()->getConfigurations()];
    }

}