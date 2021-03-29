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
                                @include('auth.loginbox')

                                
                        </div>
                    </div>
                </div>
            </div>
    </div>

	@include('partials.admin.bodyfooter')   

</body>
</html>
