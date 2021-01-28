<ul class="todo-list-wrapper list-group list-group-flush">
 	@foreach($attachments as $a) 

    <li class="list-group-item">
       
        <div class="widget-content p-0">
            <div class="widget-content-wrapper">
                <div class="widget-content-left">
                    <div class="widget-heading">{{$a->Name}}&nbsp <span class="badge badge-pill badge-success">{{$a->Version}}</span><small class="p-3 widget-subheading"><i>{{$a->Description}}</i></small>
                        
                    </div>
                    
                </div>
                <div class="widget-content-right ">
                	<input hidden value = "{{$a->DocumentAttachmentId}}">
                    <a class="border-0 btn-transition btn btn-outline-success"  href = "{{url('/downloaddocumentfile').'/'.$a->DocumentAttachmentId}}">
                        <i class="fa fa-download"></i>
                    </a>
                    <button class="border-0 btn-transition btn btn-outline-danger"  onclick= "deleteattachment({{$a->DocumentAttachmentId}})">
                        <i class="fa fa-trash-alt"></i>
                    </button>
                </div>
            </div>
        </div>
    </li>
    
    @endforeach
</ul>