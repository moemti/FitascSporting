@extends('partials.admin.masterdetail')


    @push('css')

        <link rel="stylesheet" href="{{asset("/assets/css/quill/quill.snow.css" )}}"/>

        <link rel="stylesheet" href="{{asset("/assets/css/quill/quill.core.css" )}}"/>

        <link rel="stylesheet" href="{{asset("/assets/css/quill/quill.bubble.css" )}}"/>

        <link rel="stylesheet" href="{{asset("/assets/css/quill/katex.min.css" )}}"/>

        <link rel="stylesheet" href="{{asset("/assets/css/quill/monokai-sublime.min.css" )}}"/>
 
    @endpush
    
    @section('masterdetail')
        <script src={{asset("/assets/scripts/modules/PM/task.js")}}></script>
        <script src={{asset("/assets/scripts/vendors/quill/katex.min.js")}}></script>
        <script src={{asset("/assets/scripts/vendors/quill/highlight.min.js")}}></script>
        <script src={{asset("/assets/scripts/vendors/quill/quill.min.js")}}></script>



   @endsection


	@push('title')
		{{trans('pm.tasktitle')}}
	@endpush
	

	@push('description')
		{{trans('pm.taskdescription')}}
	@endpush
	

    @push('headerbuttons')
      
        <button type="button" id="gantt"  title="Gantt" 
            class="btn-shadow mr-3 btn justlist btn-info">
            <i class="fa fa-tasks "></i>
        </button>
    @endpush


    @push('maincard')
                
                <div class="main-card mb-3 card" id = "ganttcard" style="display: none;">
                @include ('partials.PM.gantt')
                </div>
    @endpush


    @php
	// taburi
	$subtabs = [
			(object)['caption'=>'Main'],  
			(object)['caption'=>'Notes'],  

			(object)['caption'=>'Attachments'],
			]
    @endphp 

	@push('detail')

                        <input hidden name='TaskId' id="TaskId" >
                        <input hidden id="Date" name= "Date" />

                        <div class="form-row">
                            <div class="col-md-12">
                                <div class="position-relative form-group">
                                    <label>Task name</label>
                                    <input type="text" class="form-control form-control-sm" required id="Name" name= "Name" />
                                </div>
                            </div>
                        </div>

                        <div class="form-row">
                            <div class="col-md-12">
                                <div class="position-relative form-group">
                                <label>Description</label>
                                <textarea class="form-control  form-control-sm" id="Description" name="Description" ></textarea>
                                </div>
                            </div>
                        </div>
                        

                        <div class="form-row ttWork ttMilestone ttMaterial ttToDo ">
                            <div class="col-md-12">
                                <div class="position-relative form-group">
                                    <label>Project</label>
                                    <select class="form-control  form-control-sm" id="ProjectId" name="ProjectId" required>
                                        <option value=""></option>
                                        @foreach($projects as $p)
                                                <option value="{{$p->ProjectId}}"   >{{$p->Name}}</option>
                                        @endforeach
                                    </select>

                                </div>
                            </div>
                        </div>

                         <div class="form-row ttWork ttMilestone ttMaterial">
                            <div class="col-md-12">
                                <div class="position-relative form-group">
                                    <label>Parent task</label>

                                    <select class="form-control  form-control-sm" id="ParentId" name="ParentId">
                                        <option value=""></option>
                                        @foreach($tasks as $p)

                                            <option value="{{$p->TaskId}}"   >{{$p->Name}}</option>
                                        @endforeach
                                    </select>
                                </div>
                            </div>
                        </div>


                        <div class="form-row">
                            <div class="col-md-4">
                                <div class="position-relative form-group">
                                    <label>Task type</label>
                                    <select class="form-control  form-control-sm" id="TaskTypeId" name="TaskTypeId" required onChange="OnTaskTypeChanged()">
                                        <option value=""></option>
                                            @foreach($tasktype as $u)
                                                <option value="{{$u->ElemDictionaryId}}" >{{$u->Name}}</option>
                                            @endforeach
                                    </select>
                                </div>
                            </div>

                            <div class="col-md-2">
                                <div class="position-relative form-group">
                                    <label>Priority</label>
                                  
                                    <input type="Number" class="form-control form-control-sm"  name= "Priority" id= "Priority" />
                                   
                                </div>
                            </div>
                        </div>


                        <div class="form-row">    
                            <div class="col-md-3 ttWork">
                                <div class="position-relative form-group">
                                    <label>Duration Type</label>
                            
                                    <select class="form-control  form-control-sm calcshedule" id="DurationTypeId" name="DurationTypeId" required>
                                        @foreach($durationtype as $u)
                                        <option value="{{$u->ElemDictionaryId}}" code="{{$u->Code}}" >{{$u->Name}}</option>
                                        @endforeach
                                    </select>
                                </div>
                            </div>

                            <div class="col-md-2 ttWork">
                                <div class="position-relative form-group">
                                    <label>Work</label>
                            
                                    <input  class="form-control form-control-sm calcshedule ev_calcwork" required
                                    type="number" id="Work" step="0.01" name= "Work" />
                                </div>
                            </div>

                            <div class="col-md-2 ttWork">
                                <div class="position-relative form-group">
                                   <label>Units</label>
                             
                                    <input  class="form-control form-control-sm calcshedule ev_calcwork" required
                                    type="number" id="Units" step="0.01" name= "Units"/>
                                </div>
                            </div>

                            <div class="col-md-2 ttWork">
                                <div class="position-relative form-group">
                            
                                    <label>Duration</label>
                                    
                                    <input class="form-control form-control-sm calcshedule ev_calcwork" required
                                        type="text" id="Duration" name= "Duration"/>
                                </div>
                            </div>
                            <div class="col-md-3 ttWork">
                                <div class="position-relative form-group">
                                    <label>Calendar</label>
                            
                                    <select class="form-control  form-control-sm" id="CalendarId" name="CalendarId">
                                        @foreach($calendar as $u)
                                        <option value="{{$u->CalendarId}}">{{$u->Name}} </option>
                                        @endforeach
                                    </select>
                                </div>
                            </div>

                        </div>

                        <div class="form-row">   
                            <div class="col-md-1 ttWork ttMilestone ttMaterial ">
                                <div class="position-relative form-group">  
                                    <label>Auto schedule</label>
                                 
                                        <input class="form-control form-control-sm" onChange="scheduleCheck()"
                                            type="checkbox" id="AutoSchedule" name= "AutoSchedule" />
                                    
                            
                                </div>
                            </div>

                            <div class="col-md-1 ttWork ttSchedule">
                                <div class="position-relative form-group">  
                                    <label>Effort driven</label>
                               
                                    <input class="form-control form-control-sm"
                                        type="checkbox" id=IsEffortDriven name= "IsEffortDriven" />
                        
                                
                                </div>
                            </div>

                            <div class="col-md-4 ttWork ttMilestone ttMaterial ttSchedule">
                                <div class="position-relative form-group"> 
                                    <label>Schedule constraint type</label>
                                       
                                        <select class="form-control  form-control-sm" id="ConstraintId" name="ConstraintId">
                                            @foreach($taskconstraint as $u)
                                            <option value="{{$u->ElemDictionaryId}}" >{{$u->Name}}</option>
                                            @endforeach
                                        </select>

                                </div>
                            </div>



                            <div class="col-md-3 ttWork ttMilestone ttMaterial">
                                <div class="position-relative form-group">  
                                    <label>Start date</label>
                                
                                    <input  class="form-control form-control-sm calcshedule"
                                    type="date" id="DateStart" name= "DateStart"/>
                                </div>
                            </div>

                            <div class="col-md-3 ttWork ">
                                <div class="position-relative form-group">  
                                    <label>End date</label>
                                    
                                    <input class="form-control form-control-sm calcshedule"
                                        type="date" id=DateEnd name= "DateEnd" />
                                
                                </div>
                            </div>

                          


                        </div>

                        <div class="form-row">  
                 

                   
                            <div class="col-md-4 ttWork ttMilestone ttMaterial ttToDo">
                                <div class="position-relative form-group">  
                                    <label>Task status</label>
                                    <select class="form-control  form-control-sm" id="TaskStatusId" name="TaskStatusId" >
                                        <option value=""></option>
                                        @foreach($taskstatus as $u)
                                            <option value="{{$u->ElemDictionaryId}}"  code="{{$u->Code}}" >{{$u->Name}}</option>
                                        @endforeach
                                    </select>
                                </div>
                            </div>

                            <div class="col-md-2 ttWork requirable">
                                <div class="position-relative form-group">  
                                    <label>Progress</label>

                                    <input type="number" class="form-control form-control-sm" required  min="0" max="100"  name= "Progress" id= "Progress"
                                        max="100"  placeholder="Min 0, Max 100" />
                                </div>
                            </div>

                            <div class="col-md-6 ttWork">
                                <div class="position-relative form-group">  
                                    <label>Responsable</label>

                                    <select class="form-control  form-control-sm" id="ResponsableId" name="ResponsableId">
                                        <option value=""></option>
                                    @foreach($persons as $u)
                                        <option value="{{$u->PersonId}}"  >{{$u->Name}}</option>
                                    @endforeach
                                    </select>
                               </div>
                            </div>

                        </div>



	@endpush

    @push('afterdetail')

    <div class="row mol-tab noactive" id="detail-1">
        <div class="col-sm-12 col-lg-12">
               
                    <div class="card-header text-right"><h5 class="card-title">Notes</h5>
                      
                    </div>

                    <input hidden id="Notes" name="Notes"/>
                    <div class="scroll-area-sm">
                        <div id="notesdiv" class="scrollbar-container">
                            <!-- <textarea id="Notes" name="Notes" class="mb-12 col-lg-12" ></textarea> -->

                            <div id="standalone-container">
                                <div id="toolbar-container">
                                    <span class="ql-formats">
                                    <select class="ql-font"></select>
                                    <select class="ql-size"></select>
                                    </span>
                                    <span class="ql-formats">
                                    <button class="ql-bold"></button>
                                    <button class="ql-italic"></button>
                                    <button class="ql-underline"></button>
                                    <button class="ql-strike"></button>
                                    </span>
                                    <span class="ql-formats">
                                    <select class="ql-color"></select>
                                    <select class="ql-background"></select>
                                    </span>
                                    <span class="ql-formats">
                                    <button class="ql-script" value="sub"></button>
                                    <button class="ql-script" value="super"></button>
                                    </span>
                                    <span class="ql-formats">
                                    <button class="ql-header" value="1"></button>
                                    <button class="ql-header" value="2"></button>
                                    <button class="ql-blockquote"></button>
                                    <button class="ql-code-block"></button>
                                    </span>
                                    <span class="ql-formats">
                                    <button class="ql-list" value="ordered"></button>
                                    <button class="ql-list" value="bullet"></button>
                                    <button class="ql-indent" value="-1"></button>
                                    <button class="ql-indent" value="+1"></button>
                                    </span>
                                    <span class="ql-formats">
                                    <button class="ql-direction" value="rtl"></button>
                                    <select class="ql-align"></select>
                                    </span>
                                   
                                    
                                </div>
                                
                                <div id="NotesRich"></div>
                                </div>

                        </div>
                    </div>
               
            
        </div>

    </div>

    <div class="row mol-tab noactive" id="detail-2">
        <div class="col-sm-12 col-lg-12">
            <div class="mb-3 card">
                <div class="card-body">
                    <div class="card-header text-right"><h5 class="card-title">Attachments</h5>
                        <div class="w-100  text-right">
                            <button data-toggle="modal" data-target="#AttachModal" class="btn-wide btn btn-success">Attach</button>
                        </div>
                    </div>
                    <div class="scroll-area-sm">
                        <div id="attachdiv" class="scrollbar-container">

                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>

    @endpush