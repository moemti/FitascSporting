
<div id="lcont" >
	<div id="leftdiv" class="tabWrap">

	<table id="lefttable" class="gridtable">
    <thead>


      <tr>
         <th><div class = "dhead col_Id" >Id</div></th>
         <th><div class = "dhead col_Task" >Task</div></th>
         <th><div class = "dhead col_Project" >Project</div></th>
         <th><div class = "dhead col_Status" >Status</div></th>
         <th><div class = "dhead col_Priority" >Pr</div></th>
         <th><div class = "dhead col_Type" >Type</div></th>
         <th><div class = "dhead col_StartD" >Start date</div></th>
         <th><div class = "dhead col_EndD" >End date</div></th>
         
         <th><div class = "dhead col_Action" ></div></th>
      </tr>
    </thead>
    <tbody>

   @foreach($masterlist as $task) 
    <tr taskid="{{$task->TaskId}}" class="{{$task->TaskStatus}} {{$task->TaskType}} TaskTrList TaskTr TaskTR_{{$task->TaskId}} {{Session::has('LastTaskId')?(Session::get('LastTaskId') == $task->TaskId? 'SelectedTask':''):''}}" calendarid="{{$task->CalendarId}}" 
          onclick="TaskSelect(event, {{$task->TaskId}})"
          duration="{{$task->Duration}}""
    
    >
        <td class="td_id"><div class = "dtd col_Id" >{{$task->TaskId}}</div></td>
        <td title = "{{$task->Name}}"><div class = "dtd col_Task {{$task->HasChild > 0?'isparent':''}}" tasklevel="{{$task->Level}}" >
        
        			
        			<span class="childhide openchild {{$task->HasChild > 0?'isparent':''}}">-</span>
        			
        			
        			{{$task->Name}}</div></td>
        <td  title = "{{$task->Project}}"><div class = "dtd col_Project" >{{$task->Project}}</div></td>
        <td><div class = "dtd col_Status">{{$task->TaskStatus}}</div></td>
        <td><div class = "dtd col_Priority" >{{$task->Priority}}</div></td>
        <td><div class = "dtd col_Type" >{{$task->TaskType}}</div></td>
        <td><div class = "dtd col_StartD" >{{date('d-m-Y', strtotime($task->DateStart))}}</div></td>
        <td><div class = "dtd col_EndD" >{{date('d-m-Y', strtotime($task->DateEnd))}}</div></td>
        <td><div class = "dtd col_Action" >

              <div title="Add child task" id="addtask_{{$task->TaskId}}" class="cross" onclick= "newtask({{$task->TaskId}}, {{$task->ProjectId}}) "></div>
              <div title="Add multiple child tasks" id="addtasks_{{$task->TaskId}}" class="crossm" onclick= "newtasksmultiple({{$task->TaskId}}, {{$task->ProjectId}}) "></div>
              <div title="Delete task" id="deletetask_{{$task->TaskId}}" class="minus" onclick= "ondeleteTask({{$task->TaskId}})"></div>
      
      
            </div></td>
       
        </tr>
    @endforeach

    </tbody>
  </table>

</div>
</div>
  <div id="middlediv" class="moving">

  </div>

