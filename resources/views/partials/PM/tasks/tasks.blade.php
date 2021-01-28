
@extends('layouts.app')

@section('header')
        <link href={{asset("/assets/plugins/datatables/dataTables.bootstrap4.min.css")}} rel="stylesheet" type="text/css" />
        <link href={{asset("/assets/plugins/datatables/buttons.bootstrap4.min.css")}} rel="stylesheet" type="text/css" />
        <!-- Responsive datatable examples -->
        <link href={{asset("/assets/plugins/datatables/responsive.bootstrap4.min.css")}} rel="stylesheet" type="text/css" />




@endsection


@section('pageTitle')

Tasks

<sup><a href='#' onclick='newtask(null)'>Add new</a></sup>

@endsection

@section('FinalScript')
  <!--Morris Chart-->
    <!-- <script src="/assets/plugins/morris/morris.min.js"></script> -->
    <!-- <script src="/assets/plugins/raphael/raphael-min.js"></script> -->

        <!-- Required datatable js -->
        <script src={{asset("/assets/plugins/datatables/jquery.dataTables.min.js")}}></script>
        <script src={{asset("/assets/plugins/datatables/dataTables.bootstrap4.min.js")}}></script>
        <!-- Buttons examples -->
        <script src={{asset("/assets/plugins/datatables/dataTables.buttons.min.js")}}></script>
        <script src={{asset("/assets/plugins/datatables/buttons.bootstrap4.min.js")}}></script>
        <script src={{asset("/assets/plugins/datatables/jszip.min.js")}}></script>
        <script src={{asset("/assets/plugins/datatables/pdfmake.min.js")}}></script>
        <script src={{asset("/assets/plugins/datatables/vfs_fonts.js")}}></script>
        <script src={{asset("/assets/plugins/datatables/buttons.html5.min.js")}}></script>
        <script src={{asset("/assets/plugins/datatables/buttons.print.min.js")}}></script>
        <script src={{asset("/assets/plugins/datatables/buttons.colVis.min.js")}}></script>
        <!-- Responsive examples -->
        <script src={{asset("/assets/plugins/datatables/dataTables.responsive.min.js")}}></script>
        <script src={{asset("/assets/plugins/datatables/responsive.bootstrap4.min.js")}}></script>


       <script src={{asset("/assets/js/tasks.blade.js")}}></script>

<script>
$(document).ready(function() {


    var table = $('#tableTasks').DataTable({
        lengthChange: false,
        pageLength: 1000
    });

    table.buttons().container()
        .appendTo('#datatable-buttons_wrapper .col-md-6:eq(0)');

    $( "#tableTasks tbody tr" ).dblclick(function() {
        var trid = $(this).closest('tr').attr('taskid');

        viewtask(trid);

    });

    // sa folosim cookie-uri


    var FilterObject = null;
    if  ($('#nofilter').val() != ""){
       if ((getCookie('LastTaskFilter') != ""))
           FilterObject = JSON.parse((getCookie('LastTaskFilter')));


       if (getCookie('LastFilterSelect') != "")
           $("#activefilter").html(JSON.parse((getCookie('LastFilterSelect'))));

    }


    //$("#activefilter").html(JSON.parse(sessionStorage.getItem('LastFilterSelect')));

    //var FilterObject = JSON.parse(sessionStorage.getItem('LastTaskFilter'));

    var t = ' (';

    var proj = $("#projectid option:selected" ).text();

    if (proj != "")
        t += "Project = " + proj + "; ";


    $("#activefilter  option").each(function(name, val){
        t = t +  val.text + '; '

    })
    t = t + ')'
    $("#currfiltertext").text(t);


    $("#activefilter").dblclick(function() {
       $("#activefilter option:selected").remove();
       });


   // gantt.init("gantt_here", new Date(2018, 1, 1), new Date(2019, 1, 1));

    var load = "ganttdata?";

    @if ($projectid !== "")
        load = "ganttdata/" + {{$projectid}}  + "?";



        FilterObject = {'projectid':{{$projectid}}, 'filter': FilterObject != null?FilterObject.filter:""};

        createCookie('LastTaskFilter', JSON.stringify(FilterObject), 1000 );





    @else

        if ((FilterObject != null) && (FilterObject['projectid'] != "")){
            load = "ganttdata/" + FilterObject['projectid'] + "?";}

    @endif

    if (FilterObject != null){
        if ((typeof FilterObject['filter'] != 'undefined') && (FilterObject['filter'] != ''))
                load = load +  FilterObject['filter'];


    }



    var LastFilterVisible = sessionStorage.getItem('ShowTaskFilter');



    if (LastFilterVisible == "false")
        $(".morefilter").hide();

    if ($(".morefilter").is(':visible'))
        $('#afilter').text("Hide filters")
    else
        $('#afilter').text("Show filters")


    var ShowTaskDetails = sessionStorage.getItem('ShowTaskDetails');

    if (ShowTaskDetails == "false")
        $(".taskdetails").hide();

    if ($(".taskdetails").is(':visible'))
        $('#taskdetails').text("Hide details")
    else
        $('#taskdetails').text("Show details")





} );


</script>




@endsection



