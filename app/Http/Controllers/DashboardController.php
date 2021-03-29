<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use App\Http\Controllers\Controller;

use App\Models\ClientDocs\ClientOffer;
use App\Models\Client\Client;
use App\Models\Users\Person;
use App\Models\Document\Document;
use App\Http\Controllers\ClientOfferController;
use App\Http\Controllers\ClientContractController;
use App\Http\Controllers\ClientInvoiceController;



class DashboardController extends Controller
{


    // public function getOfferCounts($OrganizationId){
    //     $c = new ClientOfferController;
    //     return $c->getCounts($OrganizationId);
    // }

    // public function getContractCounts($OrganizationId){
    //     $c = new ClientContractController;
    //     return $c->getCounts($OrganizationId);
    // }

    // public function getInvoiceCounts($OrganizationId){
    //     $c = new ClientInvoiceController;
    //     return $c->getCounts($OrganizationId);
    // }

    public function welcome(Request $request){

        $OrganizationId = session('organizationId');
        $PersonId = session('PersonId');
        $param = null;

        $Category = "";
        $Percent = "";
        $CategoryLast = "";
        $PercentLast = "";
        $Price = 25;
      

        if ($PersonId != null)
            $param = Person::getPersonParamsAll($PersonId);
        
        if ($param != null){
            $Category = $param->Category;
            $Percent = $param->Percent;
            $CategoryLast = $param->CategoryLast;
            $PercentLast = $param->PercentLast;
            $Price = $param->Price;
        }

        $competition = ['personparam' => $param];//$this->getOfferCounts($OrganizationId);
        $cc = [];//$this->getContractCounts($OrganizationId);
        $ic = [];// $this->getInvoiceCounts($OrganizationId);


        return view('dashboards/welcome', ['competition'=>$competition, 'clientcontractcounts' => $cc, 'clientinvoicecounts' => $ic]);
    }



}


class DocumentCounts{
    var $Draft;
    var $Sent;
    var $Closed;
    var $Feedback;
    var $All;
    var $Contract;
}
