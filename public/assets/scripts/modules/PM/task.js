HasDetails = false;
var lasttasksync = false;
var LastIsGantt = false; 
var IsCalcElemWork = false;
var quill;

urls = {
    saveurl: '/savetaskajax',
    getmasterurl: '/gettasksajax',
    getdetailurl: '/gettaskajax',
    deleteurl: '/deletetaskajax',
    getdetaillisturl: '/gettaskfunctionsajax',
    getdictionariesurl: '/gettaskdictionariesajax'
        
};

listdatafields=
    [
        { name: 'TaskId', type: 'integer'},
        { name: 'Project', type: 'integer'},
        { name: 'Name', type: 'string'},
        { name: 'TaskType', type: 'string'},
        { name: 'TaskStatus', type: 'string'},
        { name: 'DateStart', type: 'string' },
        { name: 'DateEnd', type: 'string' },
        { name: 'Duration', type: 'string'},
       
    ]

listdatacolumns=
    [
         {text: 'Project', datafield: 'Project',  width:'10%',},
         {text: 'Task', datafield: 'Name',  width:'30%',},
         { text: 'Type', datafield: 'TaskType', width: '15%'},
         { text: 'Status', datafield: 'TaskStatus', width: '15%'},
         { text: 'Date Start', datafield: 'DateStart', width: '10%'},
         { text: 'Date End', datafield: 'DateEnd', width: '10%'},
         { text: 'Duration', datafield: 'Duration', width: '10%'},
         { text: 'TaskId', datafield: 'TaskId', width: '10%', hidden: true},
    ]


function AfterRefreshMaster(data){
    loadGantt(LastFilter);
}


_doList = doList;
doList = function(){
    _doList();
    if (LastIsGantt){
        $('#maincard').toggle();
        $('#ganttcard').toggle(); 
    }
    
}

function AfterRetreiveDetail(){
  
    DoTaskTypeControls(); // conteaza ordinea

    if ($('#Notes').val() != "")
        quill.setContents(JSON.parse($('#Notes').val().replaceAll('##n##', '\\n')));
    else    
        quill.setText("");
   
}

function CalcElemWork(sender){

    if (IsCalcElemWork)
        return;
    
    IsCalcElemWork = true;
    try{
        var Work = $('#detailform').find('#Work').val();
        var Units = $('#detailform').find('#Units').val();
        var Duration = $('#detailform').find('#Duration').val();


        var Id = $(sender).attr("id");
        
        DurationTypeCode = $('#detailform').find('#DurationTypeId').find('option:selected').attr("code");

        if (Id == "Work"){
            if (DurationTypeCode == "FW"){
                Duration = Work/Units;
            }
                
            if (DurationTypeCode == "FU"){
                Duration = Work/Units; 
            }

            if (DurationTypeCode == "FD"){
                Units = Work/Duration;
            }

        }

        if (Id == "Units"){
            if (DurationTypeCode == "FW"){
                Duration = Work/Units;
            }
                
            if (DurationTypeCode == "FU"){
                Duration = Work/Units; 
            }

            if (DurationTypeCode == "FD"){
                Work = Duration/Units;
            }

        }
        if (Id== "Duration"){
            if (DurationTypeCode == "FW"){
                Units = Work/Duration;
            }
                
            if (DurationTypeCode == "FU"){
                Work = Duration/Units;
            }

            if (DurationTypeCode == "FD"){
                Units = Work/Duration;
            }

        }

        $('#detailform').find('#Units').val(Units);
        $('#detailform').find('#Duration').val(Duration);
        $('#detailform').find('#Work').val(Work);
    }
    finally{
        IsCalcElemWork = false;
    }

}


function DoTaskTypeControls(){
    var tasktype = $("select[id=TaskTypeId] option:selected").text();

    TaskStatusCode = $('#detailform').find('#TaskStatusId').find('option:selected').attr("code");

    $('#DateStart').attr('required', (TaskStatusCode == 'Sch') && (tasktype != 'ToDo'));

    if ( tasktype == 'Work'){
        $('.ttWork').show();
        $('.ttWork.requirable :input').attr('required', true);

        $('#DateEnd').attr('required', TaskStatusCode == 'Sch');


    }
    else{
        
        $('.ttWork.requirable :input').removeAttr('required');

        $('.ttWork').hide();

        if ( tasktype == 'Milestone'){
            $('.ttMilestone').show();
            $('.ttMilestone.requirable :input').attr('required', true);
        }
        if ( tasktype == 'Material'){
            $('.ttMaterial').show();
            $('.ttMaterial.requirable :input').attr('required', true);
        }
        if ( tasktype == 'ToDo'){
            $('.ttToDo').show();
            
           
        }
        

        $('#DateEnd').attr('required', false);


    }

    scheduleCheck();

    $(".tab-content" ).removeValidator();
}

function OnTaskTypeChanged(){

    var tasktype = $("select[id=TaskTypeId] option:selected").text();

    if ( tasktype == 'ToDo'){
        $("select[id=TaskStatusId] option[code='Sch']").attr('selected', 'selected');
        $('#AutoSchedule').prop('checked', false);
    }
    DoTaskTypeControls();
    
}


function OnTaskStatusChanged(){
    OnTaskTypeChanged();
}


function scheduleCheck(){
    if ($('#AutoSchedule').is(':checked'))
        $('.ttSchedule').show()
    else
        $('.ttSchedule').hide()
}

function ValidateBeforeSave(){
    return true;

  

}

$(document).ready(function() {
    $('#gantt').click(function(){
      
        $('#maincard').toggle();
        $('#ganttcard').toggle();
        lasttasksync = false;
        LastIsGantt = false; 

    })
    
    $('.ev_calcwork').change(function() {
		CalcElemWork(this);
    });

    $('#TaskStatusId').change(function() {
		OnTaskStatusChanged(this);
    });
    

   quill = new Quill('#NotesRich', {
    modules: {
      formula: false,
      syntax: false,
      toolbar: '#toolbar-container'
    },
    placeholder: '',
    theme: 'snow'
  });

  quill.on('text-change', function(delta, oldDelta, source) {
    if (source == 'api') {
      console.log("An API call triggered this change.");
    } else if (source == 'user') {
      console.log("A user action triggered this change.");
      $('#Notes').val(JSON.stringify(quill.getContents()).replaceAll('\\n', "##n##"));
    }
  });


})