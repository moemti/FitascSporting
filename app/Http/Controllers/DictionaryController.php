<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use App\Http\Controllers\Controller;
use App\Models\Dictionaries\Dictionary;



class DictionaryController extends Controller{

	public function getprojectcategories(Request $request){
		
		$DictioanryCode = 'PM_Category';
		
		$dictionaryid = 0;
		$dictionaries = $this->getdictionaries($DictioanryCode, $dictionaryid);
		
		return view('dictionaries/dictionary/projectcategory', ['dictionaryid'=>$dictionaryid, 'list' => $dictionaries]);
	}

	// == generale == 		

    public function getdictionaries($code, &$dictionaryid){

        $OrganizationId = session('organizationId');
        $dictionaryid = Dictionary::getDictionaryId($code);
        return Dictionary::getList( $OrganizationId, $dictionaryid);
       
    }

    public function getDictionaryItem($dictionaryCode, $dictionaryItemCode){
        $OrganizationId = session('organizationId');
        $dictionaryid = Dictionary::getDictionaryId($dictionaryCode);
        return Dictionary::getItem($OrganizationId, $dictionaryid, $dictionaryItemCode);
    }

    public function getdictionariesajax(Request $request){

		
        $OrganizationId = session('organizationId');
        $DictionaryId = $request->masterlistdata[0];
        $dictionaries = Dictionary::getList($OrganizationId, $DictionaryId);
        return  [ 'list' => $dictionaries];
    }

    public function savedictionaryajax(Request $request){

        $OrganizationId = session('organizationId');
		
		$DictionaryId = $request->DictionaryId;
		$ElemDictionaryId= $request->ElemDictionaryId;
        $Name = $request->Name;
        $Code = $request->Code;
        $Description = $request->Description;
        $IsActive = $request->IsActive;
        $ParentId = $request->ParentId;
        
        return [Dictionary::SaveDictionary($OrganizationId, $DictionaryId, $ElemDictionaryId, $Name, $Code, $Description, $IsActive, $ParentId)];
    }

    public function getdictionaryajax(Request $request){
        $ElemDictionaryId = $request->ElemDictionaryId;
        return  [Dictionary::getdictionary($ElemDictionaryId)];
    }

    public function deletedictionaryajax(Request $request){
        $ElemDictionaryId = $request->ElemDictionaryId;
        return Dictionary::deletedictionary($ElemDictionaryId);
    }

    
}
