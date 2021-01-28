
 
        //------------------------------


        
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });
        
        var gTaskIdDelete = 0;
        var gCommentId = 0;


        function OnRefreshMaster(data){
			loadGantt();
		}

        function ClickFiltreazaTaskuri(){


            var projectid = $('#projectid').val();
            var thefilter = 'Filter=';
           
            var selecthtml =  $("#activefilter").html();

            $("#activefilter option").each(function()
            {
                thefilter =  thefilter + $(this).val() + ','
                 
            });
            
            var d = new Date();
            d.setTime(d.getTime() + (1000 * 24 * 60 * 60 * 1000));
            var expires = "expires="+d.toUTCString();


            var FilterObject = {'projectid':projectid, 'filter':thefilter};

            createCookie('LastTaskFilter', JSON.stringify(FilterObject), 1000 );


            createCookie('LastFilterSelect', JSON.stringify(selecthtml), 1000 );
            

          
            // ascundem filtrarea la refresh
            sessionStorage.setItem('ShowTaskFilter', false);

            if (projectid == ""){
                window.location.replace(OriginUrl +'/mytasks?'+ thefilter);
            }
            else{
                window.location.replace(OriginUrl + '/mytasks/' + projectid + '?' + thefilter);
            }

           
        }

        
        function SaveFilter(){
        	 var thefilter = '';
             
             var selecthtml = '';

             $("#activefilter option").each(function()
             {
                 thefilter =  thefilter + $(this).val() + ';';
                 selecthtml = selecthtml + $(this).text()+ ';';
                  
             });
             
             $.ajax({
                 type: 'POST',

                 url: OriginUrl +'/ajaxsavetaskfilter',
                 data: {thefilter: thefilter, name:selecthtml},
                 error: function (xhr, ajaxOptions, thrownError) {

                     
                 },
                 success: function (data) {
                	 alertify.success("Saved the filter");


                 }
             });             

        	
        }
        
        
        function ClickFiltreazaTaskuriSaved(){

        	if ($('#savedfilters option:selected').val() != ''){
        		
	            
	            // stergem filtrul curent
	            
	            $("#activefilter option").each(function() {
	                $(this).remove();
	            });
	            
	
	            // adaugam din filtrul ales
	            
	
	            var text = $('#savedfilters  option:selected').text().split(';');
	            var val = $('#savedfilters  option:selected').val().split(';');
	            
	            
	            
	            for(i = 0; i < text.length; i++){
	            
	            	if (val[i] != ''){
		            	var o = new Option(text[i].trim(), val[i]);
		                $(o).html(text[i].trim());
		                $("#activefilter").append(o);
	            	}
	            	
	            }
        	}
               
            
            
            ClickFiltreazaTaskuri();
           
        }

        


         function ReaduceTask(TaskId){
            if (gTaskId == 0)
                return; 

            var TaskId = gTaskId;
            gTaskId = 0;

            $.ajax({
                type: 'POST',

                url: OriginUrl +'/ajaxgettask',
                data: {TaskId: TaskId},
                error: function (xhr, ajaxOptions, thrownError) {

                    
                },
                success: function (data) {
                   $("#tableTasks tbody tr").removeClass("activerow");
                   try{
                        gantt.selectTask(TaskId);
                   }
                   catch(e){}
                   $('tr[taskid="' + TaskId +'"]').replaceWith(data);
                   
                   $( "#tableTasks tbody tr" ).dblclick(function() {
                        var trid = $(this).closest('tr').attr('taskid');
                        viewtask(trid);
                        
                    });


                }
            });
         };


         // ------------  task modal scripts -------------------


        function ValidariConfirmare() {

            var taskdeptypeid = $("select[id=lktaskdeptype]").val();
            var parenttaskid = $("select[id=lktask]").val();

            if (parenttaskid == "")  {
                MyAlert('Choose the parent task!', true);
                return true;
            }

            if (taskdeptypeid == "")  {
                MyAlert('Choose the dependency type!', true);
                return true;
            }

            return false;

        };

        function onreset(){
            $('#deptable tr.newtr').remove();   
            $('#deptable tr').show();
        }

        function deletedependency($parenttaskid){
            $('#deptable tr#tr'+ $parenttaskid + '.newtr').remove();
            $('#deptable tr#tr'+ $parenttaskid + ':not(.newtr)').hide();
            $('#deptable tr#tr'+ $parenttaskid + ':not(.newtr) :input').attr("disabled", true);
            $("#theform").data("changed", true);

           
        }

        //------------------------------------------

       function  ShowAddDependency(){

           $('#divadddep').show();

           

       }


        function AddDependency(event) {

            if (ValidariConfirmare()) {
                return;
            }

            var taskdeptypeid = $("select[id=lktaskdeptype]").val();
            var taskdeptype = $("select[id=lktaskdeptype] option:selected").text();
            var parenttaskid = $("select[id=lktask]").val();
            var parenttaskname = $("select[id=lktask] option:selected").text();
            var lag = $("#lkLag").val();

            if ($('#deptable tr#tr'+ parenttaskid).exists()){
                MyAlert('This dependency is already choosen!');
                return;
            }
            $('#deprow').css("display", "");

            $('#deptable tr:last').after(
                "<tr class='newtr'id='tr" + parenttaskid + "'><td><input hidden id='parenttask' name='parenttask[]' value= '" + parenttaskid + "'/>" + parenttaskname + "</td>" + 
                "<td><input hidden id='dependencytype' name='dependencytype[]' value= '" + taskdeptypeid + "'/>" + taskdeptype + "</td>" +
                "<td><input hidden id='lag' name='lag[]' value= '" + lag + "'/>" + lag + "</td>" +
                "<td><a href='#' onclick='deletedependency(" + parenttaskid + ")'>delete</a></td>" +
                "</tr>"

            );
            
            $("#theform").data("changed", true);


        };

         //=====================================================

        function newtask(taskid, vprojectid){
           

           var projectid = $('#projectid').val();
           if (typeof projectid === 'undefined'){
               projectid = vprojectid;
           }

           $.ajax({
                type: 'POST',

                url: OriginUrl +'/newtaskajax',
                data: {ProjectId: projectid, TaskId:taskid},
                error: function (xhr, ajaxOptions, thrownError) {

                    
                },
                success: function (data) {
                  
                    $('#taskmodalajax').html(data);
  
                    $('#modaltask').modal({
                                backdrop: 'static',
                                keyboard: false});
                        
                    $( ".calcshedule" ).on('change', CalculScheldule);
                    $('#theform').trackChanges();
                    scheduleCheck();
                    $('form').parsley();

                    DoTaskTypeControls();
                }
            });
            
        }

        function newtasksmultiple(taskid, vprojectid){
           

            var projectid = $('#projectid').val();
            if (typeof projectid === 'undefined'){
                projectid = vprojectid;
            }

            $("#multipletaskname").val("");
            $("#multipletaskid").val(taskid);
            $("#multipleprojectid").val(projectid);
            
            $("#theformmultiple").data("changed", false);
            $('#theformmultiple').trackChanges();
            $('#modaltaskmultiple').modal({
                backdrop: 'static',
                keyboard: false});

             
         }

        function viewtask(taskid){
            
            

            $.ajax({
                type: 'POST',

                url: OriginUrl +'/edittaskajax',
                data: {TaskId: taskid},
                error: function (xhr, ajaxOptions, thrownError) {
                },
                success: function (data) {
                
                    $('#taskmodalajax').html(data);
                    
                    $('#modaltask').modal({
                                backdrop: 'static',
                                keyboard: false});
                   
                    $( ".calcshedule" ).on('change', CalculScheldule);   

                    $('#theform').trackChanges();
                    scheduleCheck();
                    DoTaskTypeControls();
                    getTaskComments(taskid);      
                    getTaskNotes(taskid)              ;
                    $('form').parsley();
                }
            });
        }


        function AddFilter(){
            var filterfield = $("select[id=filterfields]").val();
            var filterfieldText = $("select[id=filterfields] option:selected").text();
            var filterfieldVal = $("select[id=filterfields] option:selected").attr("field");

            var val = $("#" + filterfield + ' select').val();
            var valV = $("#" + filterfield + ' select option:selected').text();
            var op =  $("#operator").val();
            var filter = filterfieldVal + " " + op +  " "  +val
            var filterV = filterfieldText + " " + op +  " "  +valV
            

            if (val != ""){
                $('#activefilter').append($('<option>', {
                    value: filter,
                    text: filterV
                }));
            }
        }

       


        function FilterFieldChange(){
            $(".filterrow").hide(); 
            var filterfield = $("select[id=filterfields]").val();
            $("#" + filterfield).show(); 
        }

       function Swithfilter(){
            $(".morefilter").toggle();
            sessionStorage.ShowTaskFilter =  $(".morefilter").is(':visible');
            if ($(".morefilter").is(':visible'))
                $('#afilter').text("Hide filters")
            else
                $('#afilter').text("Show filters")
       }

       
       function SwithfilterNew(){
           $("#newfilter").toggle();
         

      }

      function SwithDetails(){
            $(".taskdetails").toggle();
            sessionStorage.ShowTaskDetails =  $(".taskdetails").is(':visible');
            if ($(".taskdetails").is(':visible'))
                $('#taskdetails').text("Hide details")
            else
                $('#taskdetails').text("Show details")
       }                 
           
       function UploadFile(event) {
                       
                        var formData = new FormData($('#example-form')[0]);
                        formData.append("taskid", $('#taskid').val());
                        formData.append("Descriere", $('#Descriere').val());
                        $.ajax({
                            url: OriginUrl +'/uploadtaskfile',
                            type: 'POST',              
                            data: formData,
                            contentType: false,
                            processData: false,
                            success:function(data){
                                getTaskAttachments($('#taskid').val());
                                $('#upload').toggle();
                                $('#thefile').val("");
                                $('#Descriere').val("");
                                

                            },
                            error: function(data)
                            {
                                console.log(data);
                            }
                        });

                    }


        // note din task



        function getTaskNotes(taskid){
            $.ajax({
                type: 'POST',

                url: OriginUrl +'/gettasknotesajax',
                data: {taskid: taskid},
                error: function (xhr, ajaxOptions, thrownError) {
                },
                success: function (data) {
                
                    $('#divnotestable').html(data);
                    
                }
            });
        }

        function addNote(){
            $('#modaltasknota #text').val("");
            $('#modaltasknota #tags').val("");
            $('#modaltasknota #noteid').val("");
            $('#modaltasknota #title').val("");
            $('#modaltasknota #islink').prop('checked', false);  

            $('#modaltasknota').modal();
        }

        function viewNote(noteid, text, tags, title, islink){
            $('#modaltasknota #text').val(text);
            $('#modaltasknota #tags').val(tags);
            $('#modaltasknota #noteid').val(noteid);
            $('#modaltasknota #title').val(title);
            if (islink == 1)
                $('#modaltasknota #islink').prop('checked', true);    
            else                       
                $('#modaltasknota #islink').prop('checked', false);    

            $('#modaltasknota').modal();
        }

      

         function SaveNoteAjax() {

                            
            var text =  $('#modaltasknota #text').val();
            var tags = $('#modaltasknota #tags').val();

            var noteid = $('#modaltasknota #noteid').val();
            var taskid = $('#taskid').val();

            var title = $('#modaltasknota #title').val();
            var islink = 0;

            if ($('#modaltasknota #islink').prop('checked'))
                var islink = 1;
                


            if (text == ""){
                if (title == ''){
                    alert("Enter a text!");
                    return;
                }
                else 
                    text = title;

                return;
            }

            if (title == ""){
                if (text == ''){
                    alert("Enter a title!");
                    return;
                }
                else 
                    title = text;
                    
                
            }


            $.ajax({
                type: 'POST',

                url: OriginUrl +'/ajaxsavetasknote',
                data: {noteid: noteid, text: text, tags: tags, taskid:taskid, title:title, islink:islink},
                error: function (xhr, ajaxOptions, thrownError) {

                    
                },
                success: function (data) {
                    $('#modaltasknota').modal('hide');
                    getTaskNotes(taskid);

                }
            });
            }


        function ondeleteNote(NoteId){
            gNoteId = NoteId;
            
            confirm("Do you want to delete the note?", deleteNote);
        };


        

        function deleteNote(){
                var noteid = gNoteId;
                var taskid = $('#taskid').val();
                $.ajax({
                    type: 'POST',

                    url: OriginUrl +'/ajaxdeletenote',
                    data: {noteid: noteid},
                    error: function (xhr, ajaxOptions, thrownError) {
                        
                    },
                    success: function (data) {
                        getTaskNotes(taskid);

                    }
                });
        }

        function addComment(){
            $('#modaltaskcomment #text').val("");
            $('#modaltaskcomment #commentid').val("");
            $('#modaltaskcomment').modal();
        }

        function SaveCommentAjax() {
                  
            var text =  $('#modaltaskcomment #text').val();
            var commentid = $('#modaltaskcomment #commentid').val();
            var taskid = $('#taskid').val();
          
            if (text == ""){
                if (text == ''){
                    alert("Enter a comment!");
                    return;
                }
            }


            $.ajax({
                type: 'POST',

                url: OriginUrl +'/ajaxsavetaskcomment',
                data: {commentid: commentid, text: text, taskid: taskid},
                error: function (xhr, ajaxOptions, thrownError) {

                    
                },
                success: function (data) {
                    $('#modaltaskcomment').modal('hide');
                    getTaskComments(taskid);

                }
            });
            }

        function viewComment(CommentId){
                var text =  $('#commenttext_' + CommentId).text();
                $('#modaltaskcomment #text').val(text);
                $('#modaltaskcomment #commentid').val(CommentId);
          
    
                $('#modaltaskcomment').modal();
            }


        function ondeleteComment(CommentId){
            gCommentId = CommentId;
            confirm("Do you want to delete the comment?", deleteComment);
        }


        function deleteComment(){
            var taskid = $('#taskid').val();
            $.ajax({
                type: 'POST',

                url: OriginUrl +'/ajaxdeletecomment',
                data: {commentid: gCommentId},
                error: function (xhr, ajaxOptions, thrownError) {
                    
                },
                success: function (data) {
                    getTaskComments(taskid);

                }
            });
        }

        function AddAttacment(){
            $('#upload').toggle();
        }

        var gattachmentid = 0;

        function deleteattachment(attachmentid){
           gattachmentid = attachmentid;
            
           confirm("Do you want to delete the attachment?", dodeleteattachment);
            
        }

        function dodeleteattachment(){
            var attachmentid = gattachmentid;
            var taskid = $('#taskid').val();

                $.ajax({
                    type: 'POST',

                    url: OriginUrl +'/ajaxdeleteattachment',
                    data: {attachmentid: attachmentid},
                    error: function (xhr, ajaxOptions, thrownError) {
                        
                    },
                    success: function (data) {
                        getTaskAttachments(taskid);

                    }
                });
        };

        function getTaskAttachments(taskid){
            $.ajax({
                type: 'POST',

                url: OriginUrl +'/gettaskattachmentsajax',
                data: {taskid: taskid},
                error: function (xhr, ajaxOptions, thrownError) {

                    
                },
                success: function (data) {
                
                    $('#divattachmentstable').html(data);
                    
                        
                    
                }
            });
        }


       
        function CalculScheldule(event){
            var units = 1;
            var work = 1;
            var multiplier = 1;
            var Initiator = event.target.name;

            var durationS = $('#duration').val();
           
            var duration = durationS.replace(/[^0-9.]/, "");
                    
            var mchar = durationS.replace(/[0-9.]/, "");

            switch (mchar){
                case "h":
                case "H":
                    multiplier = 1/8;
                    break;
                case "w":
                case "W":
                    multiplier = 7;
            }

            duration = duration * multiplier;

            units = $('#units').val();
            work = $('#work').val();

            var durationtypecode =  $('option:selected', '#durationtypeId').attr('code');
            

            switch(Initiator){
                case 'duration':
                    switch(durationtypecode){   
                        case 'FD':
                            $('#work').val(duration * units);
                           break;
                       case 'FU':
                            $('#work').val(duration * units);
                           break;
                       case 'FW':
                            $('#units').val(work/duration);
                           break;  
                        }
                    CalcPerioada();
                   break;         
                        

                    

                case 'units':
                   
                   switch(durationtypecode){
                       case 'FD':
                            $('#work').val(duration * units);
                           break;
                       case 'FU':
                            $('#work').val(duration * units);
                           break;
                       case 'FW':
                            $('#duration').val(work/units);
                           break;    

                   }
                   CalcPerioada();
                   break;    
                                    
                case 'work':
                   
                   switch(durationtypecode){
                       case 'FD':
                            $('#units').val(work/duration);
                           break;
                       case 'FU':
                            $('#duration').val(work/units);
                           break;
                       case 'FW':
                            $('#duration').val(work/units);
                           break;    

                   }
                   CalcPerioada();
                   break;

                case 'startdate':
                    CalcPerioada('SD');

                    break;
                
                case 'enddate':
                    CalcPerioada('ED');

                    break;
            }
        }

        function CalcPerioada(Tip = ''){
            var multiplier = 1;
            var autosch = $('#autoschedule').is(':checked');
            var durationS = $('#duration').val();
           
            var duration = durationS.replace(/[^0-9.]/, "");
                        
            var mchar = durationS.replace(/[0-9.]/, "");

            if (!autosch){
                switch (mchar){
                    case "h":
                    case "H":
                        multiplier = 1/8;
                        break;
                    case "w":
                    case "W":
                        multiplier = 7;
                }
    
                duration = duration * multiplier;

                if (Tip != 'ED'){
                    var StartDate = new Date($('#startdate').val());
                    var CalendarId = $('#calendarid').val();

                    var date = pad(StartDate.getDate(), 2);
                    var month = pad(StartDate.getMonth() + 1, 2); //Be careful! January is 0 not 1
                    var year = StartDate.getFullYear();

                    var dateString = year +month + date ;
                    


                    $.ajax({
                        type: 'POST',
        
                        url:  OriginUrl +'/getenddate',
                        data: {StartDate: dateString, Duration: duration, CalendarId:CalendarId},
                        error: function (xhr, ajaxOptions, thrownError) {
                            
                        },
                        success: function (data) {
                            try {
                                $('#enddate').val(data[0].EndDate);
                            } catch (error) {
                                // se poate sa nu existe enddate din cauza ca nu exista begin date
                            }
                            
                        }
                    });
                }
                else{
                    var EndDate = new Date($('#enddate').val());
                    var StartDate = new Date(EndDate.valueOf() - (duration - 1) * 1000 * 60 * 60 * 24);

                    var date = pad(StartDate.getDate(), 2);
                    var month = pad(StartDate.getMonth() + 1, 2); //Be careful! January is 0 not 1
                    var year = StartDate.getFullYear();

                    var dateString = year + "-" +month + "-" + date ;

                    $('#startdate').val(dateString);                    
                }



            }
        }


        function pad(num, size) {
            var s = num + "";
            while (s.length < size) s = "0" + s;
            return s;
        }

        function scheduleCheck(){
            if ($('#autoschedule').is(':checked'))
                $('#schedulediv').show()
            else
                $('#schedulediv').hide()
        }

        function DoTaskTypeControls(){
            var tasktype = $("select[id=tasktypeid] option:selected").text();

            if ( tasktype == 'Work'){
                $('.ttWork').show();
                $('.ttWork.requirable :input').attr('required', true);
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
                    
                    //$('.ttToDo.requirable :input').attr('required', true);
                }
                


            }
        }

        function OnTaskTypeChanged(){
            DoTaskTypeControls();
            var tasktype = $("select[id=tasktypeid] option:selected").text();

            if ( tasktype == 'ToDo'){
                $("select[id=taskstatusid] option[value=2]").attr('selected', 'selected');
            }

            
        }


        function getTaskComments(taskid){
            $.ajax({
                type: 'POST',

                url:  OriginUrl +'/gettaskComments',
                data: {taskid: taskid},
                error: function (xhr, ajaxOptions, thrownError) {

                    
                },
                success: function (data) {
                
                    $('#divcommentstable').html(data);
                    
                        
                    
                }
            });
            
        }

//	---------------------------------------------
 
     