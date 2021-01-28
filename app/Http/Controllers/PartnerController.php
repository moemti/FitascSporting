<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use App\Http\Controllers\Controller;

use App\Models\Dictionaries\Partner;




class PartnerController extends Controller
{

    public function getpartners(Request $request){

        $OrganizationId = session('organizationId');
        $partners = Partner::getList( $OrganizationId);

        return view('dictionaries/partner', [ 'masterlist' => $partners]);
    }

    public function getpartnersajax(Request $request){

        $OrganizationId = session('organizationId');
        $partners = Partner::getList($OrganizationId);
        return  [ 'masterlist' => $partners];
    }

    public function savepartnerajax(Request $request){

        $ParentOrganizationId = session('organizationId');
        $OrganizationId = $request->OrganizationId;

        $Name = $request->Name;
        $IsCustomer = $request->IsCustomer;
        $IsSupplier = $request->IsSupplier;
        $InvoiceDescription = $request->InvoiceDescription;

        return [Partner::SavePartner($ParentOrganizationId, $OrganizationId, $Name, $IsCustomer, $IsSupplier, $InvoiceDescription)];
    }

    public function getpartnerajax(Request $request){
        $OrganizationId = $request->OrganizationId;
        return  [Partner::getPartner($OrganizationId)];
    }

    public function deletepartnerajax(Request $request){
        $OrganizationId = $request->OrganizationId;
        return Partner::deletePartner($OrganizationId);
    }




}
