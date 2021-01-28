@foreach($tasks as $task) 
    <tr taskid="{{$task->TaskId}}" class="activerow">
        <td>{{$task->TaskId}}</td>
        <td>{{$task->Name}}</td>
        <!-- <td>{{$task->Date}}</td> -->
        <td>{{$task->DateStart}}</td>
        <td>{{$task->DateEnd}}</td>
        <td>{{$task->Duration}}</td>
        <td>{{$task->Project}}</td>
        <td>{{$task->Priority}}</td>
        <td>{{$task->TaskType}}</td>
        <td>{{$task->TaskStatus}}</td>
        <td><a class="typcn typcn-delete" href = '#' onclick='ondeleteTask({{$task->TaskId}})'>delete</a></td>
    </tr>
@endforeach