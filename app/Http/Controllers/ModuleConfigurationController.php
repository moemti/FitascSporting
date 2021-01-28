<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use App\Http\Controllers\MasterController;






class ModuleConfigurationController extends MasterController
{
    public $BObject = 'App\Models\Dictionaries\ModuleConfiguration';

    public $views = ['master'=>'dictionaries/moduleconfiguration'];
}