<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use App\Http\Controllers\Controller;

use App\Models\Reports\Reportcat;




class ReportcatController extends Controller
{

    public function getlist(Request $request){

        $filter = "1=1"; // nothing initially, we could make a dictionary configuration

        $OrganizationId = session('organizationId');
        $items = Reportcat::getList( $OrganizationId, $filter);

        $MasterPrimayKey = Reportcat::MasterKeyField;
        $DefaultMasterValues = Reportcat::DefaultMasterValues;
        $cfilters = Reportcat::CustomFilters;
        $FilterSource = Reportcat::FilterSource;
        $vatcodes = app(CommonDictionariesController::class)->getVatCodes();
        $categories = app(CommonDictionariesController::class)->getReportcatCategories();

        return view('dictionaries/reportcat', ['masterlist' => $items, 'DefaultMasterValues' => $DefaultMasterValues,'CustomFilters' => $cfilters, 
                'FilterSource'=> $FilterSource, 'MasterPrimaryKey'=>$MasterPrimayKey, 'categories' => $categories, 'vatcodes' => $vatcodes]);
    }

    public function getitemsajax(Request $request){

        $OrganizationId = session('organizationId');
        $filter = session('filter');
       
        $items = Reportcat::getList($OrganizationId, $filter);
        return  [ 'masterlist' => $items];
    }

    public function saveitemajax(Request $request){


     

        $fields = $request;

        $fields['PersonId'] = session('PersonId');
        $fields['OrganizationId'] = session('organizationId');
        $fields['LocationId'] = session('LocationId');

        return [Reportcat::SaveItem($fields)];
    }

    public function getitemajax(Request $request){
        $ItemId = $request[Reportcat::MasterKeyField];
        return  [Reportcat::getItem($ItemId)];
    }

    public function deleteitemajax(Request $request){
        $ItemId = $request[Reportcat::MasterKeyField];
        return Reportcat::deleteItem($ItemId);
    }




}
