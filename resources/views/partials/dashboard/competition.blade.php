<div class="col-md-4">
        <div class="card mb-3 widget-chart widget-chart2 bg-tempting-azure text-left">
            <div class="widget-chat-wrapper-outer">
                <div class="widget-chart-content text-dark">
                    <div class="widget-chart-flex">
                        <div class="widget-title">My results</div>
                        <div class="widget-subtitle text-dark">Last year average</div>
                    </div>
                    <div class="widget-chart-flex">
                        <div class="widget-numbers">{{$competition['personparam']->Percent.'%'}}</div>
                        <div class="widget-numbers">{{$competition['personparam']->Category}}</div>
                        <div class="widget-description ml-auto text-dark"><span class="pr-1">{{$competition['personparam']->PercentLast.'%'}}</span>
                            <span >{{$competition['personparam']->CategoryLast}}</span>
                        </div>
                        
                    </div>
                </div>
                <div class="widget-progress-wrapper">
                    <div class="progress-bar-xs progress-bar-animated-alt progress">
                        <div class="progress-bar bg-danger" role="progressbar" aria-valuenow="{{$competition['personparam']->Percent}}" aria-valuemin="0" aria-valuemax="100" style="width: $competition['personparam']->Percent.%;"></div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>