<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use App\Http\Controllers\MasterController;
use App\Models\Common\Permissions;





class RoleController extends MasterController
{
    public $BObject = 'App\Models\Users\Role';

    public $views = ['master'=>'users/role'];

    

    public function getDictionaries(){
       
        $permissions = Permissions::getActions("1 = 1");
        return ['permissions' => $permissions];
    }

}