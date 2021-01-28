

<script>
        function taksubmit(){

            $("#theform").data("changed", false);
            $("#theform").submit();

        };


</script>

<form action= {{isset($task)?url("/savetask"):url("/savenewtask")}} method="POST" id="theform">
    {{ csrf_field() }}
    <div class="row">
        <div class="col-lg-12">
            <div class="card m-b-20">
                <div class="card-block">

                    <input hidden name='taskid' id="taskid" value="{{isset($task)?$task->TaskId:''}}">

                        <div class="form-group">
                            <label>Task name</label>
                            <div>
                                <input type="text" class="form-control form-control-sm" required id="name" name= "name" value="{{isset($task)?$task->Name:''}}"/>
                            </div>
                        </div>

                        <div class="form-group card-block m-b-0">
                            <div class= "right_align">
                                <button onclick="myreset()" type="button" class="btn btn-secondary waves-effect m-l-5">
                                    Reset task
                                </button>
                                <button onclick="mymodalclose();" type="button" class="btn btn-secondary waves-effect m-l-5">
                                    Close
                                </button>
                                <button onclick="taksubmit()" type="button" class="btn btn-primary waves-effect waves-light">
                                    Save
                                </button>
                            </div>
                        </div>

                        <div class="form-group">
                            <label>Description</label>
                            <div>
                                <textarea class="form-control  form-control-sm" rows='{{isset($task)?max(min(substr_count($task->Description, "\n" ) + 1, 10), 4):'4'}}' id="description" name="description" >{{isset($task)?$task->Description:''}}</textarea>
                            </div>
                        </div>


                        <div class="form-group ttWork ttMilestone ttMaterial ttToDo requirable">
                        <label>Project</label>

                        @if  ((isset($task) && ($task->ProjectId != null)) || ($projectid != null))
                            <input id="projectid" name="projectid" hidden value = @foreach($projects as $p)
                                   {{(isset($task) && ($task->ProjectId == $p->ProjectId))||($projectid ==$p->ProjectId)? $p->ProjectId:''}}
                             @endforeach
                            ></input>

                            @foreach($projects as $p)
                                   {{(isset($task) && ($task->ProjectId == $p->ProjectId))||($projectid ==$p->ProjectId)? $p->Name:''}}
                             @endforeach

                        @else



                            <select class="form-control  form-control-sm" id="projectid" name="projectid" required>
                                <option value=""></option>
                             @foreach($projects as $p)
                                    <option value="{{$p->ProjectId}}"  {{(isset($task) && ($task->ProjectId == $p->ProjectId))||($projectid ==$p->ProjectId)? 'selected':''}} >{{$p->Name}}</option>
                             @endforeach
                            </select>



                        @endif
                        </div>

                         <div class="form-group ttWork ttMilestone ttMaterial">
                            <label>Parent task</label>

                            <select class="form-control  form-control-sm" id="parentid" name="parentid">
                                <option value=""></option>
                             @foreach($tasks as $p)

                                <option value="{{$p->TaskId}}"  {{(isset($task) && ($task->ParentId == $p->TaskId))||($parentid == $p->TaskId)? 'selected':''}} >{{$p->Name}}</option>
                             @endforeach
                            </select>

                        </div>

                        <div class="row">
                            <div class="col-sm-3">
                                <div class="form-group">
                                    <label>Task type</label>
                                    <select class="form-control  form-control-sm" id="tasktypeid" name="tasktypeid" required onChange="OnTaskTypeChanged()">
                                        <option value=""></option>
                                    @foreach($tasktype as $u)
                                        <option value="{{$u->TaskTypeId}}"  {{isset($task)?(($task->TaskTypeId == $u->TaskTypeId)? 'selected':''):(3 == $u->TaskTypeId)? 'selected':''}} >{{$u->Name}}</option>
                                    @endforeach
                                    </select>
                                </div>
                            </div>
                            <div class="col-sm-1 ttWork ttToDo">
                                <div class="form-group">
                                    <label>Priority</label>
                                    <div>
                                        <input type="Number" class="form-control form-control-sm"  name= "priority" id= "priority"

                                                value="{{isset($task)?$task->Priority:'10'}}"/>
                                    </div>
                                </div>
                            </div>

                            <div class="col-sm-2" hidden>
                                <div class="form-group">
                                    <label>Creation date</label>
                                    <div>
                                        <input  class="form-control form-control-sm" hidden
                                            type="text" id="date" name= "date" value="{{isset($task)?$task->Date:date('Y-m-d H:i:s')}}"/>

                                        <input  class="form-control form-control-sm" required disabled
                                        type="text" id="date" name= "date" value="{{isset($task)?$task->Date:date('Y-m-d H:i:s')}}"/>
                                    </div>
                                </div>

                            </div>
                        </div>
                </div>
            </div>
        </div> <!-- end col -->

    </div> <!-- end row-->
    <div class="row">



    <div class="col-lg-6">
            <div class="card m-b-20 ">
                <div class="card-block">
                    <div class="row">

                            <div class="col-lg-3 ttWork requirable">
                                    <div class="form-group">
                                        <label>Duration Type</label>
                                        <div>
                                        <select class="form-control  form-control-sm calcshedule" id="durationtypeId" name="durationtypeid" required>
                                            @foreach($durationtype as $u)
                                            <option value="{{$u->DurationTypeId}}" code="{{$u->Code}}"  {{isset($task)?(($task->DurationTypeId == $u->DurationTypeId)? 'selected':''):((3 == $u->DurationTypeId)? 'selected':'')  }} >{{$u->Name}}</option>
                                             @endforeach
                                        </select>
                                        </div>
                                    </div>
                            </div>



                            <div class="col-lg-1 ttWork requirable">
                                <div class="form-group">
                                    <label>Duration</label>
                                    <div>
                                        <input class="form-control form-control-sm calcshedule" required
                                            type="text" id=duration name= "duration" value="{{isset($task)?$task->Duration:''}}"/>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-1 ttWork requirable">
                            <div class="form-group">
                                <label>Units</label>
                                <div>
                                    <input  class="form-control form-control-sm calcshedule" required
                                    type="number" id="units" step="0.01" name= "units"value="{{isset($task)?$task->Units:'1'}}"/>
                                </div>
                            </div>
                            </div>

                            <div class="col-lg-1 ttWork requirable">
                            <div class="form-group">
                                <label>Work</label>
                                <div>
                                    <input  class="form-control form-control-sm calcshedule" required
                                    type="number" id="work" step="0.01" name= "work"value="{{isset($task)?$task->Work:''}}"/>
                                </div>
                            </div>
                            </div>

                             <div class="col-lg-3 ttWork">
                                        <div class="form-group">
                                            <label>Calendar</label>

                                            <select class="form-control  form-control-sm" id="calendarid" name="calendarid">
                                                @foreach($calendar as $u)
                                                <option value="{{$u->CalendarId}}"  {{isset($task)?(($task->CalendarId == $u->CalendarId)? 'selected':''):((1 == $u->CalendarId)? 'selected':'')  }} >{{$u->Name}}</option>
                                                @endforeach
                                            </select>

                                    </div>
                            </div>




                    </div>

                    <div class="row">



                        <div class="col-lg-3 ttWork ttMilestone ttMaterial">
                                <div class="form-group">
                                    <label>Start date</label>
                                    <div>
                                        <input  class="form-control form-control-sm calcshedule"
                                        type="date" id="startdate" name= "startdate"value="{{isset($task)?$task->DateStart:''}}"/>
                                    </div>
                                </div>
                        </div>

                        <div class="col-lg-3 ttWork">
                                <div class="form-group">
                                    <label>End date</label>
                                    <div>
                                        <input class="form-control form-control-sm calcshedule"
                                            type="date" id=enddate name= "enddate" value="{{isset($task)?$task->DateEnd:''}}"/>
                                    </div>
                                </div>
                        </div>
                    </div>

                     <div class="row">
                       <div class="col-lg-2 ttWork ttMilestone ttMaterial">
                                <div class="form-group">
                                    <label>Auto schedule</label>
                                    <div style="padding-right:80%; padding-top:3px">
                                        <input class="form-control form-control-sm" onChange="scheduleCheck()"
                                            type="checkbox" id="autoschedule" name= "autoschedule" {{isset($task)?($task->AutoSchedule == 1?'Checked':''):''}}/>
                                    </div>
                                </div>
                        </div>

                        <div id="schedulediv" class="row" >
                            <div class="col-lg-9 ttWork ttMilestone ttMaterial">
                                    <div class="form-group">
                                        <label>Schedule constraint type</label>
                                        <div>
                                        <select class="form-control  form-control-sm" id="constraintid" name="constraintid">
                                            @foreach($constraint as $u)
                                            <option value="{{$u->ConstraintId}}"  {{isset($task)?(($task->ConstraintId == $u->ConstraintId)? 'selected':''):((2 == $u->ConstraintId)? 'selected':'')  }} >{{$u->Name}}</option>
                                            @endforeach
                                        </select>
                                        </div>
                                    </div>
                            </div>

                            <div class="form-group ttWork">
                                <label>Effort driven</label>
                                <div style="padding-right:80%; padding-top:3px">
                                            <input class="form-control form-control-sm"
                                                type="checkbox" id=iseffortdriven name= "iseffortdriven" {{isset($task)?($task->IsEffortDriven == 1?'Checked':''):''}}/>
                                </div>
                            </div>



                        </div>
                    </div>

                    <div class="row">
                        <div class="col-lg-3 ttWork ttMilestone ttMaterial ttToDo">
                            <div class="form-group">
                                <label>Task status</label>
                                <select class="form-control  form-control-sm" id="taskstatusid" name="taskstatusid" >
                                    <option value=""></option>
                                @foreach($taskstatus as $u)
                                    <option value="{{$u->TaskStatusId}}"  {{isset($task)?(($task->TaskStatusId == $u->TaskStatusId)? 'selected':''):((1 == $u->TaskStatusId)? 'selected':'')  }} >{{$u->Name}}</option>
                                @endforeach
                                </select>
                            </div>
                        </div>

                        <div class="col-lg-1 ttWork requirable">
                            <div class="form-group">
                                <label>Progress</label>

                                <input type="number" class="form-control form-control-sm" required  min="0" max="100"  name= "progress" id= "progress"
                                    max="100"  placeholder="Min 0, Max 100" value="{{isset($task)?$task->Progress*100.0:0}}"/>
                            </div>
                        </div>



                    </div>



                        <div class="row">
                            <div class="col-lg-6 ttWork">
                                <div class="form-group">
                                    <label>Responsable</label>

                                    <select class="form-control  form-control-sm" id="responsableId" name="responsableId">
                                        <option value=""></option>
                                    @foreach($users as $u)
                                        <option value="{{$u->UserId}}"  {{isset($task) && ($task->ResponsableId == $u->UserId)? 'selected':''}} >{{$u->Name}}</option>
                                    @endforeach
                                    </select>
                               </div>
                            </div>


                        </div>



                    </div>


                <!-- Notes  -->
                <br>

                    <div class="card m-b-20">
                        <div class="card-block">
                            <label>Notes</label><sup ><a href="#" onclick = "addNote()"> &nbsp Add</a></sup>
                            <div id="divnotestable">

                            </div>
                        </div>
                    </div>



                <!-- End Notes -->

                <br>
                <div class="card-block">


                    <label>Dependencies </label><sup ><a href="#" onclick = "ShowAddDependency()"> &nbsp Add</a></sup>

                    <div id="divdependencies">

                    <br>

                        <div id="deprow" class="row"
                        @if(!(isset($taskdependencies) && count($taskdependencies) > 0))
                        style= "display:none;"
                        @endif
                        >

                            <table id="deptable" class="table deptable">
                                <thead>
                                <tr>
                                    <th>Task Name</th>
                                    <th>Dependecy Type</th>
                                    <th>Lag</th>
                                    <th></th>
                                </tr>
                                </thead>
                                <tbody>

                                @isset($taskdependencies)
                                    @foreach($taskdependencies as $u)


                                    <tr id="{{'tr'. $u->ParentTaskId }}">
                                    <td><input hidden id='parenttask' name='parenttask[]' value= "{{ $u->ParentTaskId }} "/> {{ $u->ParentTask  }}</td>
                                    <td><input hidden id='dependencytype' name='dependencytype[]' value= " {{ $u->TaskRelationTypeId }} "/> {{ $u->Name }}</td>
                                    <td><input hidden id='lag' name='lag[]' value= " {{$u->Lag }} "/> {{ $u->Lag  }}</td>
                                    <td><a href='#' onclick="deletedependency({{$u->ParentTaskId}}) ")>delete</a></td>
                                    </tr>
                                    @endforeach
                                @endisset
                                </tbody>
                            </table>

                            <br>





                        </div>

                    </div>
                    <div class="row" id="divadddep" style="display: none;">
                                <div class="col-sm-12">
                                        <div class="form-group">
                                            <label>Task</label>
                                            <div>
                                            <select class="form-control  form-control-sm nosave" id="lktask" name="lktask">
                                                <option value=""></option>
                                            @foreach($tasks as $u)
                                                <option value="{{$u->TaskId}}">{{$u->Name}}</option>
                                            @endforeach
                                            </select>
                                            </div>
                                        </div>
                                </div>

                                <div class="col-sm-6">
                                        <div class="form-group">
                                            <label>Dependency type </label>
                                            <div>
                                            <select class="form-control  form-control-sm nosave" id="lktaskdeptype" name="lktaskdeptype">
                                                <option value=""></option>
                                            @foreach($taskdependencytype as $u)
                                                <option value="{{$u->TaskRelationTypeId}}" {{$u->TaskRelationTypeId == 1?"selected ":""}}>{{$u->Name}}</option>
                                            @endforeach
                                            </select>
                                            </div>
                                        </div>
                                </div>

                                <div class="col-sm-2">
                                        <div class="form-group">
                                            <label>Lag </label>
                                            <div>
                                                <input class="form-control form-control-sm nosave"
                                                    type="number" id="lkLag" name= "lkLag" value="0"/>
                                            </div>
                                        </div>
                                </div>

                                <div class="col-sm-2">
                                    <div id="adddepdiv" class="form-group">

                                        <button type="button" onclick="AddDependency();" id="adddep" class="btn btn-secondary waves-effect m-l-5">Add dependecy</button>

                                    </div>
                                </div>

                            </div>


                </div>


                <br>
                <!-- Atasamente  -->

                    <div class="card m-b-20">
                       <div class="card-block">
                            <label>Attachements</label><sup ><a href="#" onclick = "AddAttacment()"> &nbsp Add</a></sup>
                            <div id="divattachmentstable">
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
                                    <td><a target="_blank" href={{url('/downloadattachment')}}/{{$u->AttachmentId}}'> {{ $u->Name }} </a></td>

                                    <td><a href='#' onclick="deleteattachment({{$u->AttachmentId}}) ")>delete</a></td>
                                    </tr>
                                    @endforeach
                                @endisset
                                </tbody>
                                </table>

                            </div>
                            @endif
                            </div>
                        </div>
                    </div>


                <!-- End Atasamente -->






            </div> <!-- end col  -->




