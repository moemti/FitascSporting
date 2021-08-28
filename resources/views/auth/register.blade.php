<!doctype html>

<html lang="{{ app()->getLocale() }}">
	@include('partials.admin.head')
	<link href={{asset("assets/css/main.css")}} rel="stylesheet">
<body>
    <div class="app-container app-theme-white body-tabs-shadow">
            <div class="app-container">
                <div class="h-100">
                    <div class="h-100 no-gutters row">
                       
                                                
                    <div class="h-100 d-flex bg-white justify-content-center align-items-center col-md-12 col-lg-12 bg-asteroid " style="color:silver;">
                            <div class="mx-auto app-login-box col-sm-12 col-md-4 col-lg-4">
                                    <div class="logo" style="    margin-bottom: 100px;
                                                        margin-left: 30px;
                                                        margin-right: 30px;">
                                        <a href="{{url('/')}}"> <img src="{{url('assets/images/logo_molland.svg')}}"  height="100%" width="100%" > </a>

                                    </div>
                                <div class="app-logo"><span class="d-block text-nowrap"><h4>Register</h4></span></div>
                                
                                    <div class="divider row"></div>
                                <div>
                                    <form action="registerme" method="POST">

                                        @csrf
                                                <h5 class="">
                                                    <h4 class="mt-2">
                                                        <div>Welcome ,</div>
                                                        <span>Please fill in to create an account!</span>
                                                        
                                                         </h5>
                                                <div class="divider row"></div>
                                                <div class="form-row">
                                                    <div class="col-md-12">
                                                        <div class="position-relative form-group"><input name="Email" id="Email" placeholder="Email here..." type="email" class="form-control" required></div>
                                                    </div>
                                                    <div class="col-md-12">
                                                        <div class="position-relative form-group"><input name="Name" id="Name" placeholder="Name here..." type="text" class="form-control" required></div>
                                                    </div>
                                                    <div class="col-md-12">
                                                        <div class="position-relative form-group"><input name="UserName" id="UserName" placeholder="User Name here..." type="text" class="form-control" required></div>
                                                    </div>
                                                    <div class="col-md-12">
                                                        <div class="position-relative form-group"><input name="password" id="Password" placeholder="Password here..." type="password" class="form-control" required></div>
                                                    </div>
                                                    <div class="col-md-12">
                                                        <div class="position-relative form-group"><input name="password2" id="Password2" placeholder="Repeat Password here..." type="password" class="form-control" required></div>
                                                    </div>
                                                </div>
                                                <div class="mt-3 position-relative form-check"><input name="check" id="Check" type="checkbox" class="form-check-input" required><label for="Check" class="form-check-label">Accept our <a href="javascript:void(0);">Terms
                                                    and Conditions</a>.</label></div>
                                                <div class="divider row"></div>
                                                </div>
                                            <div class=" d-block text-center">
                                                <button class="btn-wide btn-pill btn-shadow btn-hover-shine btn btn-primary btn-lg">Create Account</button>
                                            </div>
                                            </br>
                                            <div>

                                            @if (isset($mesaj) && array_key_exists('NotOK', $mesaj))
                                                <div class="col-md-12">
                                                <h6><span class="text-danger">
                                                    {{ $mesaj['NotOK'] }} 
                                                    </span>
                                                </h6>
                                                </div>
                                            @endif
                                            @if (isset($mesaj) && array_key_exists('OK', $mesaj))
                                                <div class="col-md-12">
                                                <h6><span class="text-succcess">
                                                    {{ $mesaj['OK'] }} 
                                                    </span>
                                                </h6>
                                                </div>
                                            @endif

                                                        
                                            </div>
                                       
                                    </form>
                                    </br>
                                    <div class="form-row">    
                                            <div class="col-md-12">
                                                <div><a href="{{url('/login')}}">Sign In</a></div>
                                                
                                            </div>
                                    </div>
                                    
                            </div>

                                                    
                        </div>
                    </div>
                </div>
            </div>
    </div>

	@include('partials.admin.bodyfooter')   

</body>
</html>







