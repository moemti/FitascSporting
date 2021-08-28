<!doctype html>

<html lang="{{ app()->getLocale() }}">
	@include('partials.admin.head')
	<link href={{asset("assets/css/main.css")}} rel="stylesheet">
<body>
    <div class="app-container app-theme-white body-tabs-shadow">
            <div class="app-container">
                <div class="h-100">
                    <div class="h-100 no-gutters row">
     
                                @include('auth.loginbox')

                                
                        </div>
                    </div>
                </div>
            </div>
    </div>


<x-test>

</x-test>
	@include('partials.admin.bodyfooter')   

</body>
</html>
