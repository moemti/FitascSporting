
@if(isset($attachments) && count($attachments) > 0)


    <br>
    <div class="row">

        <table id="attachmentstable" class="table deptable">
        <thead>
        <tr>
            <th>Description</th>
            <th>Name</th>
            <th></th>
        </tr>
        </thead>
        <tbody>

        @isset($attachments)
            @foreach($attachments as $u) 
                
        
            <tr id="{{$u->AttachmentId }}" Path="{{$u->Path}}">
            <td> {{ $u->Description  }}</td>
            <td><a target="_blank" href='/downloadattachment/{{$u->AttachmentId}}'> {{ $u->Name }} </a></td>
            
            <td><a href='#' onclick="deleteattachment({{$u->AttachmentId}}) ")>delete</a></td>
            </tr>
            @endforeach 
        @endisset
        </tbody>
        </table>
    
    </div>
@endif