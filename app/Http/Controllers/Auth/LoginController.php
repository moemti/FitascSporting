<?php

namespace App\Http\Controllers\Auth;


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use App\Http\Controllers\Controller;

use App\Models\Common\Login;

use App\Models\Common\Utilities;


class LoginController extends Controller
{
    public function login(){
        
        return view("auth/login")->with(["mesaj"=>["OK"]]);
    }
    
    
    public function recoverpw(){
        
        return view("auth/recoverpw");
    }
    
    
    public function resetpassword(Request $request){
        // reset the password
        
        // if email exists ok and back to intex
        $Email = $request->input('email');
        
        $user = Login::Login($Email);
        
        if (isset($user)) {
            return view("auth/login")->with(["mesaj" =>['password'=> 'The password was reset!']]);
        }
        else
            return view("auth/recoverpw")->with(["mesaj" =>['NumeUtilizator'=> 'This email does not exists!']]);
            
            
            
    }
    
    
    public function authenticate(Request $request){
        
        
        $parola = $request->input('password'); //crypt($request->input('password'), $request->input('password'));
        
        $user = Login::Login($request->input('username'));
        
        
        
        if (!empty($user)) {
            if ($user[0]->Password !==  $parola){
                return view("auth/login")->with(["mesaj" =>[ 'password'=> 'Incorect password']]);
            }
            else{
                
                $request->session()->put('PersonId', $user[0]->PersonId);
                $request->session()->put('IsSuperUser', $user[0]->IsSuperUser);
                $request->session()->put('username', $request->input('username'));
                $request->session()->put('name', $user[0]->Name);
                $request->session()->put('function', $user[0]->Function);
                $request->session()->put('organization', $user[0]->Organization);
                $request->session()->put('organizationId', $user[0]->OrganizationId);
                $request->session()->put('email', $user[0]->Email);
                
                
                
                // get last login
                
              //  $lastUrl = Utilities::getLastUrl($user[0]->PersonId);

             //   if (count($lastUrl) == 0)
                    return redirect("welcome");

                // if ($lastUrl[0]->Location == "logout")
                //     return redirect("welcome");
                // else    
                //     return redirect($lastUrl[0]->Location);
            }
        }
        else{
            return view("auth/login")->with(["mesaj" =>['NumeUtilizator'=> 'This user name does not exists!']]);
        }
        
    }
    
    public function logout(Request $request){
        
        // return dd($request->input('password'));
        
        $request->session()->flush();
        
        return redirect("welcome");
        
        
    }
    
    
}
