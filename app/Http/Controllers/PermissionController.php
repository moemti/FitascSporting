<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use App\Http\Controllers\Controller;

use App\Models\Common\Permissions;

class PermissionController extends Controller
{
    public function getpermissions(Request $request){

        $Filter = $request->filter;
        if ($Filter == null)
            $Filter = " 1 = 0";

        if ($Filter == "all")
            $Filter = " 1 = 1";


        $cfilters = Permissions::CustomFilters;
        $FilterSource = Permissions::FilterSource;

        $actions = Permissions::getActions($Filter);
        return view('permissions/action', [ 'MasterFields' => Permissions::MasterFields, 
                'masterlist' => $actions, 'CustomFilters' => $cfilters,'FilterSource'=> $FilterSource]);
    }

    public function getpermissionsajax(Request $request){

        $Filter = $request->filter;
        if ($Filter == null)
            $Filter = " 1 = 0";

        if ($Filter == "all")
            $Filter = " 1 = 1";
        
        $actions = Permissions::getActions($Filter);
        return ['masterlist' => $actions];
    }

    public function savepermissionajax(Request $request){
        $Name = $request->Name;
        $Code = $request->Code;
        $ActionId = $request->ActionId;
        return [Permissions::savePermission( $ActionId, $Name, $Code)];
        
    }

    public function getpermissionajax(Request $request){

        $ActionId = $request->ActionId;
        $action = Permissions::getAction($ActionId);
        return [$action];
    }

    public function deletepermissionajax(Request $request){

        $ActionId = $request->ActionId;
         Permissions::deleteAction($ActionId);
    }


}
