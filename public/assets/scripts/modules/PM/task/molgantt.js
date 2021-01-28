var  MouseX = 0;
var  MouseY = 0;
var IsToolTip = false;
var IsToolTipLink = false;
var IsCtr = false;


var mousePosition;
var Origin = [0,0,0,0,0];
var div = "";
var taskdiv = "";
var rightdiv = "";
var rightlink = "";
var rlm = 3;
var rightlinkoffest = 2;
var isDown = false;
var IsDownLink = false;
var IsOverLink = false;
var IsMiddleDown = false;
var IsInScroll = false;

var gFrom = '';
var gTo = '';
var gIdTaskFrom = 0
var gIdTaskTo = 0;

var gTaskId = 0;
var gTaskIdDone = 0;

function switchLeft(){
            
    if ($(".content-page").hasClass("hidesidemenu")){
        $(".content-page").removeClass("hidesidemenu");
        $(".side-menu").removeClass("hidesidemenu");
        $(".logo").removeClass("hidesidemenu");
        localStorage.LeftMenuStatus = "visible";
    }else{
        $(".content-page").addClass("hidesidemenu");
        $(".side-menu").addClass("hidesidemenu");
        $(".logo").addClass("hidesidemenu");
        localStorage.LeftMenuStatus = "hidden";
    }
}


	function InitializareGantt(){
        var tee = $('#maintable thead');
        var tw = document.getElementById('rightdiv');
        var cloner = document.getElementById('rightdiv');
        var bd = document.getElementById('rcont');
        var newTableWrap = document.createElement("div");
        var newTable = document.createElement("Table");
        var oldTable = document.getElementById('maintable');
        var childNode = oldTable.childNodes[1];
        var wrapW = $(tw).css('width');
        var wrapY = $(tw).css('height');
        var headHeight = tee.css('height');

        //node The node to be cloned.
        var dupNode = childNode.cloneNode(true);
        newTable.appendChild(dupNode);
        newTableWrap.appendChild(newTable);


        newTable.classList.add("gridtableT");
        newTable.classList.add("gridtable");

        $(newTableWrap).css({'width': wrapW, 'overflow':'hidden'});

        bd.insertBefore(newTableWrap , tw);
        $(oldTable).css('margin-top', ('-' + headHeight) );


        $(".gridtableT > thead > tr> th > div").addClass("rightheaderdiv");;

        function OnRightDivScroll(e){
            e.stopPropagation();
            var newLeft = e.target.scrollLeft;

            $(newTable).css('margin-left', '-' + newLeft + 'px');

            var leftdiv =  document.getElementById('leftdiv');

            var newTop = e.target.scrollTop;
            $(leftdiv).scrollTop(newTop);
            return false;

            }

        $('#rightdiv').on('scroll', OnRightDivScroll);


        var tee = $('#lefttable thead');
        var tw = document.getElementById('leftdiv');
        var cloner = document.getElementById('leftdiv');
        var bd = document.getElementById('lcont');
        var newTableWrap = document.createElement("div");
        var newTable2 = document.createElement("Table");
        var oldTable = document.getElementById('lefttable');
        var childNode = oldTable.childNodes[1];
        var wrapW = $(tw).css('width');
        var wrapY = $(tw).css('height');
        var headHeight = tee.css('height');

        //node The node to be cloned.
        var dupNode = childNode.cloneNode(true);
        newTable2.appendChild(dupNode);
        newTableWrap.appendChild(newTable2);

        newTable2.classList.add("gridtableT");
        newTable2.classList.add("gridtable");

        $(newTableWrap).css({'width': wrapW, 'overflow':'hidden'});

        bd.insertBefore(newTableWrap , tw);
        $(oldTable).css('margin-top', ('-' + headHeight) );

        function OnLeftDivScroll(e){
            e.stopPropagation();
            var newLeft = e.target.scrollLeft;
            $(newTable2).css('margin-left', '-' + newLeft + 'px');

            var rightdiv =  document.getElementById('rightdiv');
            var newTop = e.target.scrollTop;

            $(rightdiv).scrollTop(newTop);
            return false;

        }

        $('#leftdiv').on('scroll', OnLeftDivScroll);

        $('#leftdiv').hover(
            function(){
                $('#leftdiv').on('scroll', OnLeftDivScroll);
                $('#rightdiv').unbind('scroll');
            },
            function(){
                $('#leftdiv').unbind('scroll');
            }
        )

        $('#rightdiv').hover(
            function(){
                $('#rightdiv').on('scroll', OnRightDivScroll);
                $('#leftdiv').unbind('scroll');
            },
            function(){
                $('#rightdiv').unbind('scroll');
            }
        )

        $('.TaskTr').mousedown(function(e){

            if ($(e.target).hasClass('orizontallink'))
                return;

            switch (event.which) {


                case 3:
                    RightClickTask(e.currentTarget);

                    break;

            }
        });


        //$('#leftdiv').bind('mousewheel DOMMouseScroll', function (e) { return false; });//


        $('.moving').mousedown(function(e){



            div = e.target.id;

            if ($("#" + div).hasClass('orizontallink'))
             return;

             if ($("#" + div).hasClass('verticallink'))
                return;

            if (div == "")
                return;

            if ($("#" + div).hasClass("link") ){
                IsDownLink = true; // s-a apasat linkul
                $("#" + div).addClass('sourcelink');
                return;
            }

            if (div == "middlediv" ){
                IsMiddleDown = true;
                Origin = [
                    GetProperty("#" + div,"margin-left").replace('px', ''),
                    GetProperty("#lcont" ,"width").replace('px', '') ,
                    e.clientX,
                    0,0
                    ];
                return;
            }


            isDown = true;


            if ($("#" + div).hasClass("task") ){
                Origin = [
                GetProperty("#" + div,"margin-left").replace('px', ''),
                GetProperty("#" + div,"width").replace('px', '') ,
                e.clientX,
                0,0
                ];
                taskdiv = div;
                rightdiv =  $('#' + taskdiv).children('.rightdiv')[0].id;
                rightlink = $('#' + taskdiv).children('.rightlink')[0].id;


            }else
            if ($("#" + div).hasClass("milestone") ){
                Origin = [
                GetProperty("#" + div,"margin-left").replace('px', ''),
                GetProperty("#" + div,"width").replace('px', '') ,
                e.clientX,
                0, 0
                ];
                taskdiv = div;
                rightdiv =  "";
                rightlink = $('#' + taskdiv).children('.rightlink')[0].id;

            }else
            if ($("#" + div).hasClass("milestoneromb") ){
                Origin = [
                    GetProperty("#" + $("#" + div).offsetParent()[0].id,"margin-left").replace('px', ''),
                    GetProperty("#" + $("#" + div).offsetParent()[0].id,"width").replace('px', '') ,
                    e.clientX,
                    0, 0
                    ];
                    taskdiv =  $("#" + div).offsetParent()[0].id;
                rightdiv =  "";
                rightlink = $('#' + taskdiv).children('.rightlink')[0].id;
            }
            else
            {

             Origin = [

                GetProperty("#" + $("#" + div).offsetParent()[0].id,"margin-left").replace('px', ''),
                GetProperty("#" + $("#" + div).offsetParent()[0].id,"width").replace('px', '') ,
                e.clientX,
                0, 0
                ];
                taskdiv =  $("#" + div).offsetParent()[0].id;
                rightdiv =  $('#' + taskdiv).children('.rightdiv')[0].id;
                rightlink = $('#' + taskdiv).children('.rightlink')[0].id;
            }
            if (rightdiv !== "")
                Origin[3] =  $('#' + rightdiv).css("margin-left").replace('px', '');
                Origin[4] =  $('#' + rightlink).css("margin-left").replace('px', '');


        });

        // Creating link



        function createLinkAjax(){


            $.ajax({
                type: 'POST',
                url: OriginUrl +'/ajaxlinkTasks',
                data: {TaskIdFrom: gIdTaskFrom, TaskIdTo: gIdTaskTo, From : gFrom, To : gTo},
                error: function (xhr, ajaxOptions, thrownError) {

                },
                success: function (data) {
                    if (data == 'OK'){
                        alertify.success('Relation created between ' + gIdTaskFrom + ' ' + gFrom + ' and ' + gIdTaskTo + ' ' + gTo);
                        RefreshTaskAjax();
                    }
                    else
                        alertify.error(data);
                }
            });
        };

        function onCreateLink(IdTaskFrom, IdTaskTo, From, To){
            gIdTaskFrom = IdTaskFrom,
            gIdTaskTo = IdTaskTo,
            gFrom = From,
            gTo = To

            if (gIdTaskFrom == gIdTaskTo){
                alertify.error('You cannot link the same task!');
                return;

            }

            confirm("Do you want to create the link of the selected tasks?", createLinkAjax);

        };

        // End creating link


        document.addEventListener('mouseup', function() {
            if (IsDownLink){
                IsDownLink = false;
                $('.link').addClass("linkhidden");  // s-a ridicat linkul - aici trebuie sa facem un link

                if (IsOverLink){
                    var From = '';
                    var To = '';
                    var IdTaskFrom = 0
                    var IdTaskTo = 0;

                    IdTaskFrom = $('.link.sourcelink').parent().attr('TaskId');
                    IdTaskTo = $('.link.linkover').parent().attr('TaskId');

                    if ( $('.link.sourcelink').hasClass('rightlink'))
                    {
                        From = 'F';
                    }
                    else{
                        From = 'S';
                    }

                    if ( $('.link.linkover').hasClass('rightlink'))
                    {
                        To = 'F';
                    }
                    else{
                        To = 'S';
                    }

                    onCreateLink(IdTaskFrom, IdTaskTo, From, To);

                }



                $('.link').removeClass('sourcelink');
                return;
            }

            if (IsMiddleDown){
                IsMiddleDown = false;

                createCookie('ganttmiddleleft', JSON.stringify($("#" + div).css('margin-Left')), 1000 );
                createCookie('ganttlcontwidth', JSON.stringify($("#lcont").css('width')), 1000 );



                return;
            }

            if (isDown){
                isDown = false;

                var TaskId = 0;
                var DurationOffset = 0;
                var StartDateOffset = 0;
                var CalendarId = 0;
                var StartDate;


                if ($('#' + div).hasClass('rightdiv')){
                    DurationOffset = Math.round( ( $("#" + div).parent().css('width').replace('px', '') - Number(Origin[1]))/ Number($('.dtdo').parent().css('width').replace('px', '')));
                }
                else
                    if ($('#' + div).hasClass('leftdiv')){

                        DurationOffset = Math.round( ( $("#" + div).parent().css('width').replace('px', '') - Number(Origin[1]))/ Number($('.dtdo').parent().css('width').replace('px', '')));
                        StartDateOffset = -DurationOffset;
                    }
                    else{
                        StartDateOffset = Math.round((GetProperty("#" + taskdiv,"margin-left").replace('px', '') -  Number(Origin[0]))/ Number($('.dtdo').parent().css('width').replace('px', '')));
                    }

                    TaskId = $("#" + taskdiv).attr('TaskId');
                    CalendarId = $("#" + taskdiv).attr('CalendarId');

                    if (!((DurationOffset == 0) && (StartDateOffset == 0))){
                        //modificam in baza
                        StartDate = $("#" + taskdiv).attr('datastart');
                        OrigDuration = $("#" + taskdiv).attr('duration');
                        UpdateGanttTask(TaskId, DurationOffset, StartDateOffset, CalendarId, StartDate, OrigDuration);
                    }
                    else{
                        // punem la loc
                        $("#" + taskdiv).css("margin-left", Origin[0] + 'px');
                        $("#" + taskdiv).css("width", Origin[1] + 'px');
                        // si recalculam dreapta
                        $('#' + rightdiv).css("margin-left", Origin[3]+ 'px');

                        $('#' + rightlink).css("margin-left", Number(Origin[4]) + 'px');
                    }


            }

        }, true);


        document.addEventListener('mousemove', function(event) {
            event.preventDefault();
            mousePosition = {

                x : event.clientX,
                y : event.clientY

            };
            if (isDown) {


                if ($('#' + div).hasClass('rightdiv')){
                    $("#" + div).parent().css('width', Number(Origin[1]) + (Number(mousePosition.x) - Number(Origin[2])) + 'px');
                    $('#' + div).css('margin-Left', ($("#" + div).parent().width()) + 'px');

                    $('#' + rightlink).css('margin-Left', Number($("#" + div).parent().width()) + rlm + 'px');

                }
                else
                if ($('#' + div).hasClass('leftdiv')){
                    $("#" + div).parent().css('margin-Left',Number(Origin[0]) + (Number(mousePosition.x) - Number(Origin[2])  ) + 'px');
                    $("#" + div).parent().css('width', Number(Origin[1]) - (Number(mousePosition.x) - Number(Origin[2])) + 'px');
                    $('#' + div).next('.rightdiv').css('margin-Left', ($("#" + div).parent().width()) + 'px');
                    $('#' + rightlink).css('margin-Left', Number($("#" + div).parent().width()) + rlm + 'px');

                }else{

                    $("#" + taskdiv).css('margin-Left',Number(Origin[0]) + (Number(mousePosition.x) - Number(Origin[2])  ) + 'px')

                }

                if ($('#' + div).hasClass("milestonelink"))
                $('#' + rightlink).css('margin-Left', Number($("#" + div).parent().width()) + rlm + rightlinkoffest + 'px');


            }else
            if (IsMiddleDown ){
                $("#" + div).css('margin-Left',Number(Origin[0]) + (Number(mousePosition.x) - Number(Origin[2])  ) + 'px');
                $("#lcont").css('width', Number(Origin[1]) + (Number(mousePosition.x) - Number(Origin[2])  ) + 'px');
                $("#leftdiv").css('width', Number(Origin[1]) + (Number(mousePosition.x) - Number(Origin[2])  ) + 'px');


                $('#rcont').css('width',  Number($('#molgantt').width()) - Number($('#leftdiv').width()) + 5);
                $('#rcont').children('div').css('width',  Number($('#molgantt').width()) - Number($('#leftdiv').width()) + 5);


            }
            else{
                var x = event.clientX,
                    y = event.clientY;

                // tooltipSpan.style.top = (y + 20) + 'px';
                // tooltipSpan.style.left = (x + 20) + 'px';
            }
        }, true);


        $('.task').each(
        function(){
            $(this).css('width',  (Number($(this).attr('duration')) * Number($(this).closest('td').css('width').replace('px', '')) ) + 'px')
            }
        );

        $('.rightdiv').each(function(){$(this).css('marginLeft', ( $(this).parent().width()) + 'px')});
        $('.rightlink').each(function(){$(this).css('marginLeft', Number( $(this).parent().width()) + rlm + 'px')});
        $('.rightlink.milestonelink').each(function(){$(this).css('marginLeft', Number( $(this).parent().width()) + rlm + rightlinkoffest + 'px')});

        // scroll to today

           $("#rightdiv").scrollLeft(Number($('#maintable').css('width').replace('px', '')) /2 - 100);

           $(window ).resize(function() {

               $('#rcont').css('width',  Number($('#molgantt').width()) - Number($('#leftdiv').width()) + 5);
               $('#rcont').children('div').css('width',  Number($('#molgantt').width()) - Number($('#leftdiv').width()) + 5);
           });


        $( "#lefttable tbody tr" ).dblclick(function() {
            var trid = $(this).closest('tr').attr('taskid');

            viewtask(trid);

        });

        $( ".task" ).dblclick(function() {
            var trid = $(this).attr('taskid');

            viewtask(trid);

        });

        $('#rcont').css('width',  Number($('#molgantt').width()) - Number($('#leftdiv').width()) + 5);
        $('#rcont').children('div').css('width',  Number($('#molgantt').width()) - Number($('#leftdiv').width()) + 5);


        $('.task, .milestone').hover(
            function(){
                OnHoverLink(this)
            },
            function(){
                OnExitHoverLink(this)
            }
        )

        $('.task, .milestone').hover(
            function(){
                OnHoverLink(this)
            },
            function(){
                OnExitHoverLink(this)
            }
        )

        $('.link').hover(
            function(){
                OnHoverLinkButton(this)
            },
            function(){
                OnExitHoverLinkButton(this)
            }
        )

        function getlinks(){
           var Tasks = [];
           $('.task').each(
               function(){

                Tasks.push($(this).attr('taskid'));
               }
           )

            $.ajax({
            type: 'POST',

            url: "/project/ajaxgetGanttTaskLinks",
            data: {Tasks: Tasks},
            error: function (xhr, ajaxOptions, thrownError) {

            },
            success: function (data) {

                if (data == '')
                    return;
                var Links = JSON.parse(data)
                var ParentTaskId;
                var ChildTaskId;
                var LinkType;
                var Lag;

                for(var i in Links){
                    ParentTaskId = Links[i].ParentTaskId;
                    ChildTaskId = Links[i].ChildTaskId;
                    LinkType = Links[i].Code;
                    Lag = Links[i].Lag;
                    drawlink(ParentTaskId, ChildTaskId, LinkType, Lag)
                }
                $('.orizontallink').mousedown(function(e){
                    switch (event.which) {

                        case 3:
                            RightClickLink(e.currentTarget);

                            break;

                    }
                });
                $('.verticallink').mousedown(function(e){
                    switch (event.which) {

                        case 3:
                            RightClickLink(e.currentTarget);

                            break;

                    }
                });
            }
        });

        function drawlink(ParentTaskId, ChildTaskId, LinkType, Lag){
            // get the child task
            if ($('#test_'+ ChildTaskId).length == 0){
                return;
            }
            else{
                if (LinkType.substring(0,1) == 'F'){
                    var x1 = 0;
                    var x2 = 0;
                    var y1 = 0;
                    var y2 = 0;
                    var d = 0;
                    var linkh = 0;
                    var margintop = 0;

                    var x1 =  parseInt($('#test_' + ParentTaskId).attr('tdX'));
                    var d =   parseInt($('#test_' + ParentTaskId).attr('duration'));

                    var y1 =  parseInt($('#test_' + ParentTaskId).attr('tdY'));
                    var y2 =  parseInt($('#test_' + ChildTaskId).attr('tdY'));

                    linkh = Math.abs(y2-y1)*20;

                    if (LinkType.substring(1,2) == 'S'){
                        var x2 = parseInt( $('#test_' + ChildTaskId).attr('tdX'));
                    }
                    else{
                        var x2 =  parseInt($('#test_' + ChildTaskId).attr('tdX') +  $('#test_' + ChildTaskId).attr('duration'));
                    };

                    if (x2 >= x1 + d) {
                        var linkl = (Math.abs(x1-x2)-d) * 37; // padding + divul
                        var marginl = parseInt($('#test_' + ParentTaskId).width()) + 3;
                        marginh = d*37 + linkl - 4;
                        margintop = -1;
                    }
                    else
                    {
                        var linkl = (Math.abs(x1 + d-x2)) * 37; // padding + divul
                        var marginl = -linkl + d*37 -4;
                        marginh = marginl;
                        margintop = -linkh - 1;
                    }

                    if (y2 > y1){
                        margintop = -1;
                        linkh = linkh - 15;
                    }
                    else{
                        margintop = -linkh - 1 - 15;
                        linkh = linkh +15;

                    }

                    var title = LinkType + ': ' + ParentTaskId + ' -> '+ ChildTaskId + ' Lag: ' + Lag;

                    var attributes = 'ParentTaskId = "'+ ParentTaskId + '" ChildTaskId="' + ChildTaskId + '" LinkType= "' + LinkType + '" Lag = "' + Lag + '" ';

                    $('#taskpanel_'+ ParentTaskId ).append('<div title = "' + title + '" ' + attributes +' class="orizontallink" id="ol_' + ParentTaskId + '" style="margin-left:' + marginl+ 'px; width:'+ linkl + 'px"></div>');
                    $('#taskpanel_'+ ParentTaskId ).append('<div title = "' + title + '" ' + attributes +' class="verticallink" id="vl_' + ParentTaskId + '" style="margin-left:' + marginh+ 'px; height:'+ linkh + 'px; margin-top:' + margintop + 'px"></div>');

                    //luam







                }

                //alertify.success('S-a gasit '+ ChildTaskId)
            }

        }

        }

        getlinks();

}


    // function GanttTaskedClicked(TaskId){
    //    // $("#tableTasks tbody tr").removeClass("activerow");
    //   //  $('#tableTasks tbody tr[taskid="' + TaskId +'"]').addClass('activerow');
    //   //  sessionStorage.setItem('LastTaskId', TaskId);
    //     return true;
    // }

    function ondeleteTask(TaskId){
        gTaskIdDelete = TaskId
        confirm("Do you want to delete the task?", deleteTask);
    };

    function deleteTask(){
        window.location.replace(OriginUrl + "/deleteTask/" + gTaskIdDelete + "");
    }

    function ondeleteTasks(){
        // verificare daca s-a selectat ceva
        if ( $('.SelectedTask').length == 0){

            alertify.error("You have to select at least one task!" );
            return;
        }
        confirm("Do you want to delete the selected tasks?", deleteTasks);
    };


    function deleteTasks(){

        $('tr.TaskTrList.SelectedTask').each(function(index,value){
            taskid = $(value).attr('TaskId');
            deleteTaskAjax(taskid);
        });

        RefreshTaskAjax();
    }


    function deleteTaskAjax(TaskId){

        $.ajax({
            type: 'POST',

            url: OriginUrl +'/ajaxdeleteGanttTask',
            data: {TaskId: TaskId},
            error: function (xhr, ajaxOptions, thrownError) {

            },
            success: function (data) {
                alertify.success('The task (' + TaskId + ') was deleted');
            }
        });
    };

    function onRescheduleTasks(){
        // verificare daca s-a selectat ceva
        if ( $('.SelectedTask').length == 0){

            alertify.error("You have to select at least one task!" );
            return;
        }
        confirm("Do you want to reschedule the selected tasks?", rescheduleTasks);
    };


    function rescheduleTasks(){

        $('tr.TaskTrList.SelectedTask').each(function(index,value){
            taskid = $(value).attr('TaskId');
            rescheduleTaskAjax(taskid);
        });

        RefreshTaskAjax();
    }

    function rescheduleTaskAjax(TaskId){

        var taskid = TaskId;
        var ganttid = $(".ganttcontainer").attr("ganttId");
        var startdate = $('.TaskTrList[taskid="' + taskid + '"]') .find('.col_StartD').text()
        var duration =  $('.TaskTrList[taskid="' + taskid + '"]') .attr('duration')

        var progress = 0;

        $.ajax({
            type: 'POST',

            url: OriginUrl +'/ajaxrescheduleGanttTask',
            data: {TaskId: taskid,  GanttId: ganttid,  StartDate: startdate, Duration: duration, Progress:progress},
            error: function (xhr, ajaxOptions, thrownError) {

            },
            success: function (data) {
                alertify.success('The task (' + TaskId + ') was rescheduled');
            }
        });
    };



    function RefreshTaskAjax(){

        var scrollLeft = $("#rightdiv").scrollLeft();
        var scrollTop = $("#rightdiv").scrollTop();
        var scrollLeftLeft =  $("#leftdiv").scrollLeft();
        var ganttid = $(".ganttcontainer").attr("ganttId");



        var FilterObject = null;
         if (getCookie('LastTaskFilter') != "")
             FilterObject = JSON.parse((getCookie('LastTaskFilter')));

        $.ajax({
            type: 'POST',

            url: OriginUrl +'/refreshTaskAjax',
            data: { FilterObject:FilterObject, GanttId : ganttid},
            error: function (xhr, ajaxOptions, thrownError) {


            },
            success: function (data) {
            $('#molgantt').html(data);

            InitializareGantt();
            InitGanttPosition(0);

            $("#rightdiv").scrollLeft(scrollLeft);
            $("#rightdiv").scrollTop(scrollTop);
            $("#leftdiv").scrollLeft(scrollLeftLeft);



            }
        });
    };



    function UpdateGanttTask(TaskId, DurationOffset, StartDateOffset, CalendarId, DataStart, OrigDuration){

        var scrollLeft = $("#rightdiv").scrollLeft();
        var scrollTop = $("#rightdiv").scrollTop();
        var scrollLeftLeft =  $("#leftdiv").scrollLeft();
        var ganttid = $(".ganttcontainer").attr("ganttId");



        var FilterObject = null;
         if (getCookie('LastTaskFilter') != "")
             FilterObject = JSON.parse((getCookie('LastTaskFilter')));

        $.ajax({
            type: 'POST',

            url:  OriginUrl +'/ajaxupdateGanttTask',
            data: {TaskId: TaskId, DurationOffset: DurationOffset, StartDateOffset: StartDateOffset, GanttId: ganttid, FilterObject:FilterObject, CalendarId :CalendarId, DataStart: DataStart,
                                OrigDuration:OrigDuration},
            error: function (xhr, ajaxOptions, thrownError) {


            },
            success: function (data) {
                $('#molgantt').html(data);

                InitializareGantt();
                InitGanttPosition(TaskId);

                $("#rightdiv").scrollLeft(scrollLeft);
                $("#rightdiv").scrollTop(scrollTop);
                $("#leftdiv").scrollLeft(scrollLeftLeft);



            }
        });
    };


    function GetProperty(classOrId,property){
        var FirstChar = classOrId.charAt(0);  var Remaining= classOrId.substring(1);
        var elem = (FirstChar =='#') ?  document.getElementById(Remaining) : document.getElementsByClassName(Remaining)[0];
        return window.getComputedStyle(elem,null).getPropertyValue(property);
    }

    function OnHoverLink(v){
        $(v).children('.link').removeClass("linkhidden")

    }

    function OnExitHoverLink(v){
        if (!IsDownLink){
            $(v).children('.link').addClass("linkhidden")
        }
        else{
            $('.link').removeClass("linkhidden");
        }
    }

    function OnHoverLinkButton(v){
        if (IsDownLink){
            $(v).addClass("linkover");
            IsOverLink = true;
        }
    }

    function OnExitHoverLinkButton(v){
        $(v).removeClass("linkover");
        IsOverLink = false;
    }


    function InitGanttPosition(TaskId = null){


        $(".tabWrap").css("height",$(".ganttcontainer").height() - 160  );
        $("#middlediv").css("height",$("#molgantt").height() );


       if (getCookie('ganttmiddleleft') != "")
           $("#middlediv" ).css('margin-Left', JSON.parse(getCookie('ganttmiddleleft')));

       if (getCookie('ganttlcontwidth') != ""){
           $("#lcont").css('width', JSON.parse(getCookie('ganttlcontwidth')));
           $("#leftdiv").css('width', JSON.parse(getCookie('ganttlcontwidth')));
       }



        $(".col_Task").each(function (){$(this).css('padding-Left', Number($(this).attr("tasklevel")) * 10 + 'px')});




        $(".taskspan").each(function (){
            $(this).css('margin-Left',  Number($(this).parent().children('.rightdiv').css("margin-left").replace('px', '')) + 10 + 'px');
        });

        $('#rcont').css('width',  Number($('#molgantt').width()) - Number($('#leftdiv').width()) + 5);
        $('#rcont').children('div').css('width',  Number($('#molgantt').width()) - Number($('#leftdiv').width()) + 5);



        setTimeout(function() {
            $('#rcont').css('width',  Number($('#molgantt').width()) - Number($('#leftdiv').width()) + 5);
            $('#rcont').children('div').css('width',  Number($('#molgantt').width()) - Number($('#leftdiv').width()) + 5);
        }, 0);


        if (TaskId != null)
            TaskSelect(null, TaskId);


    }


    function TaskSelect(event, TaskId){

        if ((event == null) || (!IsCtr) ){
            $(".TaskTr").removeClass('SelectedTask');
            $(".TaskTR_" + TaskId).addClass('SelectedTask');
        }
        else{


            if ($(".TaskTR_" + TaskId).hasClass('SelectedTask'))
                $(".TaskTR_" + TaskId).removeClass('SelectedTask');
            else
                $(".TaskTR_" + TaskId).addClass('SelectedTask');
        }


    }

    function TaskDone(){
        var taskid = gTaskIdDone;
        var ganttid = $(".ganttcontainer").attr("ganttId");


        var scrollLeft = $("#rightdiv").scrollLeft();
        var scrollTop = $("#rightdiv").scrollTop();
        var scrollLeftLeft =  $("#leftdiv").scrollLeft();


        var FilterObject = null;
         if (getCookie('LastTaskFilter') != "")
             FilterObject = JSON.parse((getCookie('LastTaskFilter')));

        $.ajax({
            type: 'POST',

            url:  OriginUrl +'/ajaxtaskDone',
            data: {TaskId: taskid,  GanttId: ganttid, FilterObject:FilterObject},
            error: function (xhr, ajaxOptions, thrownError) {

            },
            success: function (data) {
               // ClickFiltreazaTaskuri();
                $('#molgantt').html(data);

                InitializareGantt();
                InitGanttPosition(taskid);

                $("#rightdiv").scrollLeft(scrollLeft);
                $("#rightdiv").scrollTop(scrollTop);
                $("#leftdiv").scrollLeft(scrollLeftLeft);



            }
        });
    }

    function TaskReschedule(){
        var taskid = gTaskIdDone;
        var ganttid = $(".ganttcontainer").attr("ganttId");
        var startdate = $('.TaskTrList[taskid="' + taskid + '"]') .find('.col_StartD').text()
        var duration =  $('.TaskTrList[taskid="' + taskid + '"]') .attr('duration')

        var progress = 0;


        var scrollLeft = $("#rightdiv").scrollLeft();
        var scrollTop = $("#rightdiv").scrollTop();
        var scrollLeftLeft =  $("#leftdiv").scrollLeft();


        var FilterObject = null;
         if (getCookie('LastTaskFilter') != "")
             FilterObject = JSON.parse((getCookie('LastTaskFilter')));

        $.ajax({
            type: 'POST',

            url: OriginUrl +'/rescheduleTaskAjax',
            data: {TaskId: taskid,  GanttId: ganttid, FilterObject: FilterObject, StartDate: startdate, Duration: duration, Progress:progress},
            error: function (xhr, ajaxOptions, thrownError) {

            },
            success: function (data) {
               // ClickFiltreazaTaskuri();
                $('#molgantt').html(data);

                InitializareGantt();
                InitGanttPosition(taskid);

                $("#rightdiv").scrollLeft(scrollLeft);
                $("#rightdiv").scrollTop(scrollTop);
                $("#leftdiv").scrollLeft(scrollLeftLeft);



            }
        });
    }


    function TaskUnschedule(){
        var taskid = gTaskIdDone;
        var ganttid = $(".ganttcontainer").attr("ganttId");
        var startdate = $('.TaskTrList[taskid="' + taskid + '"]') .find('.col_StartD').text()
        var duration =  $('.TaskTrList[taskid="' + taskid + '"]') .attr('duration')

        var progress = 0;


        var scrollLeft = $("#rightdiv").scrollLeft();
        var scrollTop = $("#rightdiv").scrollTop();
        var scrollLeftLeft =  $("#leftdiv").scrollLeft();


        var FilterObject = null;
         if (getCookie('LastTaskFilter') != "")
             FilterObject = JSON.parse((getCookie('LastTaskFilter')));

        $.ajax({
            type: 'POST',

            url: OriginUrl +'/unscheduleTaskAjax',
            data: {TaskId: taskid,  GanttId: ganttid, FilterObject: FilterObject, StartDate: startdate, Duration: duration, Progress:progress},
            error: function (xhr, ajaxOptions, thrownError) {

            },
            success: function (data) {
               // ClickFiltreazaTaskuri();
                $('#molgantt').html(data);

                InitializareGantt();
                InitGanttPosition(taskid);

                $("#rightdiv").scrollLeft(scrollLeft);
                $("#rightdiv").scrollTop(scrollTop);
                $("#leftdiv").scrollLeft(scrollLeftLeft);



            }
        });
    }


    function RightClickTask(e){
        var taskid =  $(e).attr('taskid')
        gTaskIdDone = taskid;

        var Status =  $('.TaskTrList[taskid="' + taskid + '"]') .find('.col_Status').text()

        $('#tooltip_Id').text (
            taskid

        );
        $('#tooltip_Task').text (
            $('.TaskTrList[taskid="' + taskid + '"]') .find('.col_Task').text()

       );

       $('#tooltip_Duration').text (
        $('.TaskTrList[taskid="' + taskid + '"]') .attr('Duration')
        );


       $('#tooltip_Priority').text (
        $('.TaskTrList[taskid="' + taskid + '"]') .find('.col_Priority').text()
        );

        $('#tooltip_Project').text (
            $('.TaskTrList[taskid="' + taskid + '"]') .find('.col_Project').text()
            );



        $('#button_Done').click(function(){

                confirm('Do you want to set the task as done?',  TaskDone);
                $('#tooltip').invisible();
            }
        );

        $('#button_Reshedule').click(function(){

                confirm('Do you want to reschedule the task?',  TaskReschedule);
                $('#tooltip').invisible();
            }
        );

        $('#button_Unschedule').click(function(){

            confirm('Do you want to Unschedule the task (Status defined)?',  TaskUnschedule);
            $('#tooltip').invisible();
        }
    );



        $('#button_Close').click(function(){
                $('#tooltip').invisible();
            }
        );

        if (Status == 'Scheduled'){
            $('#button_Done').show();
            $('#button_Reshedule').show();
            $('#button_Unschedule').show();
        }
        else  {
            $('#button_Done').hide();
            $('#button_Reshedule').hide();
            $('#button_Unschedule').hide();
        }

        $('#tooltip').css('top', MouseY)
        if (MouseX > $(document).width() - $('#tooltip').width())
            $('#tooltip').css('left', MouseX - $('#tooltip').width())
        else
            $('#tooltip').css('left', MouseX);

        IsToolTip = true;
        TaskSelect(null, taskid);

        $('#tooltip').visible();

    }

    function RightClickLink(e){
        var ParentTaskId =  $(e).attr('ParentTaskId')
        var ChildTaskId =  $(e).attr('ChildTaskId')
        var Lag =  $(e).attr('Lag')
        var LinkType =  $(e).attr('LinkType')



        $('#tooltip_Parent').text (
            ParentTaskId

        );
        $('#tooltip_Child').text (
            ChildTaskId

        );
        $('#tooltip_Lag').text (
            Lag

        );
        $('#tooltip_Type').text (
            LinkType

        );



        $('#button_DeleteLink').click(function(){

                confirm('Do you want to delete the link?',  LinkDelete);
                $('#tooltiplink').invisible();
            }
        );



        $('#button_CloseLink').click(function(){
                $('#tooltiplink').invisible();
            }
        );


        $('#tooltiplink').css('top', MouseY)
        if (MouseX > $(document).width() - $('#tooltiplink').width())
            $('#tooltiplink').css('left', MouseX - $('#tooltiplink').width())
        else
            $('#tooltiplink').css('left', MouseX);

        IsToolTipLink = true;

        $('#tooltiplink').visible();

    }


    $(document).ready(function() {

        var origswitchLeft = switchLeft;

        switchLeft = function() {

            origswitchLeft();

            $('#rcont').css('width',  Number($('#molgantt').width()) - Number($('#leftdiv').width()) + 5);
            $('#rcont').children('div').css('width',  Number($('#molgantt').width()) - Number($('#leftdiv').width()) + 5);
        };

        InitializareGantt();
        InitGanttPosition();


    });


    document.onmousemove = handleMouseMove;

    document.onmousedown = handleMouseDown;


    function handleMouseMove(event) {
       
        MouseX = event.pageX;
        MouseY = event.pageY;
        // if ($('#tooltip').is(":visible")){
        //     $('#tooltip').css('top', MouseY);
        //     $('#tooltip').css('left', MouseX);
        // }
    }

    function handleMouseDown(event) {
        MouseX = event.pageX;
        MouseY = event.pageY;

        IsCtr = event.ctrlKey;
        // daca vrem sa se inchida la orice click

          if ($('#tooltip').is(":visible") && (!IsToolTip) && ($(event.target).closest(".tlp").length == 0))
             $('#tooltip').invisible(); 
          
          if ($('#tooltiplink').is(":visible") && (!IsToolTipLink) && ($(event.target).closest(".tlp").length == 0))
                 $('#tooltiplink').invisible();     
           
             
         
        IsToolTip = false;
        IsToolTipLink = false;
    }

