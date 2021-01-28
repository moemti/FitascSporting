@foreach($related as $r)


<li class="list-group-item">
        <div class="widget-content p-0">
            <div class="widget-content-wrapper">
                <div class="widget-content-left mr-3">

                    <div class="badge badge-pill badge-info ">{{$r->TypeR}}</div>
                </div>
                <div class="widget-content-left">
                    <div class="widget-heading">{{$r->Type}} {{$r->Partner}} {{$r->DocumentNumber}} / {{$r->DocumentDate}}</div>
                    <div class="widget-subheading">{{$r->Description}}</div>
                </div>
                <div class="widget-content-right">
                    <div role="group" class="btn-group-sm btn-group">
                        <a type="button" class="btn-shadow btn btn-primary" target="blank" href="{{url('/').'/viewdocument/'.$r->DocumentId}}">View</a>
                    </div>
                </div>
            </div>
        </div>
    </li>


@endforeach

