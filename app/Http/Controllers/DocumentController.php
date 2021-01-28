<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use App\Http\Controllers\Controller;

use App\Models\ClientDocs\ClientOffer;
use App\Models\Client\Client;
use App\Models\Document\Document;



class DocumentController extends Controller
{

    public $ModelName = '';
    public $views;

    public function ClientDocument(){
        $r = new \ReflectionClass($this->ModelName);
        return  $r->newInstanceWithoutConstructor();
    }

    public function getCounts($OrganizationId){

        $numbers = $this->ClientDocument()->getdocumentCount($OrganizationId);
        $all = 0;

        foreach ($numbers as $n){
            $all += $n->Count;
        }

        return [$numbers, $all];
    }

    public function getdocuments(Request $request){

        $PersonId = session('PersonId');
        $OrganizationId = session('organizationId');

        $documents = $this->ClientDocument()->getList($PersonId, $OrganizationId, '');
        $clients = Client::getList( $OrganizationId);

        $oc = $this->getCounts($OrganizationId);


        return view($this->views['documents'], ['documents' => $documents, 'clients' => $clients, 'counts' => $oc]);
    }


    public function getdocument($DocumentId){

        $PersonId = session('PersonId');
        $OrganizationId = session('organizationId');

        $documents = $this->ClientDocument()->getList($PersonId, $OrganizationId, "d.DocumentId= $DocumentId");
        $clients = Client::getList( $OrganizationId);

        $oc = $this->getCounts($OrganizationId);


        return view($this->views['documents'], ['documents' => $documents, 'clients' => $clients, 'counts' => $oc]);
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

        $document = $this->ClientDocument()->updatedocumentState($DocumentId, $State, $OrganizationId, $PersonId,
            $Description, $Comment, $NextDocumentTypeId, $CustomerId, $NextDocumentStateId);

        $versions = $this->ClientDocument()->getdocumentVersions($DocumentId);

        $view = view('partials/clients/versions', ['versions' => $versions])->render();


        $DocumentStateId = $document[0]->DocumentStateId;
        $DocumentTypeId = $document[0]->DocumentTypeId;

        $actions = Document::getActions($DocumentTypeId, $DocumentStateId, $PersonId);
        $view3 = view('partials/clients/actions', ['actions' => $actions])->render();

        $related = Document::getRelatedDocuments($DocumentId);
        $view4 = view('partials/clients/relateddocuments', ['related' => $related])->render();

        return [$document, $view, null, $view3, $view4];
    }

    public function ajaxsaveclientdocument(Request $request){

        $DocumentId = $request->DocumentId;
        $Date = $request->Date;
        $Number = $request->Number;
        $State = $request->State;
        $CustomerId = $request->CustomerId;
        $PersonId = session('PersonId');
        $OrganizationId = session('organizationId');
        $Description = $request->Description;

        $document = $this->ClientDocument()->updateinsertdocument($DocumentId, $Date, $Number, $State, $CustomerId, $OrganizationId, $PersonId, $Description);



        if ($DocumentId == '')
            $DocumentId = $document[0]->DocumentId; // daca a fost insert

        $versions = $this->ClientDocument()->getdocumentVersions($DocumentId);
        $view = view('partials/clients/versions', ['versions' => $versions])->render();
        $DocumentStateId = $document[0]->DocumentStateId;
        $DocumentTypeId = $document[0]->DocumentTypeId;
        $actions = Document::getActions($DocumentTypeId, $DocumentStateId, $PersonId);
        $view3 = view('partials/clients/actions', ['actions' => $actions])->render();

        return [$document, $view, null, $view3];
    }

    public function ajaxgetclientdocument(Request $request){
        $PersonId = session('PersonId');
        $DocumentId = $request->DocumentId;
        $document = $this->ClientDocument()->getdocument($DocumentId);
        $versions = $this->ClientDocument()->getdocumentVersions($DocumentId);

        $attachments = Document::getDocumentAttachments($DocumentId);
        $view = view('partials/clients/versions', ['versions' => $versions])->render();

        $view2 = view('partials/clients/attachments', ['attachments' => $attachments])->render();

        $DocumentStateId = $document[0]->DocumentStateId;
        $DocumentTypeId = $document[0]->DocumentTypeId;
        $actions = Document::getActions($DocumentTypeId, $DocumentStateId, $PersonId);

        $view3 = view('partials/clients/actions', ['actions' => $actions])->render();

        $related = Document::getRelatedDocuments($DocumentId);
        $view4 = view('partials/clients/relateddocuments', ['related' => $related])->render();

        return [$document, $view, $view2, $view3, $view4];


    }

    public function ajaxgetclientdocuments(Request $request){

        $PersonId = session('PersonId');
        $OrganizationId = session('organizationId');

        $filter = $request->filter;
        $documents = $this->ClientDocument()->getList($PersonId, $OrganizationId, $filter);


        $oc = $this->getCounts($OrganizationId);


        return ['documents' => $documents, 'counts' => $oc];
    }


}
