<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use App\Http\Controllers\Controller;

use App\Models\Client\Client;
use App\Models\Document\Document;

use App\Models\ClientDocs\ClientContract;



class ClientContractController extends Controller
{

    private $MasterFields; 
    
    
    function  __construct(){
        $this->MasterFields = ClientContract::MasterFields;
    } 


    public $views = ['masterlist'=>'clients/customercontracts'];


    public function getdocuments(Request $request){

        $PersonId = session('PersonId');
        $OrganizationId = session('organizationId');

        $Filter = $request->filter;
        if ($Filter == null)
            $Filter = app(CommonDictionariesController::class)->getModuleInitialFilter('CUSTOMER_CONTRACT')[1];

        $DocumentCode = 'FV';
        $cfilters = ClientContract::CustomFilters;

        $documents = ClientContract::getList($PersonId, $OrganizationId, $Filter);

        $DefaultMasterValues = ClientContract::DefaultMasterValues;
        $DefaultDetailValues = ClientContract::DefaultDetailValues;
        $FilterSource = ClientContract::FilterSource;
        
        $listactions = [(object)['Code'=>'doinvoice', 'Name'=>'Do invoices', 'Warning'=>'Doriti sa generati facturi pentru facturile selectate?']];

        // dictionaries
        $clients = Client::getList( $OrganizationId);
        $Currencies = app(CommonDictionariesController::class)->getCurrencies();
        $EUType = app(CommonDictionariesController::class)->getEUType();
        $vatcodes = app(CommonDictionariesController::class)->getVatCodes();
        $articles = app(CommonDictionariesController::class)->getArticles();

        return view($this->views['masterlist'], 
                [ 'MasterFields' => $this->MasterFields,'DefaultMasterValues' => $DefaultMasterValues, 'DefaultDetailValues' => $DefaultDetailValues, 'masterlist' => $documents, 
                'clients' => $clients, 'CustomFilters' => $cfilters,
                'Currencies'=>$Currencies, 'EUType'=>$EUType,  'vatcodes'=>$vatcodes, 'articles'=>$articles,
                'FilterSource'=> $FilterSource, 'listactions' => $listactions]);
    }



    public function contractactionlistajax(Request $request){

        $actioncode = $request->ActionType;
        $keys = $request->Keys;
        
    
        
        if ($actioncode == 'doinvoice'){
            $InvoiceData = $request->InvoiceDate; 
            $ExchangeRate = $request->ExchangeRate;
            $PersonId = session('PersonId');
            foreach($keys as $k){
                ClientContract::DoInvoice($k, $InvoiceData, $ExchangeRate, $PersonId);
            }
          
        }

    }

    public function ajaxsavecontract(Request $request){


        $DocumentId = $request->DocumentId;

        $fields = $request;
     

        $PersonId = session('PersonId');
        $OrganizationId = session('organizationId');
        $LocationId = session('LocationId');
        
        $document = ClientContract::updateinsertdocument($fields, $PersonId, $OrganizationId, $LocationId);


        if ($DocumentId == '')
            $DocumentId = $document[0]->DocumentId; // daca a fost insert

        $DocumentStateId = $document[0]->DocumentStateId;
        $DocumentTypeId = $document[0]->DocumentTypeId;

        $actions = Document::getActions($DocumentTypeId, $DocumentStateId, $PersonId);
        $view3 = view('partials/clients/contract/actions', ['actions' => $actions])->render();

        return [$document, null, $view3, null  ];
    }

    public function getdocument($DocumentId){

        $PersonId = session('PersonId');
        $OrganizationId = session('organizationId');

        $documents = ClientContract::getList($PersonId, $OrganizationId, "d.DocumentId= $DocumentId");
        $clients = Client::getList( $OrganizationId);

        return view($this->views['documents'], ['documents' => $documents, 'clients' => $clients]);
    }


    public function deletecontract(Request $request){

        $DocumentId = $request->DocumentId;

        ClientContract::deleteContract($DocumentId);
    }


