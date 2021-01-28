
var ganttChanged = false;

window.onload = function () {
    var gantt = document.querySelector('smart-gantt-chart');
    gantt.durationUnit = 'day';
    gantt.view = 'week';
    gantt.treeSize = '400px';
    gantt.dateStart = '2021-04-01';
    gantt.dateEnd = '2021-06-01';
    gantt.autoSchedule= true;
    gantt.autoscroll = true;
    gantt.nonworkingDays = [0,6];
    gantt.snapToNearest = true;
   
    gantt.timelineHeaderFormatFunction = function (date, type, isHeaderDetailsContainer) {

        if (isHeaderDetailsContainer) {
            if (gantt.view =='week'){
                let startDate = new Date(date), endDate = new Date(date), formatDate = (date) => date.toLocaleDateString(gantt.locale, { day: '2-digit', month: 'short' }).toUpperCase();
                //the view is set to 'week' so add 6 days to the first to get the last
                endDate.setDate(endDate.getDate() + 6);
                //Validate the endDate according to timeline end
                endDate = new Date(Math.min(gantt.dateEnd.getTime(), endDate.getTime()));
                return formatDate(startDate) + ' - ' + formatDate(endDate);
            }

            if (gantt.view == 'month'){
                
                let formatDate = (date) => date.toLocaleDateString(gantt.locale, {month: 'short' }).toUpperCase();
                //the view is set to 'week' so add 6 days to the first to get the last
                return formatDate(date);
            }



        }
        else {
            if (type == 'day'){
                return new Date(date).toLocaleDateString(gantt.locale, { weekday: 'short' }).toUpperCase() +'\r\n'+ date.toLocaleDateString(gantt.locale, { day: '2-digit'}).toUpperCase();;
            }
            else if(type == 'week'){
                let startDate = new Date(date), endDate = new Date(date), formatDate = (date) => date.toLocaleDateString(gantt.locale, { day: '2-digit', month: 'short' }).toUpperCase();
                //the view is set to 'week' so add 6 days to the first to get the last
                endDate.setDate(endDate.getDate() + 6);
                //Validate the endDate according to timeline end
                endDate = new Date(Math.min(gantt.dateEnd.getTime(), endDate.getTime()));
                return formatDate(startDate) + ' - ' + formatDate(endDate);
            }
              
        }
    };
 


    gantt.taskColumns = [
        {
            label: 'TASK NAME',
            value: 'label',
            size: '200px'
        },
        {
            label: 'START TIME',
            value: 'dateStart',
            size: '100px',
            formatFunction: function (dateString) {
                const date = new Date(dateString), formatNumber = (number) => ('0' + number).slice(-2);
                return ' '+ date.getFullYear() + '-' + formatNumber(date.getMonth() + 1) + '-' + formatNumber(date.getDate()) + ' ';
            }
        },
        {
            label: 'DURATION',
            value: 'duration',
            size: '80px',
            formatFunction: (duration) => parseInt(duration)
        }
    ];
    
    let editedTaskIndex, taskLabel, description, dayPicker, monthPicker, yearPicker, dayIncrementBtn, 
    dayDecrementBtn, dayInput, totalDate, deleteBtn, cancelBtn, saveBtn;


    gantt.popupWindowCustomizationFunction = function (target, type, taskIndex) {
        const targetTask = gantt.tasks[taskIndex];
        if (type === 'task' && targetTask) {
            ShowSuccess(taskIndex);    
        }
        taskIndex = undefined;
    };

    gantt.addEventListener('change', function (event) {
            const detail = event.detail,
            target = detail.value[0];
            if (detail.value.length < 1)
                return;
            lasttasksync = false;

            taskid = gantt.tasks[target].id;
            type = gantt.tasks[target].type;

            if (type == 'project')
                return;
          
           
             mastertastks = $('#masterlist').jqxGrid('getrows') ; 
             var rowsCount = mastertastks.length;
                for (var i = 0; i < rowsCount; i++) {
                    var value = $('#masterlist').jqxGrid('getcellvalue', i, "TaskId");
                    if (value == taskid) {
                        $('#masterlist').jqxGrid('selectrow', i);
                        lasttasksync = true;
                        break;
                    };
                };    

    });


    gantt.addEventListener('opening', function (event) {
        const detail = event.detail,
            target = detail.target,
            type = detail.type;
            task = detail.task;
            if (type === 'task' && lasttasksync) {
                goDetail();  
                $('#maincard').toggle();
                $('#ganttcard').toggle();  
                LastIsGantt = true; 
            }
            event.preventDefault();
        // event handling code goes here.
    });


    function updateTotalDate() {
        let newDateEnd = new Date(parseInt(yearPicker.value), parseInt(monthPicker.value), parseInt(dayPicker.value));
        newDateEnd.setDate(newDateEnd.getDate() + parseInt(dayInput.value));
        if (isNaN(newDateEnd.getTime())) {
            totalDate.innerHTML = '';
            return;
        }
        totalDate.innerHTML = newDateEnd.toDateString();
    }

    function deleteTask() {
        gantt.removeTask(editedTaskIndex);
        gantt.closeWindow();
        editedTaskIndex = undefined;
    }

    function cancelTask() {
        gantt.closeWindow();
    }

    function saveTask() {
        let dateStart = new Date(parseInt(yearPicker.value), parseInt(monthPicker.value), parseInt(dayPicker.value)), duration = parseInt(dayInput.value);
        gantt.updateTask(editedTaskIndex, { label: description.value, dateStart: dateStart, duration: duration });
        gantt.closeWindow();
        editedTaskIndex = undefined;
    }

    const dropDown = document.querySelector('smart-drop-down-list');
    dropDown.addEventListener('change', function (event) {
        gantt.view = event.detail.label;
       
    })

    $("#loadGantt").click(loadGantt);

    $("#saveGantt").click(saveGantt);

    loadGantt('all');

    gantt.addEventListener('progressChangeEnd', function (event) {
        ganttChanged = true;
    })

    gantt.addEventListener('connectionStart', function (event) {
        ganttChanged = true;
    })

    gantt.addEventListener('resizeEnd', function (event) {
        ganttChanged = true;
    })

    gantt.addEventListener('dragEnd', function (event) {
        ganttChanged = true;
    })
};

