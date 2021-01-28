<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use App\Http\Controllers\MasterController;






class DocumentTypeController extends MasterController
{
    public $BObject = 'App\Models\Dictionaries\DocumentType';

    public $views = ['master'=>'documentdefs/doctypes'];


    public function getDictionaries(){
        return [];
    }

}