    public function ajaxschangeclientdocument(Request $request){

        $DocumentId = $request->DocumentId;
        $State =  $request->State;
        $NextDocumentTypeId = $request->NextDocumentTypeId;
        $NextDocumentStateId = $request->NextDocumentStateId;
        $CustomerId = $request->CustomerId;
        $PersonId = session('PersonId');
        $OrganizationId = session('organizationId');
        $Description = $request->Description;
        $Comment = $request->Comment;

        $document = ClientContract::updatedocumentState($DocumentId, $State, $OrganizationId, $PersonId,
            $Description, $Comment, $NextDocumentTypeId, $CustomerId, $NextDocumentStateId);

        $versions = ClientContract::getdocumentVersions($DocumentId);

        $view = view('partials/clients/versions', ['versions' => $versions])->render();


        $DocumentStateId = $document[0]->DocumentStateId;
        $DocumentTypeId = $document[0]->DocumentTypeId;

        $actions = Document::getActions($DocumentTypeId, $DocumentStateId, $PersonId);
        $view3 = view('partials/clients/contract/actions', ['actions' => $actions])->render();

        $related = Document::getRelatedDocuments($DocumentId);
        $view4 = view('partials/clients/relateddocuments', ['related' => $related])->render();

        return [$document, $view, null, $view3, $view4];
    }

    

    public function ajaxgetclientdocument(Request $request){
        $PersonId = session('PersonId');
        $DocumentId = $request->DocumentId;
        $document = ClientContract::getdocument($DocumentId);
        

        $attachments = Document::getDocumentAttachments($DocumentId);
 
        $view2 = view('partials/clients/attachments', ['attachments' => $attachments])->render();

        $DocumentStateId = $document[0]->DocumentStateId;
        $DocumentTypeId = $document[0]->DocumentTypeId;
        $actions = Document::getActions($DocumentTypeId, $DocumentStateId, $PersonId);

        $view3 = view('partials/clients/contract/actions', ['actions' => $actions])->render();

        $related = Document::getRelatedDocuments($DocumentId);
        $view4 = view('partials/clients/relateddocuments', ['related' => $related])->render();

        return [$document, $view2, $view3, $view4];


    }

    public function ajaxgetcontracts(Request $request){
        
        $PersonId = session('PersonId');
        $OrganizationId = session('organizationId');

        $filter = $request->filter;

        if ($filter == "all")
            $filter = " 1 = 1";
        $documents = ClientContract::getList($PersonId, $OrganizationId, $filter);

        return ['documents' => $documents];
    }


    public function getcontractdetailsajax(Request $request){
        return ClientContract::getContractDetails($request->DocumentId);
        
    }


    
    public function contractdoactionajax(Request $request){
        $DocumentId = $request->DocumentId;


        $PersonId = session('PersonId');
        $OrganizationId = session('organizationId');

        $ActionType = $request->ActionType;
 
        $view4 = null;
        if ($ActionType == 'Validate'){
           
            ClientContract::ValidateContract($DocumentId, $OrganizationId);
        }
        

        if ($ActionType == 'Invalidate'){
           
            ClientContract::InvalidateContract($DocumentId, $OrganizationId);
        }

        if ($ActionType == 'doinvoice'){

            $InvoiceData = $request->InvoiceDate; 
            $ExchangeRate = $request->ExchangeRate;


            ClientContract::DoInvoice($DocumentId, $InvoiceData, $ExchangeRate, $PersonId);
            $related = Document::getRelatedDocuments($DocumentId);
            $view4 = view('partials/clients/relateddocuments', ['related' => $related])->render();

        }



        $document = ClientContract::getdocument($DocumentId);

        if ($DocumentId == '')
            $DocumentId = $document[0]->DocumentId; // daca a fost insert

        $DocumentStateId = $document[0]->DocumentStateId;
        $DocumentTypeId = $document[0]->DocumentTypeId;

        $actions = Document::getActions($DocumentTypeId, $DocumentStateId, $PersonId);
        $view3 = view('partials/clients/contract/actions', ['actions' => $actions])->render();

        return [$document, null, $view3, $view4 ];

    }
}