function getTaskIndexById(id){
    var gantt = document.querySelector('smart-gantt-chart');
    var i = -1;
    gantt.tasks.forEach(function(e){
        if (e.id == id){
            i = e.index;
            return;
        }
           
    })
    return i;
}



function saveGantt(){
    if (!ganttChanged)
        return;

    var gantt = document.querySelector('smart-gantt-chart');
    var Data = gantt.getState();
    $.ajax({
        type: 'POST',

        url: baseUrl + '/savetaskgantt', 
        data: Data,
        success: function (data) {
           
            ShowSuccess('Gantt saved!');
           
            RefreshMaster(LastFilter)

        }
    }); 
   
}


function loadGantt(filter){

    $.ajax({
        type: 'POST',

        url: baseUrl + '/gettaskgantt', 
        data: {filter:filter},
        success: function (data) {
            ShowSuccess('Gantt retrieved!');
            var gantt = document.querySelector('smart-gantt-chart');
            gantt.dataSource = JSON.parse(data[0]);

            data[1].forEach(function (element){
               
                var p = getTaskIndexById(element.ParentTaskId);
                var c = getTaskIndexById(element.ChildTaskId);
                var l = element.Lag * 24 * 60 * 60 * 1000;
                var t = element.LinkType;
                var sl = p+ "-" + c + "-" + t  ;
                gantt.createConnection(sl);
            });
            gantt.refresh(true);
            ganttChanged = false;

        }
    }); 

  
}