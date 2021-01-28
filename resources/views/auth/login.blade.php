<!doctype html>

<html lang="{{ app()->getLocale() }}">
	@include('partials.admin.head')
	<link href={{asset("assets/css/main.css")}} rel="stylesheet">
<body>
    <div class="app-container app-theme-white body-tabs-shadow">
            <div class="app-container">
                <div class="h-100">
                    <div class="h-100 no-gutters row">
                        <div class="d-none d-lg-block col-lg-8">
                            <div id="carouselExampleControls1" class="carousel slide show h-100" data-ride="carousel" style="color:silver;">
                                <div class="carousel-inner h-100 ">
                                    <div class="carousel-item active">
                                        <div class="position-relative h-100 d-flex justify-content-center align-items-center bg-premium-dark-left" >
                                            <div class="slide-img-bg" ></div>
                                            <img src="{{asset("assets/images/sporting/1.jpg")}}" >
                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                        
                                        <div class="position-relative h-100 d-flex justify-content-center align-items-center bg-premium-dark-left" >
                                            <div class="slide-img-bg" ></div>
                                            <img src="{{asset("assets/images/sporting/2.jpg")}}">
                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                        <div class="position-relative h-100 d-flex justify-content-center align-items-center bg-premium-dark-left" >
                                            <div class="slide-img-bg" ></div>
                                            <img src="{{asset("assets/images/sporting/3.jpg")}}">
                                        </div>
                                        

                                    </div>
                                </div>
                                <!-- <a class="carousel-control-prev" href="#carouselExampleControls1" role="button" data-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Previous</span>
                                </a>
                                <a class="carousel-control-next" href="#carouselExampleControls1" role="button" data-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Next</span>
                                </a> -->
                            </div>
                        </div>
                        <div class="h-100 d-flex bg-white justify-content-center align-items-center col-md-12 col-lg-4 bg-premium-dark " style="color:silver;">
                            <div class="mx-auto app-login-box col-sm-12 col-md-10 col-lg-4">
                                    <div class="logo" style="margin-bottom:100px;">
                                        <a href="{{url('/')}}"> <img src="{{url('assets/images/logo_molland.svg')}}"  height="100%" width="100%" > </a>

                                </div>
                                <div class="app-logo"><span class="d-block h-100"><h3>Welcome</h3></span></div>
                                <h4 class="mb-0">
                                    
                                    <span>Sign in</span></h4>
    <!--                             <h6 class="mt-3">No account? <a href="javascript:void(0);" class="text-primary">Sign up now</a></h6> -->
                                <div class="divider row"></div>
                                <div>
                                    <form class="" action="authenticate" method="POST">
                                        @csrf
                                        <div class="form-row">
                                            <div class="col-md-12">
                                                <div class="position-relative form-group"><label for="username" class="">User name</label>
                                                	<input name="username" id="username" placeholder="User name here..." type="edit" class="form-control" >
                                               	</div>
                                            </div>
                                            @if (isset($mesaj) && array_key_exists('NumeUtilizator',$mesaj))
                                            <div class="col-md-12">
                                                <span class="text-danger">
                                                    <strong>{{ $mesaj['NumeUtilizator'] }}</strong>
                                                </span>
                                             </div>
                                            @endif
                                            
                                        </div>
                                        <div class="form-row">    
                                            <div class="col-md-12">
                                                <div class="position-relative form-group"><label for="examplePassword" class="">Password</label>
                                                	<input name="password" id="password" placeholder="Password here..." type="password" class="form-control" >
                                                </div>
                                            </div>
                                            
                                          
                                            
                                             @if (isset($mesaj) && array_key_exists('password', $mesaj))
                                             <div class="col-md-12">
                                                <span class="text-danger">
                                                    <strong>{{ $mesaj['password'] }}</strong>
                                                </span>
                                             </div>
                                            @endif
                                            
                                        </div>
<!--                                         <div class="position-relative form-check"><input name="check" id="exampleCheck" type="checkbox" class="form-check-input"> 
                                        	<label for="exampleCheck" class="form-check-label">Keep me logged in</label>
                                        </div>-->
                                        
                                        <div class="divider row"></div>
                                        <div class="d-flex align-items-center">
                                            <div class="ml-auto"><!--a href="javascript:void(0);" class="btn-lg btn btn-link">Recover Password</a-->
                                                <button class="btn btn-primary btn-lg">Login</button>
                                            </div>
                                        </div>
                                    </form>
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
