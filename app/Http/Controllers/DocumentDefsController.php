<?php

namespace App\Http\Controllers;

use App\Facades\Permissions;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use App\Http\Controllers\Controller;

use App\Models\ClientOffer\ClientOffer;
use App\Models\Client\Client;
use App\Models\Document\Document;
use App\Models\Users\User;
use App\Models\Dictionaries\Dictionary;



class DocumentDefsController extends Controller
{
    //=============  Document flows  ===========================    
    public function documentflows(Request $request){
        
        $OrganizationId = session('organizationId');
        
        
        $types = Document::getTypes($OrganizationId);
        $states = Document::getStates($OrganizationId);
      //  $persons = User::getPersons($OrganizationId);
      //  $roles = User::getRoles($OrganizationId);
        $actions = Permissions::getActions(' 1 = 1');
        
        
        $docflows = Document::getDocFlows($OrganizationId);
        
        
        return view('documentdefs/docflow', ['docflows' =>$docflows, 'doctypes' => $types, 'docstates' => $states, 
           'actions'=>$actions]);
    }
    
    public function ajaxgetdocumentflows(Request $request){
        $OrganizationId = session('organizationId');
        $docflows = Document::getDocFlows($OrganizationId);
        return  ['masterlist' =>$docflows];
    }
    
    public function savedocumentflowajax(Request $request){
        $OrganizationId = session('organizationId');
        
        $DocumentFlowId = $request->DocumentFlowId;
        $Name = $request->Name;
        $Code = $request->Code;
        $DocumentTypeId = $request->DocumentTypeId;
        $InitialDocumentStateId = $request->InitialDocumentStateId;
        $FinalDocumentStateId = $request->FinalDocumentStateId;
        $NextDocumentTypeId = $request->NextDocumentTypeId;
        $ActionId = $request->ActionId;
        
        
       return [Document::SaveDocumentFlow($OrganizationId, $DocumentFlowId, $Name, $Code, $DocumentTypeId,
                                $InitialDocumentStateId, $FinalDocumentStateId, $NextDocumentTypeId, $ActionId)];
    }
    
    
    public function ajaxgetdocumentflow(Request $request){
        $DocumentFlowId = $request->DocumentFlowId;
        return [Document::getDocFlow($DocumentFlowId)];
    }
    
    public function deletedocumentflowajax(Request $request){
        $DocumentFlowId = $request->DocumentFlowId;
        return Document::deleteDocFlow($DocumentFlowId);
    }
    
    //============  Document types  ===============================
    
    public function documenttypes(Request $request){
        $OrganizationId = session('organizationId');

        $types = Document::getTypes($OrganizationId);
        return view('documentdefs/doctypes', ['masterlist' => $types]);
    }
    public function savedocumenttypeajax(Request $request){
        
        $OrganizationId = session('organizationId');
        
        $Name = $request->Name;
        $Code = $request->Code;
        $DocumentTypeId = $request->DocumentTypeId;
        $Category = $request->Category;
        
        $States = $request->delta;
        $Serials = $request->deltaS;
        
  
        
        return [Document::SaveDocumentType($OrganizationId, $DocumentTypeId, $Name, $Code, $Category, $States, $Serials)];
        
    }
    public function getdocumenttypeajax(Request $request){
        $DocumentTypeId = $request->DocumentTypeId;

        $serials = Dictionary::getDocumentSerialsById($DocumentTypeId);
        return [Document::getDocumentType($DocumentTypeId), $serials];
    }
    
    public function getdocumenttypesajax(Request $request){
        $OrganizationId = session('organizationId');
        return  ['masterlist' => Document::getTypes($OrganizationId)];
    }
    
    public function getDocumentStatesAjax(Request $request){
        $DocumentTypeId = $request->DocumentTypeId;
        return Document::getDocumentStates($DocumentTypeId);
    }

    public function getDocumentSerialsAjax(Request $request){
        $DocumentTypeId = $request->DocumentTypeId;
        return Document::getDocumentSerials($DocumentTypeId);
    }

    public function deletedocumenttypeajax(Request $request){
        $DocumentTypeId = $request->DocumentTypeId;
        return Document::deleteDocumentType($DocumentTypeId);
    }
 
}