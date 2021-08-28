<div class="h-100 d-flex bg-white justify-content-center align-items-center col-md-12 col-lg-12 bg-asteroid " style="color:silver;">
<div class="mx-auto app-login-box col-sm-12 col-md-10 col-lg-4">
        <div class="logo" style="    margin-bottom: 100px;
                            margin-left: 30px;
                            margin-right: 30px;">
            <a href="{{url('/')}}"> <img src="{{url('assets/images/logo_molland.svg')}}"  height="100%" width="100%" > </a>

        </div>
    <div class="app-logo"><span class="d-block h-100"><h3>Welcome</h3></span></div>
    <h4 class="mb-0">
        
        <span>Sign in</span></h4>
        <div class="divider row"></div>
    <div>
        <form class="" action="authenticate" method="POST">
            @csrf
            <div class="form-row">
                <div class="col-md-12">
                    <div class="position-relative form-group">
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
                    <div class="position-relative form-group">
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

            <div class=" d-block text-center">
                     <button class="btn-wide btn-pill btn-shadow btn-hover-shine btn btn-primary btn-lg">Login</button>
               
            </div>
        </form>
        </br>
        <div class="form-row">    
                <div class="col-md-12">
                    <div><a href="{{url('/resetform')}}">Forgot password</a></div>
                    </div>
                </div>
        </div>

        </br>
        <div class="form-row">    
                <div class="col-md-12">
                    <div><a href="{{url('/register')}}">Register</a></div>
                    </div>
                </div>
        </div>
</div>