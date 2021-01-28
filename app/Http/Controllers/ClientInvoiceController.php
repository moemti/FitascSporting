<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use App\Http\Controllers\Controller;

use App\Models\Client\Client;
use App\Models\Document\Document;

use App\Models\ClientDocs\ClientInvoice;
use App\Models\Common\Permissions;




class ClientInvoiceController extends Controller
{

    private $MasterFields; 
    
    
    function  __construct(){
        $this->MasterFields = ClientInvoice::MasterFields;
    } 


    public $views = ['masterlist'=>'clients/customerinvoices'];


    public function getdocuments(Request $request){

        $PersonId = session('PersonId');
        $OrganizationId = session('organizationId');

        $Filter = $request->filter;
        if ($Filter == null)
            $Filter = app(CommonDictionariesController::class)->getModuleInitialFilter('CUST_INVOICE')[1];

        $DocumentCode = 'FV';
        $cfilters = ClientInvoice::CustomFilters;

        $documents = ClientInvoice::getList($PersonId, $OrganizationId, $Filter);

        $DefaultMasterValues = ClientInvoice::DefaultMasterValues;
        $DefaultDetailValues = ClientInvoice::DefaultDetailValues;
        $FilterSource = ClientInvoice::FilterSource;

        // dictionaries
        $clients = Client::getList( $OrganizationId);
        $Currencies = app(CommonDictionariesController::class)->getCurrencies();
        $Serials =  app(CommonDictionariesController::class)->getDocumentSerials($DocumentCode);
        $EUType = app(CommonDictionariesController::class)->getEUType();
        $DeliveryRep = app(CommonDictionariesController::class)->getDeliveryRep();
        $SalesRep = app(CommonDictionariesController::class)->getSalesRep();
        $vatcodes = app(CommonDictionariesController::class)->getVatCodes();
        $articles = app(CommonDictionariesController::class)->getArticles();


        $listactions = [(object)['Code'=>'delete', 'Name'=>'Delete invoices', 'Warning'=>'Doriti sa stergeti facturile selectate?', 'Forbidden'=>Permissions::IsSuperUser()]
                    
                        ];


        return view($this->views['masterlist'], 
                [ 'MasterFields' => $this->MasterFields,'DefaultMasterValues' => $DefaultMasterValues, 'DefaultDetailValues' => $DefaultDetailValues, 'masterlist' => $documents, 
                'clients' => $clients, 'CustomFilters' => $cfilters,
                'Currencies'=>$Currencies, 'Serials' => $Serials, 'EUType'=>$EUType, 'DeliveryRep' => $DeliveryRep, 'SalesRep' => $SalesRep, 'vatcodes'=>$vatcodes, 'articles'=>$articles,
                'FilterSource'=> $FilterSource, 'listactions' => $listactions]);
    }


    public function ajaxsaveinvoice(Request $request){


        $DocumentId = $request->DocumentId;

        $fields = $request;
     

        $PersonId = session('PersonId');
        $OrganizationId = session('organizationId');
        $LocationId = session('LocationId');
        
        $document = ClientInvoice::updateinsertdocument($fields, $PersonId, $OrganizationId, $LocationId);


        if ($DocumentId == '')
            $DocumentId = $document[0]->DocumentId; // daca a fost insert

        $DocumentStateId = $document[0]->DocumentStateId;
        $DocumentTypeId = $document[0]->DocumentTypeId;

        $actions = Document::getActions($DocumentTypeId, $DocumentStateId, $PersonId);
        $view3 = view('partials/clients/invoice/actions', ['actions' => $actions])->render();

        return [$document, null, $view3, null  ];
    }

    public function getdocument($DocumentId){

        $PersonId = session('PersonId');
        $OrganizationId = session('organizationId');

        $documents = ClientInvoice::getList($PersonId, $OrganizationId, "d.DocumentId= $DocumentId");
        $clients = Client::getList( $OrganizationId);

       


        return view($this->views['documents'], ['documents' => $documents, 'clients' => $clients]);
    }


