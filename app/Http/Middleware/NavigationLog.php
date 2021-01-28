<?php

namespace App\Http\Middleware;

use App\Models\Common\Settings;
use Cookie;
use Closure;
use Illuminate\Support\Facades\DB;
use Exception;


class NavigationLog {



    public function handle($request, Closure $next, $guard = null)
    {
        $PersonId = session('PersonId');
        if (($PersonId != null ) && ($request->isMethod('get'))){

            $sql = "insert into navigationhistory (PersonId, Location) values ({$PersonId}, '{$request->path()}')";
    
            DB::select($sql);

              //sa bagam in sesiune si instoricul cu aceasta ocazie

            $sql = "select  Location , max(Moment)
            from navigationhistory n 
            where Location not like '%/%' and PersonId = {$PersonId}
            group by Location
            order by 2 desc
            LIMIT 0, 10";
            
            

            $history = DB::select($sql);
            $request->session()->put('navhistory', $history);
         

        }


      


        return $next($request);
    }
}
