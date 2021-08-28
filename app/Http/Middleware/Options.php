<?php

namespace App\Http\Middleware;

use App\Models\Common\Settings;
use Cookie;
use Closure;

class Options {



    public function handle($request, Closure $next, $guard = null)
    {

        $PersonId = session('PersonId', 1);

        if (Cookie::has('lang-symbol')) {
            $locale = Cookie::get('lang-symbol');

        }
        else {
            $locale = Settings::getUserSetting($PersonId, 'Locale');

            if ($locale == 'NoSetting') {
                $locale = 'GB';
            };
        }

       
         if ($locale == 'en')      
             $locale = 'GB';




        session(['Locale' => $locale]);


        app()->setLocale($locale);

        return $next($request);
    }
}
