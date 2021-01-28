 	@foreach($versions as $v) 
                                                    
    <div class="vertical-timeline-item vertical-timeline-element versions">
        <div><span class="vertical-timeline-element-icon bounce-in versions"><i class="badge badge-dot badge-dot-xl badge-success"> </i></span>
            <div class="vertical-timeline-element-content bounce-in"><div class="d-flex"><p>{{$v->Version}}.&nbsp </p><h3 class="timeline-title">{{$v->State}}</h3></div> 
                <p>{{$v->Comment}}</p>
               	<span class="vertical-timeline-element-date">{{substr($v->VersionDate, 0, 10)}}</span>
               	<span class="vertical-timeline-element-date p-3"><h6><small class="versions">{{substr($v->VersionDate, 10)}}</small></h6></span>
             </div>
        </div>
    </div>
    
    @endforeach