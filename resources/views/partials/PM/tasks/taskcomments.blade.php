
 @if(isset($comments) && count($comments) > 0)
            <br>


    

            <table id="commentstable" class="table deptable">
            <thead>
            <tr>
                <th>Data</th>
                <th>User</th>
                <th>Comment</th>
                
                <th></th>
            </tr>

            </thead>
            <tbody>
            @foreach($comments as $u) 
                <tr id="comment_{{$u->TaskCommentId }}" commentid="{{$u->TaskCommentId }}" ondblclick="viewComment({{$u->TaskCommentId}})">
                <td>{{ $u->Data}}</td>
                <td>{{ $u->User}}</td>
                <td id="commenttext_{{$u->TaskCommentId }}">{{ $u->Comment}}</td>
                
                <td><a href='#' onclick='ondeleteComment({{$u->TaskCommentId}})')>del</a></td>
                </tr>
            @endforeach 
        
            </tbody>
        </table>
    

@endif