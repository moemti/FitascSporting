<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use App\Http\Controllers\MasterController;






class ModuleConfigurationValuesController extends MasterController
{
    public $BObject = 'App\Models\Dictionaries\ModuleConfigurationValues';

    public $views = ['master'=>'dictionaries/moduleconfigurationvalues'];
}
