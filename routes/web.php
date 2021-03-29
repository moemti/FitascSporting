<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/clear-cache', function() {
    $exitCode = Artisan::call('cache:clear');
    return '<h1>Cache facade value cleared</h1>';
});
Route::get('/view-clear', function() {
    $exitCode = Artisan::call('view:clear');
    return '<h1>View cache cleared</h1>';
});

 Route::get('/login', function(){
     return view('auth/login');
 });

    Route::post('authenticate', 'Auth\LoginController@authenticate');
    Route::get('logout', 'Auth\LoginController@logout');

   

    
    Route::group(['middleware' => 'options'], function () {

        Route::get('printinvoice/{DocumentId}', 'ClientInvoiceController@printinvoice');
        Route::get('exchangerates', 'UtilitiesController@exchangerates');
        Route::get('welcome', 'DashboardController@welcome');   
        Route::get('/', 'DashboardController@welcome'); 
            
        Route::group(['middleware' => 'navigationlog'], function () {
            Route::middleware(['guest'])->group(function(){
             
              
               
             

                //============================= person ======================================
                Route::get('persons', 'PersonController@getlist');
                Route::post('savepersonajax', 'PersonController@saveitemajax');
                Route::post('getpersonsajax', 'PersonController@getitemsajax');
                Route::post('getpersonajax', 'PersonController@getitemajax');
                Route::post('deletepersonajax', 'PersonController@deleteitemajax');
                Route::post('getpersonfunctionsajax', 'PersonController@getdetaillistajax');

                //============================= roles ======================================
               
                Route::get('roles', 'RoleController@getlist');
                Route::post('saveroleajax', 'RoleController@saveitemajax');
                Route::post('getroleajax', 'RoleController@getitemajax');
                Route::post('getrolesajax', 'RoleController@getitemsajax');
                Route::post('deleteroleajax', 'RoleController@deleteitemajax');
                Route::post('getrolepermissionsajax', 'RoleController@getdetaillistajax');
                

                //============================= users ======================================
                Route::get('users', 'UserController@getlist');
                Route::post('saveuserajax', 'UserController@saveitemajax');
                Route::post('getuserajax', 'UserController@getitemajax');
                Route::post('getusersajax', 'UserController@getitemsajax');
                Route::post('deleteuserajax', 'UserController@deleteitemajax');

                //============================= partners ======================================
                Route::get('partners', 'PartnerController@getpartners');
                Route::post('savepartnerajax', 'PartnerController@savepartnerajax');
                Route::post('getpartnersajax', 'PartnerController@getpartnersajax');
                Route::post('getpartnerajax', 'PartnerController@getpartnerajax');
                Route::post('deletepartnerajax', 'PartnerController@deletepartnerajax');
                
                
                //============================= dictionaries ======================================
                Route::get('projectcategories', 'DictionaryController@getprojectcategories');
                                    // == common dictionary == //        
                Route::post('savedictionaryajax', 'DictionaryController@savedictionaryajax');
                Route::post('getdictionariesajax', 'DictionaryController@getdictionariesajax');
                Route::post('getdictionaryajax', 'DictionaryController@getdictionaryajax');
                Route::post('deletedictionaryajax', 'DictionaryController@deletedictionaryajax');
                
              


                //============================= permisions ======================================

                Route::get('permissions', 'PermissionController@getpermissions');
                Route::post('savepermissionajax', 'PermissionController@savepermissionajax');
                Route::post('getpermissionsajax', 'PermissionController@getpermissionsajax');
                Route::post('getpermissionajax', 'PermissionController@getpermissionajax');
                Route::post('deletepermissionajax', 'PermissionController@deletepermissionajax');
                Route::post('getpermissiondictionariesajax', 'PermissionController@getpermissiondictionariesajax');


                Route::get('rolepermissions', 'PermissionController@rolepermissions');
                Route::post('saverolepermissionsajax', 'PermissionController@saverolepermissionsajax');
                Route::post('getrolepermissionssajax', 'PermissionController@getrolepermissionssajax');
                Route::post('deleterolepermissionsajax', 'PermissionController@deleterolepermissionsajax');
                Route::post('getrolepermissionsdictionariesajax', 'PermissionController@getrolepermissionsdictionariesajax');


                Route::get('userpermissions', 'PermissionController@userpermissions');
                Route::post('saveuserpermissionsajax', 'PermissionController@saveuserpermissionsajax');
                Route::post('getuserpermissionssajax', 'PermissionController@getuserpermissionssajax');
                Route::post('getuserpermissionsajax', 'PermissionController@getuserpermissionsajax');
                Route::post('deleteuserpermissionsajax', 'PermissionController@deleteuserpermissionsajax');
                Route::post('getuserpermissionsdictionariesajax', 'PermissionController@getuserpermissionsdictionariesajax');

                //=============================  utilities  ================================

                Route::post('downloadBNR', 'UtilitiesController@downloadBNR');
                Route::post('getExchangeRateAjax', 'UtilitiesController@getExchangeRateAjax');
                Route::post('mytime', 'UtilitiesController@getmytime');
            
                //=============================  articles  ================================

                Route::get('articles', 'ArticleController@getlist');
                Route::post('savearticleajax', 'ArticleController@saveitemajax');
                Route::post('getarticlesajax', 'ArticleController@getitemsajax');
                Route::post('getarticleajax', 'ArticleController@getitemajax');
                Route::post('deletearticleajax', 'ArticleController@deleteitemajax');



                //=============================  reports  ================================

                Route::get('reportcategories', 'ReportcatController@getList');
                Route::post('savereportcatajax', 'ReportcatController@saveitemajax');
                Route::post('getreportcatsajax', 'ReportcatController@getitemsajax');
                Route::post('getreportcatajax', 'ReportcatController@getitemajax');
                Route::post('deletereportcatajax', 'ReportcatController@deleteitemajax');
    

                //============================= 25 ======================================
                Route::get('training25s', 'Training25Controller@getList');
                Route::post('savetraining25ajax', 'Training25Controller@saveitemajax');
                Route::post('gettraining25sajax', 'Training25Controller@getitemsajax');
                Route::post('gettraining25ajax', 'Training25Controller@getitemajax');
                Route::post('deletetraining25ajax', 'Training25Controller@deleteitemajax');
                Route::post('getPersonInfo', 'Training25Controller@getPersonInfo');
                

                 //============================= 25 finance ======================================
                 Route::get('training25finance', 'Training25financeController@getList');
                 Route::post('savetraining25financeajax', 'Training25financeController@saveitemajax');
                 Route::post('gettraining25financesajax', 'Training25financeController@getitemsajax');
                 Route::post('gettraining25financeajax', 'Training25financeController@getitemajax');
                 Route::post('deletetraining25financeajax', 'Training25financeController@deleteitemajax');
                 Route::post('getPersonInfo', 'Training25financeController@getPersonInfo');
                 

            });
    });
});