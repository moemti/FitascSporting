<?php

namespace App\Providers;

use Illuminate\Support\Facades\Blade;
use Illuminate\Support\ServiceProvider;
use App\Models\Common\Permissions;
use Illuminate\Support\Facades\DB;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->singleton(Permissions::class);
        $this->app->alias(Permissions::class, 'Permission');
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    

    public function boot()
    {
        if(env('APP_DEBUG')) {
           // return; // we have a problem with identity keys - the insert overrides the identity. We could keep just the time with miliseconds
            DB::listen(function($query) {
              
                
                if (!(strpos($query->sql,  "logsql") > 0)){
                    
                    $PersonId = session('PersonId');

                    if ($PersonId == null)
                        $PersonId = 'null';
                    
                    $log = $query->sql . ' [' . implode(', ', $query->bindings) . ']' ;
                    
                    $log = str_replace("'", "", $log);

                    return;

                    DB::select("insert into logsql (PersonId, log) values ({$PersonId}, '{$log}')");
                   
                }
            });
        }

        Blade::directive('permission', function ($action) {
            return "<?php if (Permission::hasPermission({$action})) : ?>";
        });

        Blade::directive('permissionreturn', function ($action) {
            return "<?php 
            
                    if (!Permission::hasPermission({$action})) {
                    echo '<script>window.location = \"welcome\";</script>';
                    } 
                ?>";
        });
     

        Blade::directive('endpermission', function () {
            return "<?php endif; ?>";
        });

        Blade::directive('session', function($expression) {

            return '<?php

                echo session("'.$expression.'");

            ?>';


        });



        Blade::directive('Menu', function($arguments) {

                list($href, $label, $action, $newtab) = explode(',',str_replace(['(',')',' ', "'"], '', $arguments));


                return '<?php

                $haspermission = true;
                if ("'.$action.'" != "")
                    if (!Permission::hasPermission("'.$action.'"))
                        $haspermission = false;
                        
                
                $tab = "";
                if ("'.$newtab.'" == "true")
                $tab = " target=\'_blank\' "; 


                if ($haspermission){        
                    $lab = trans("'.$label.'");

                    if ( "'.$href.'" == "/"||  "'.$href.'" == ""){
                    $url = url("/");
                    }
                    else{
                        $url = url("/")."/"."'.$href.'";
                    }

                    if ($url == url()->current())
                        echo
                            "<li><a ". $tab." href=\"'.$href.'\" class =  \"mm-active sidemenu\">
                                <i class=\"metismenu-icon\">
                                </i> $lab
                            </a></li>";


                    else {
                        echo

                        "<li><a ". $tab." href=\"'.$href.'\"  class =  \"sidemenu\">
                                <i class=\"metismenu-icon \">
                                </i> $lab
                            </a></li>";
                    };
                }

            ?>';


            });


        Blade::directive('MainMenu', function($arguments) {

            list($href, $label) = explode(',',str_replace(['(',')',' ', "'"], '', $arguments));



            return '<?php

                 $lab = trans("'.$label.'");

                if ( "'.$href.'" == "/"||  "'.$href.'" == ""){
                   $url = url("/");
                }
                else{
                    $url = url("/")."/"."'.$href.'";
                }

                if ($url == url()->current())
                    echo
                        "<a href=\"'.$href.'\" class =  \"mm-active\">
                            <i class=\"metismenu-icon\">
                            </i> $lab
                        </a>";


                else {
                    echo

                       "<a href=\"'.$href.'\">
                            <i class=\"metismenu-icon \">
                            </i> $lab
                        </a>";
                };

            ?>';


        });
    }
}
