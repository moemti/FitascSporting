<!doctype html>

<html lang="{{ app()->getLocale() }}">
	@include('partials.admin.head')
	<link href={{asset("assets/css/main.css")}} rel="stylesheet">
<body>
    <div class="app-container app-theme-white body-tabs-shadow">
            <div class="app-container">
                <div class="h-100">
                    <div class="h-100 no-gutters row">
                       
                                                
                    <div class="h-100 d-flex bg-white justify-content-center align-items-center col-md-12 col-lg-12 bg-asteroid" style="color:silver;">
                            <div class="mx-auto app-login-box col-sm-12 col-md-4 col-lg-4">
                                    <div class="logo" style="    margin-bottom: 100px;
                                                        margin-left: 30px;
                                                        margin-right: 30px;">
                                        <a href="{{url('/')}}"> <img src="{{url('assets/images/logo_molland.svg')}}"  height="100%" width="100%" > </a>

                                    </div>
                                <div class="app-logo"><span class="d-block text-nowrap"><h4>Reset password</h4></span></div>
                                
                                    <div class="divider row"></div>
                                <div>
                                <form class="" action="resetpassword" method="POST">
                                        @csrf
                                        <div class="form-row">
                                            <div class="col-md-12">
                                                <div class="position-relative form-group">
                                                    <input name="email" id="email" placeholder="Email here..." type="email" required class="form-control" >
                                                </div>
                                            </div>
                                            @if (isset($mesaj) && array_key_exists('email',$mesaj))
                                            <div class="col-md-12">
                                                <span class="text-danger">
                                                    <strong>{{ $mesaj['email'] }}</strong>
                                                </span>
                                                </div>
                                            @endif
                                            
                                        </div>


                                                <div class="divider row"></div>
                                                </div>
                                            <div class=" d-block text-center">
                                                <button class="btn-wide btn-pill btn-shadow btn-hover-shine btn btn-primary btn-lg">Reset password</button>
                                            </div>
                                            </br>
                                            <div>
                                                <h6 class="small"><span>You will receive a reset email!</span></h6>
                                                        
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








