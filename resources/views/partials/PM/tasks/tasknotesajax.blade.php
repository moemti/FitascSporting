


 @if(isset($notes) && count($notes) > 0)
            <br>

            <div class="row">
    

            <table id="notestable" class="table deptable">
            <thead>
            <tr>
                <th>Note</th>
                
                <th></th>
            </tr>
            </thead>
            <tbody>

        
            @foreach($notes as $u) 
                
        
            <tr id="{{$u->NoteId }}" ondblclick="viewNote({{$u->NoteId}}, '{{ $u->Text}}', '{{ $u->Tags }}', '{{ $u->title }}', {{ $u->IsLink }} ) ")>
            <td>
            @if ($u->IsLink==1)

            <a  target="_blank" href="{{$u->Text}}">{{$u->title}}</a>

            @else
                {{ $u->title}}
            @endif
            
            
            
        
            </td>
            
            <td><a href='#' onclick='ondeleteNote({{$u->NoteId}})')>delete</a></td>
            </tr>
            @endforeach 
        
    </tbody>
    </table>
    

</div>
@endif

