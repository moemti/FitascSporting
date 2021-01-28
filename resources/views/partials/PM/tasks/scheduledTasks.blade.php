
	<link rel="stylesheet" type="text/css" href={{asset("/assets/css/molgantt.css")}}>
	
    <div class="card-block ganttcontainer" ganttId="activetasks">
        
        <div class="card-block">
              <div title="Add new task" id="thaction" class="cross" onclick= "newtask(null)""></div>
              <div title="Add multiple tasks" id="addtasks_all" class="crossma" onclick= "newtasksmultiple(null, null) "></div>
              <div title="Delete selected tasks" id="deletetask_all" class="minus" onclick= "ondeleteTasks()"></div>
              <div title="Reschedule selected tasks" id="rescheduletask_all" class="reschedule" onclick= "onRescheduleTasks()"> 
                <img src={{asset("/assets/images/png/android-storage.png")}} >
              
            </div>

      
      
        </div>
        <div id="molgantt" class="molcontainer">
                @include('partials/PM/tasks.scheduledTasksGantt')
        </div>
    </div>
	
    
    <script src={{asset("/assets/scripts/modules/PM/task/tasks.blade.js")}}></script> 
    <script src={{asset("/assets/scripts/modules/PM/task/molgantt.js")}}></script>

  

