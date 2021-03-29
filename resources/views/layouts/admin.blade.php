<!doctype html>


<html>



	@include('partials.admin.head')
    <script>
        var baseUrl = "{{url('')}}";
        var IsSuperUser = {{Permission::IsSuperUser()}}
    </script>
    @stack('include_head')

    @stack('css')
    <link href={{asset("assets/css/main.css")}} rel="stylesheet">


    @stack('stylesheet')

    @stack('js')

    @stack('scripts')

    @stack('head_end')
    <body>
    	  <div id="loader-wrapper">
    		<div id="loader"></div>
        	<div class="loader-section section-left"></div>
        	<div class="loader-section section-right"></div>
    	</div>


		<div class="app-container app-theme-white body-tabs-shadow fixed-header fixed-sidebar fixed-footer">
            @stack('body_start')

            <!-- Site wrapper -->

            @include('partials.admin.header')

            @include('partials.admin.themesettings')

			<div class="app-main">
              
                    @include('partials.admin.sidebar')
              
    			<div class="app-main__outer">

    			 	@stack('include_content')

                    @include('partials.admin.footer')
                </div>
        	</div>

	    	@stack('body_end')



        </div>



        @include('partials.admin.wrapper')


    	@include('partials.admin.bodyfooter')

    	@stack('dialogs')

    </body>
</html>

<script>
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });


    $( document ).ready(function() {

        $(document).ajaxError(function (event, jqxhr, settings, thrownError) {
            if (jqxhr.status == 419) {
                window.location.replace("{{url('/login')}}");
                return;
            }
            alert(jqxhr.responseJSON.message);
        });


        $('#logoutbutton').click(function () {
            window.location.replace("{{url('/logout')}}");

        });

        $('#loginbutton').click(function () {
            window.location.replace("{{url('/login')}}");

        });
    });


</script>