<div id="rcont" >
<div id="rightdiv" class="tabWrap">
 
  <table id="maintable" class="gridtable">
    <thead>
      <tr>
        @php


      date_default_timezone_set("Europe/Bucharest");


      for ($i = -60; $i < 60; $i++){
       
        echo '<th><div class = "dhead rightheaderdiv">';
          
            sscanf(date('m d Y'),'%d %d %d',$m,$d,$y);

            echo date("d ", mktime(0, 0, 0, $m, $d+$i, $y));            
            echo date("M", mktime(0, 0, 0, $m, $d+$i, $y));            
            
         echo '</div></th>';
        };

        $r=0;
      @endphp
  
      </tr>
    </thead>
    <tbody>
    @foreach($masterlist as $task) 
    <tr taskid="{{$task->TaskId}}" class="TaskTr TaskTR_{{$task->TaskId}} {{Session::has('LastTaskId')?(Session::get('LastTaskId') == $task->TaskId? 'SelectedTask':''):''}}" onclick="TaskSelect(event,  {{$task->TaskId}})">

      @php
        $r = $r + 1;
       for ($i = -60; $i < 60; $i++){

          $day = date("D", mktime(0, 0, 0, $m, $d+$i, $y));
          
          if ($i==0)
            $Today = 'today';
          else
            $Today = '';

          if ($task->DataStartC == date("Y-m-d", mktime(0, 0, 0, $m, $d+$i, $y))
              || (($i == -60) && ($task->DataStartC < date("Y-m-d", mktime(0, 0, 0, $m, $d+$i, $y))) && ($task->HasChild > 0))
          
          ){

            $IsParent = $task->HasChild > 0?"isparent":"";

            if ( (($i == -60) && ($task->DataStartC < date("Y-m-d", mktime(0, 0, 0, $m, $d+$i, $y))) && ($task->HasChild > 0)))
                $duration = $task->RealDuration - ((strtotime(date("Y-m-d", mktime(0, 0, 0, $m, $d+$i, $y))) - strtotime($task->DataStartC)  ))/  (60*60*24);
            else

              $duration = $task->RealDuration;


            if ($task->HasChild > 0)  
              $moving = '';
            else 
              $moving = ' moving ';
            
         

            if (Trim($task->TaskType) !== 'Milestone'){
              echo '<td class= "cl'.$day.' '.$Today.'"><div class = "dtdo">
                    <div title = "'.$task->Name.'" TaskId="'.$task->TaskId.'" id="test_'.$task->TaskId.'" 
                    CalendarId="'.$task->CalendarId.'"    
                    class="task '.$moving.' noselect '.$IsParent.'" tdX ="'.$i.'" tdY="'.$r.'" duration="'.$duration.'"  DataStart="'.$task->DataStartC.'">
                            '.(string)($task->Progress * 100).'% <span class="taskspan">'.$task->Name.'</span>
                    <div id="leftlink_'.$task->TaskId.'" class = "leftlink link linkhidden"></div>  
                    <div id="test_'.$task->TaskId.'left" class = "leftdiv '.$moving.'"></div>
                    <div id="test_'.$task->TaskId.'right" class = "rightdiv '.$moving.'"></div>
                    <div id="rightlink_'.$task->TaskId.'" class = "rightlink link linkhidden"></div>  
                    <div id="progress_'.$task->TaskId.'" class = "progressbar" style="width:'.(string)($task->Progress * 100).'%;"></div>  
                   
                    <div  id="taskpanel_'.$task->TaskId.'" class= "taskpanelcanvas" height= "20px"  width= "1000"></div>   
                 ';
                  
            }else{
              echo '<td class= "cl'.$day.' '.$Today.'"><div class = "dtdo  ">
                    <div title = "'.$task->Name.'" TaskId="'.$task->TaskId.'" id="test_'.$task->TaskId.'" 
                    CalendarId="'.$task->CalendarId.'"  
                    class="noselect moving milestone" duration="1"><span class="milestonespan">'.$task->Name.'</span>
                    <div id="test_'.$task->TaskId.'_romb" class="noselect milestoneromb"></div>
                    <div id="leftlink_'.$task->TaskId.'" class = "leftlink link milestonelink linkhidden"></div>
                    <div id="rightlink_'.$task->TaskId.'" class = "rightlink link milestonelink linkhidden"></div>  
                    
                  </div> ';
            }
        }
        else{
          echo '<td class= "cl'.$day.' '.$Today.'"><div class = "dtd">';
        }
        echo '</div></td>';
      };

        Session()->forget("LastTaskId");

      @endphp

    @endforeach 
       
    </tbody>
  </table>
 
</div>
</div>
</div>
