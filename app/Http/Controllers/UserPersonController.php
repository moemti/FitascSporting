<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use App\Http\Controllers\MasterController;
use App\Models\Users\User;






class UserPersonController extends MasterController
{
    public $BObject = 'App\Models\Users\UserPerson';

    public $views = ['master'=>'users/userperson'];


    public function getItem(Request $request){

        $request['PersonId'] = session('PersonId');

        return parent::getItem($request);
    }

    public function changemypassword(Request $request){
    
        $password2 = $request->password2;

        $password = $request->password;


        if ($password !== $password2)
            return view("auth/changemypassword")->with(["mesaj" => ['mesaj' =>'You entered different passwords! Try again']]);    

        $password = crypt($password, $password);

        $PersonId = session('PersonId');

        $message = User::setMyPassword($PersonId, $password);

        if ($message == 'OK')
            return redirect()->route('login')->with(["mesaj" => ['password'=>'The password has been changed!']]);
        else
            return view("auth/changemypassword")->with(["mesaj" => ['mesaj' =>$message]]);
    
    }


    

}