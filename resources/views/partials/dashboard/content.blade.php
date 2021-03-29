<div class="row">

    @if (session("PersonId") > 0) 
    <div class="col-md-12">
        <div class="main-card mb-12 card">

            <div class="card-body"><h5 class="pb-3 card-title">Competitions</h5>
                <div class="row">


               
                   @include('partials.dashboard.competition')

                
                <div class="divider"></div>

            </div>
        </div>
        <div class="main-card mb-12 card">
            <div class="card-body"><h5 class="pb-3 card-title">Training</h5>
                <div class="row">


               
                    


                @include('partials.dashboard.training25')
 


                </div>
                
                <div class="divider"></div>

            </div>
        </div>

        <div class="main-card mb-12 card">

        @if (session("IsSuperUser") > 0)   
        <div class="card-body"><h5 class="pb-3 card-title">Administrator</h5>
            <div class="row">


        
                <div class="col-md-4">
                    <div class="card mb-3 widget-chart widget-chart2 bg-tempting-azure text-left">
                        <div class="widget-chat-wrapper-outer">
                            <div class="widget-chart-content text-dark">
                                <div class="widget-chart-flex">
                                    <div class="widget-title">My results</div>
                                    <div class="widget-subtitle text-dark">Last year average</div>
                                </div>
                                <div class="widget-chart-flex">
                                    <div class="widget-numbers">68%</div>
                                    <div class="widget-description ml-auto text-dark"><span class="pr-1">66.5%</span>
                                        <span >B</span>
                                    </div>
                                
                                </div>
                            </div>
                            <div class="widget-progress-wrapper">
                                <div class="progress-bar-xs progress-bar-animated-alt progress">
                                    <div class="progress-bar bg-danger" role="progressbar" aria-valuenow="68" aria-valuemin="0" aria-valuemax="100" style="width: 68%;"></div>
                                </div>
                                <div class="progress-sub-label">B</div>
                            </div>
                        </div>
                    </div>
                </div>

            
                <div class="divider"></div>

            </div>
        </div>
        @endif


    </div>

    @else

        @include('auth.loginbox')

    @endif


</div>
