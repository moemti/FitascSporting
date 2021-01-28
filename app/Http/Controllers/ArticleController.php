<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use App\Http\Controllers\Controller;

use App\Models\Dictionaries\Article;




class ArticleController extends Controller
{

    public function getlist(Request $request){

        $filter = "1=1"; // nothing initially, we could make a dictionary configuration

        $OrganizationId = session('organizationId');
        $items = Article::getList( $OrganizationId, $filter);

        $MasterPrimayKey = Article::MasterKeyField;
        $DefaultMasterValues = Article::DefaultMasterValues;
        $cfilters = Article::CustomFilters;
        $FilterSource = Article::FilterSource;

        
        $vatcodes = app(CommonDictionariesController::class)->getVatCodes();
        $categories = app(CommonDictionariesController::class)->getArticleCategories();

        return view('dictionaries/article', ['masterlist' => $items, 'DefaultMasterValues' => $DefaultMasterValues,'CustomFilters' => $cfilters, 
                'FilterSource'=> $FilterSource, 'MasterPrimaryKey'=>$MasterPrimayKey, 'categories' => $categories, 'vatcodes' => $vatcodes]);
    }

    public function getitemsajax(Request $request){

        $OrganizationId = session('organizationId');
        $filter = $request->filter;

        if ($filter == "all")
            $filter = " 1 = 1";
       
        $items = Article::getList($OrganizationId, $filter);
        return  [ 'masterlist' => $items];
    }

    public function saveitemajax(Request $request){

        $fields = $request;

        $fields['PersonId'] = session('PersonId');
        $fields['OrganizationId'] = session('organizationId');
        $fields['LocationId'] = session('LocationId');

        return [Article::SaveItem($fields)];
    }

    public function getitemajax(Request $request){
        $ItemId = $request[Article::MasterKeyField];
        return  [Article::getItem($ItemId)];
    }

    public function deleteitemajax(Request $request){
        $ItemId = $request[Article::MasterKeyField];
        return Article::deleteItem($ItemId);
    }




}
