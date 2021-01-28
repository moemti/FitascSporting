<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use App\Http\Controllers\Controller;

use App\Models\PM\Note;




class NoteController extends Controller
{

    public function getnotes(Request $request){

        $OrganizationId = session('organizationId');
        $PersonId = session('PersonId');
        $filter = $request->filter;
     
        $notes = Note::getList( $OrganizationId, $PersonId, $filter);

        $FilterSource = Note::FilterSource;
        $MasterPrimaryKey = Note::MasterPrimaryKey;
        $CustomFilters = Note::CustomFilters;

        return view('PM/note', [ 'masterlist' => $notes, 'FilterSource'=> $FilterSource, 'CustomFilters'=> $CustomFilters, 'MasterPrimaryKey' => $MasterPrimaryKey]);
        
        
    }
    
    

    public function getnotesajax(Request $request){

        $PersonId = session('PersonId');
        $OrganizationId = session('organizationId');

        $filter = $request->filter;

        if ($filter == "all")
            $filter = " 1 = 1";

        $notes = Note::getList( $OrganizationId, $PersonId, $filter);
        return  [ 'masterlist' => $notes];
    }

    public function savenoteajax(Request $request){

        $fields = $request;

        $PersonId = session('PersonId');
        $OrganizationId = session('organizationId');
        $LocationId = session('LocationId');

        $note = Note::SaveNote($fields, $PersonId, $OrganizationId, $LocationId);

        return [$note];
    }

    public function getnoteajax(Request $request){
        $NoteId = $request->NoteId;

        $note = Note::getNote($NoteId);

        return  [$note ];

    }

    public function deletenoteajax(Request $request){
        $NoteId = $request->NoteId;
        return Note::deleteNote($NoteId);
    }




}
