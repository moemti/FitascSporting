<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use App\Http\Controllers\Controller;
use App\Models\Document\Document;
use File;

class GeneralController extends Controller
{

    public function ajaxuploaddocumentfile(Request $request){
        if($request->hasFile('thefile')) {

            $DocumentId = $request->DocumentId;
            $Description = $request->Description;
            $Version = $request->Version;

            if ($Version == 'undefined')
                $Version = 0;

            $file = $request->file('thefile');


            $Path = public_path().'/uploads/Documents/'.$DocumentId.'/'.$Version.'/';

            $name = $file->getClientOriginalName();

            $file->move($Path, $name);




            $attachments = Document::insertDocumentAttachements($DocumentId, $Version, $name, '/uploads/Documents/'.$DocumentId.'/'.$Version.'/', $Description);



            return view('partials/clients/attachments', ['attachments' => $attachments])->render();
        }



        return 'No file';

    }

    public function ajaxdeletedocumentfile(Request $request){


            $AttachmentId = $request->AttachmentId;

            $DocumentId = $request->DocumentId;

            $file = Document::getDocumentAttachements($AttachmentId)[0];
            $attachments = Document::deleteDocumentAttachements($AttachmentId, $DocumentId);


            File::delete( public_path().$file->Path.$file->Name);

            return view('partials/clients/attachments', ['attachments' => $attachments])->render();


    }



    public function downloaddocumentfile($id){
        $AttachmentId = $id;

        $file = Document::getDocumentAttachements($AttachmentId)[0];

        $filename = $file->Name;
        $path = $file->Path;

        return response()->download( public_path().$path.$filename);

    }

    public function ajaxdeletedocument(Request $request){

        $DocumentId = $request->DocumentId;
        Document::deleteDocument($DocumentId);
        return 0;


    }


    public function viewdocument($id){

        $DocumentId = $id;

        //redirecam catre controllerul care trebuie si filtram pe id

        $tipDoc = Document::getDocumentTypeByDocId($DocumentId);


        switch ($tipDoc[0]->Code){
            case 'OC':
                return app('App\Http\Controllers\ClientOfferController')->getdocument($DocumentId);
                break;
            case 'CC':
                return app('App\Http\Controllers\ClientContractController')->getdocument($DocumentId);
                break;
            case 'FV':
                return app('App\Http\Controllers\ClientInvoiceController')->getdocument($DocumentId);
                break;
            case 'OF':
                return app('App\Http\Controllers\SupplierOfferController')->getdocument($DocumentId);
                break;

        }

    }


}
