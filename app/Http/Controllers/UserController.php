<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use App\Http\Controllers\Controller;


use App\Models\Users\User;
use App\Models\Users\Person;





class UserController extends MasterController
{

 
    public $BObject = 'App\Models\Users\User';

    public $views = ['master'=>'users/user'];

    public $ModuleCode = 'USERS';
    
    public function getdictionaries(){
        $OrganizationId = session('organizationId');
        
        $p = new Person;

        $persons = $p->getMasterList($OrganizationId, '', null);
        
        return ['persons' => $persons];
    }

}