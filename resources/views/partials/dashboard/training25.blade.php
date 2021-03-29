<div class="col-md-4">
    <div class="card mb-3 widget-chart widget-chart2 bg-tempting-azure text-left">
        <div class="widget-chat-wrapper-outer">
            <div class="widget-chart-content text-dark">
                <div class="widget-chart-flex">
                    <div class="widget-title">Club 25 Trainings</div>
                    <div class="widget-subtitle text-dark">Total trainings 25</div>
                </div>
                <div class="widget-chart-flex">
                    <div class="widget-numbers">{{$competition['personparam']->Cant_Y.'  '}}</div>
                        <i class="fa fa-arrow-right "></i> 
                        {{$competition['personparam']->Value_Y.' Lei'}}
                    
                    <div class="widget-description ml-auto text-dark"><span class="pr-1">{{$competition['personparam']->Cant.'  '}}
                       </span>
                        <i class="fa fa-arrow-right ">

                        </i> {{$competition['personparam']->Value.' Lei'}}
                    </div>
                </div>
            </div>
            <div class="widget-progress-wrapper">
                <div class="progress-bar-xs progress-bar-animated-alt progress">
                    <div class="progress-bar bg-danger" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%;"></div>
                </div>
                <div class="progress-sub-label">This year trainings</div>
            </div>
        </div>
    </div>
</div>