
<!doctype html>

<html lang="{{ app()->getLocale() }}">
	@include('partials.admin.head')
	<link href={{asset("assets/css/main.css")}} rel="stylesheet">
<body>
    <div class="app-container app-theme-white body-tabs-shadow">
            <div class="app-container">
                <div class="h-100">
                    <div class="h-100 no-gutters row">
                        
                                                
                        <div class="h-100 d-flex bg-white justify-content-center align-items-center col-md-12 col-lg-4 bg-asteroid" style="color:silver;">
                            <div class="mx-auto app-login-box col-sm-12 col-md-10 col-lg-4">
                                <div class="logo" style="    margin-bottom: 100px;
                                                    margin-left: 30px;
                                                    margin-right: 30px;">
                                    <a href="{{url('/')}}"> <img src="{{url('assets/images/logo_molland.svg')}}"  height="100%" width="100%" > </a>

                                </div>
                                <div class="app-logo"><span class="d-block h-100"><h3>Welcome</h3></span></div>
                                <h4 class="mb-0">
                                    
                                    <span>Change your password</span></h4>
                                    <br/>
                                    <form class="" action="changethepassword" method="POST">
                                        @csrf

                                        <input type="hidden" name = '_passtoken' value = "{{$_passtoken}}"> 
                                        <div class="form-row">
                                            
                                            <div class="col-md-12">
                                                <div class="position-relative form-group"><input name="password" id="password" placeholder="Password here..." type="password" class="form-control" required></div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="position-relative form-group"><input name="password2" id="password2" placeholder="Repeat Password here..." type="password" class="form-control" required></div>
                                            </div>
                                        </div>

                                        @if (isset($mesaj) && array_key_exists('mesaj',$mesaj))
                                        <div class="col-md-12">
                                            <span class="text-danger">
                                                <strong>{{ $mesaj['mesaj'] }}</strong>
                                            </span>
                                            </div>
                                        @endif



                                        <div class="divider row"></div>

                                        <div class="form-row">    
                                            <div class="col-md-12">
                                                <div><a href="{{url('/login')}}">Sign In</a></div>
                                                </div>
                                            </div>
                                        <div class="d-flex align-items-center">
                                            <div class="ml-auto"><!--a href="javascript:void(0);" class="btn-lg btn btn-link">Recover Password</a-->
                                                <button class="btn btn-primary btn-lg">Change the password</button>
                                            </div>
                                        </div>
                                    </form>
                            </div>

                                                    
                        </div>
                    </div>
                </div>
            </div>
    </div>

	@include('partials.admin.bodyfooter')   

</body>
</html>





