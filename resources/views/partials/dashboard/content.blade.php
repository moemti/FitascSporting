<div class="row">

    @if (session("PersonId") > 0) 
    <div class="col-md-12">
        <div class="main-card mb-12 card">
            <div class="card-body"><h5 class="pb-3 card-title">Training</h5>
                <div class="row">


               
                    <div class="col-md-4">
                        <div class="card mb-3 widget-chart widget-chart2 bg-tempting-azure text-left">
                            <div class="widget-chat-wrapper-outer">
                                <div class="widget-chart-content text-dark">
                                    <div class="widget-chart-flex">
                                        <div class="widget-title">Profiles</div>
                                        <div class="widget-subtitle text-dark">Active Users</div>
                                    </div>
                                    <div class="widget-chart-flex">
                                        <div class="widget-numbers">368</div>
                                        <div class="widget-description ml-auto text-dark"><span class="pr-1">66.5%</span>
                                            <i class="fa fa-arrow-left ">

                                            </i>
                                        </div>
                                    </div>
                                </div>
                                <div class="widget-progress-wrapper">
                                    <div class="progress-bar-xs progress-bar-animated-alt progress">
                                        <div class="progress-bar bg-danger" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style="width: 85%;"></div>
                                    </div>
                                    <div class="progress-sub-label">Monthly Subscribers</div>
                                </div>
                            </div>
                        </div>
                    </div>

                
                <div class="divider"></div>

            </div>
        </div>
    </div>

    @endif


</div>