@section('content')






    <div class="row ">
        <div class="col-12">
            <div class="card m-b-20">
                        <div  id="filter_notes_switch" class=" col-sm-12">
                            <div class="form-group">
                                <a id="afilter" href="#" onclick='Swithfilter()'>Hide filters</a>
                                <sup id="currfiltertext" ></sup>
                            </div>
                        </div>
                <div class="card-block morefilter">

                    <div  id="filter_notes_project" class=" col-sm-12">
                        <div class="form-group">
                             <label>Project</label>

                           <select class="form-control  form-control-sm" id="projectid" name="projectid">
                               <option value=""></option>
                                @foreach($projects as $p)

                                <option value="{{$p->ProjectId}}"  {{($projectid == $p->ProjectId)? 'selected':''}} >{{$p->Name}}</option>
                                @endforeach
                           </select>
                        </div>
                    </div>

 					<div  id="filter_notes_saved" class=" col-sm-12">
                        <div class="form-group">
                             <label>Filters</label>

                           <select class="form-control  form-control-sm" id="savedfilters" name="savedfilters">
                               <option value=""></option>
                                @foreach($filters as $f)

                                <option value="{{$f->Filter}}"  >{{$f->Name}}</option>
                                @endforeach
                           </select>
                        </div>
                    </div>

                    <div  id="filter_notes_submit" class=" col-sm-2">
                        	<br>
                            <div class="form-group">
                                <button id="filter_notes_submit_btn"  type="submit" onclick="ClickFiltreazaTaskuriSaved()" class="btn btn-primary waves-effect waves-light">Filter</button>
                            </div>
                        </div>

                    <div class="form-group">
						<a id="newfiltera" href="#" onclick='SwithfilterNew()'>New filter</a>
					</div>

                    <div id="newfilter" style="display: none;">


                        <div class="card-block">
                            <div  class="row morefilter" style="margin-left: 0;">

                                <div  id="filter_notes_field" class=" col-sm-2">

                                    <br>
                                    <div class="form-group">
                                        <label>Filter field</label>
                                        <select class="form-control  form-control-sm" id="filterfields" name="operator" onchange="FilterFieldChange()">
                                            <option value=""></option>
                                            <option value="typefilterrow" field="TaskTypeId">Task type</option>
                                            <option value="statusfilterrow" field="TaskStatusId">Task status</option>

                                        </select>
                                    </div>
                                </div>


                                <div  id="filter_notes_operator" class=" col-sm-1">
                                    <br>
                                    <div class="form-group">
                                        <label>Operator</label>
                                        <select class="form-control  form-control-sm" id="operator" name="operator">
                                            <option value="=">=</option>
                                            <option value=">"> &gt</option>
                                            <option value="<"> &lt</option>
                                            <option value=">="> &gt=</option>
                                            <option value="<="> &lt=</option>

                                        </select>
                                    </div>
                                </div>

                                <div  id="filter_notes_type" class="col-sm-4">
                                <br>
                                    <div class="row filterrow" id = "typefilterrow" style="margin-left: 0; display:none;">
                                        <div  id="typefilter" class="col-sm-12">
                                            <div class="form-group">
                                            <label>Type</label>
                                            <select class="form-control  form-control-sm" id="tasktypeid" name="tasktypeid">
                                                <option value=""></option>
                                                    @foreach($tasktype as $p)
                                                        <option value="{{$p->TaskTypeId}}" >{{$p->Name}}</option>
                                                    @endforeach
                                            </select>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row filterrow" id = "statusfilterrow"  style="margin-left: 0; display:none;">
                                        <div  id="statusfilter" class=" col-sm-12">
                                            <div class="form-group">
                                                <label>Status</label>
                                                <select class="form-control  form-control-sm" id="taskstatusid" name="taskstatusid">
                                                <option value=""></option>
                                                    @foreach($taskstatus as $p)
                                                    <option value="{{$p->TaskStatusId}}" >{{$p->Name}}</option>
                                                    @endforeach
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                </div>





                            </div>

                            <div class="row morefilter" style="margin-left: 0;">

                                <div  id="filter_notes_add" class=" col-sm-2">
                                    <br><br>
                                    <div class="form-group">
                                        <button type="button" onclick="AddFilter()" class="btn btn-primary waves-effect waves-light">Add filter</button>
                                    </div>
                                </div>

                                <div  id="filter_notes" class=" col-sm-3">
                                    <br>

                                    <div class="form-group">
                                    <input id='nofilter' hidden value =  {{isset($filter)?$filter:''}}></input>
                                    <label>Active filters</label>
                                        <select multiple = "multiple" class="form-control  form-control-sm" id="activefilter" name="activefilter" style="height: 100px;">


                                        </select>
                                    </div>
                                </div>
                                <div  id="filter_notes_save" class=" col-sm-2">
                                    <br><br>
                                    <div class="form-group">
                                        <button type="button" onclick="SaveFilter()" class="btn btn-primary waves-effect waves-light">Save filter</button>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div  id="filter_notes_submit" class=" col-sm-2">
                        	<br>
                            <div class="form-group">
                                <button id="filter_notes_submit_btn"  type="submit" onclick="ClickFiltreazaTaskuri()" class="btn btn-primary waves-effect waves-light">Filter</button>
                            </div>
                        </div>
                    <div>

                    <br>


                </div>
            </div>
        	</div> <!-- end col -->
   	 </div> <!-- end row -->

    <!-- gannt -->
   <div class="row">
        <div class="col-12">

            <div class="card m-b-20 ">

                <div class="card-block ganttcontainer" ganttId="mytasks" style='width:100%; height:800px;'>




					<h4 class="mt-0 m-b-15 header-title">Tasks</h4>
                        <!-- <div id="gantt_here"  style='width:100%; height:100%;'> -->
                        @include('/tasks/scheduledTasks')

                        </div>

                </div>
            </div>
        </div>
    </div>



    @include('tasks.taskmodal')
    @include('tasks.taskmultiplemodal')


@endsection


@section ('Tooltip')

@include('tasks.tasktooltip')
@include('tasks.tasklinktooltip')
@endsection