    public function deleteinvoice(Request $request){


        $DocumentId = $request->DocumentId;

        ClientInvoice::deleteInvoice($DocumentId);
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

        $document = ClientInvoice::updatedocumentState($DocumentId, $State, $OrganizationId, $PersonId,
            $Description, $Comment, $NextDocumentTypeId, $CustomerId, $NextDocumentStateId);

        $versions = ClientInvoice::getdocumentVersions($DocumentId);

        $view = view('partials/clients/versions', ['versions' => $versions])->render();


        $DocumentStateId = $document[0]->DocumentStateId;
        $DocumentTypeId = $document[0]->DocumentTypeId;

        $actions = Document::getActions($DocumentTypeId, $DocumentStateId, $PersonId);
        $view3 = view('partials/clients/invoice/actions', ['actions' => $actions])->render();

        $related = Document::getRelatedDocuments($DocumentId);
        $view4 = view('partials/clients/relateddocuments', ['related' => $related])->render();

        return [$document, $view, null, $view3, $view4];
    }

    

    public function ajaxgetclientdocument(Request $request){
        $PersonId = session('PersonId');
        $DocumentId = $request->DocumentId;
        $document = ClientInvoice::getdocument($DocumentId);
        

        $attachments = Document::getDocumentAttachments($DocumentId);
 
        $view2 = view('partials/clients/attachments', ['attachments' => $attachments])->render();

        $DocumentStateId = $document[0]->DocumentStateId;
        $DocumentTypeId = $document[0]->DocumentTypeId;
        $actions = Document::getActions($DocumentTypeId, $DocumentStateId, $PersonId);

        $view3 = view('partials/clients/invoice/actions', ['actions' => $actions])->render();

        $related = Document::getRelatedDocuments($DocumentId);
        $view4 = view('partials/clients/relateddocuments', ['related' => $related])->render();

        return [$document, $view2, $view3, $view4];


    }

    public function ajaxgetinvoices(Request $request){
        
        $PersonId = session('PersonId');
        $OrganizationId = session('organizationId');

        $filter = $request->filter;

        if ($filter == "all")
            $filter = " 1 = 1";
        $documents = ClientInvoice::getList($PersonId, $OrganizationId, $filter);

        return ['documents' => $documents];
    }


    public function getinvoicedetailsajax(Request $request){
        return ClientInvoice::getInvoiceDetails($request->DocumentId);
        
    }

    public function printinvoice(Request $request){
        $DocumentId = $request->DocumentId;
        $OrganizationId = session('organizationId');
        return ClientInvoice::printinvoice($DocumentId, $OrganizationId);
    }
    
    public function invoicedoactionajax(Request $request){
        $DocumentId = $request->DocumentId;


        $PersonId = session('PersonId');
        $OrganizationId = session('organizationId');

        $ActionType = $request->ActionType;
       
        if ($ActionType == 'Validate'){
            $SerialId = $request->SerialNumberId;
            $Serial = $request->Serial;
            $document = ClientInvoice::ValidateInvoice($DocumentId, $OrganizationId, $SerialId, $Serial);
        }

        if ($ActionType == 'Devalidate'){
           
            $document = ClientInvoice::DevalidateInvoice($DocumentId, $OrganizationId);
        }
        
        if ($DocumentId == '')
            $DocumentId = $document[0]->DocumentId; // daca a fost insert

        $DocumentStateId = $document[0]->DocumentStateId;
        $DocumentTypeId = $document[0]->DocumentTypeId;

        $actions = Document::getActions($DocumentTypeId, $DocumentStateId, $PersonId);
        $view3 = view('partials/clients/invoice/actions', ['actions' => $actions])->render();

        return [$document, null, $view3, null  ];

    }


    function invoiceactionlistajax(Request $request){

        $actioncode = $request->ActionType;
        $keys = $request->Keys;

        if ($actioncode == 'delete'){

            foreach($keys as $k){
                $DocumentId = $k;
                ClientInvoice::deleteInvoice($DocumentId);
            }
        
        }
    }
}