</div>




            <div class="col-lg-6">
                    <div class="card m-b-20">
                        <div class="card-block">
                            <label>Comments</label><sup ><a href="#" onclick = "addComment()"> &nbsp Add</a></sup>
                            <div class="card-block">
                                <div id="divcommentstable">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>






    </div> <!-- end row -->


</form>
<br>

    <div id="upload" class="col-lg-12" style="display: none">
    <br>
        <div class="card m-b-20">
            <div class="card-block">

                <form id="example-form" method="post" enctype="multipart/form-data">
                        {!! csrf_field() !!}

                    <input hidden name='taskid' id="taskid" value="{{isset($task)?$task->TaskId:''}}">

                    <div class="file-field input-field col s12">


                        <input type="file" name="thefile" id="thefile" class="btn btn-primary waves-effect waves-light">
                        <br>
                        <div class="file-path-wrapper form-group">
                            <label>Descriere </label>
                            <input Name = 'Descriere' id="Descriere" type="text" >

                        </div>
                        <button type="button" onclick="UploadFile()" class="waves-effect waves-green btn blue">Upload</button>
                        <button type="button" onclick="AddAttacment()" class="waves-effect waves-green btn blue">Close</button>
                    </div>

                </form>
            </div>

        </div>
    </div>



    <div class="modal-footer">

    </div>
