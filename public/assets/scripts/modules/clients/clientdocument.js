

		 var source ;

		 var DocumentType = '';

 		 var moduleUrl = '';

        function goDetail(){
           // get detail - if nothing in list then add a new registration

        	var rowindex = $('#documentlist').jqxGrid('getselectedrowindex');
        	if (rowindex == -1){
        		ShowError('Selectati o oferta!');
        		return;
        	}
        	if (!$('#documentlist').jqxGrid('getrowdata', rowindex)){
				ShowError('Selectati o oferta!');
				return;
			}

            GetDetailAjax(rowindex);
            doDetail();


        };


        function goList() {
           // check if the detail is modified end prevent to change to list

			if ( $("#clientdocumentform").isChanged() ){
                confirm("Nu ati salvat modificarile! Doriti sa continuati?", doList);

            }
			else
				doList()

        };


		function doMain(){
			$('.mol-tab').removeClass("noactive ");
			$('#detail_others').addClass("noactive ");
			
			$('#tab-00').addClass("active ");
			$('#tab-01').removeClass("active ");

			
			

        }

        function doMore(){
        	$('.mol-tab').removeClass("noactive ");
			$('#clientdocumentdetail').addClass("noactive ");
			

			$('#tab-01').addClass("active ");
			$('#tab-00').removeClass("active ");
			

        }
        function doList(){
			$('.mol-nav-link').removeClass("active ");
			$('#tab-0').addClass("active ");

			$('.mol-tab-pane').removeClass("active ");
			$('#tab-list').addClass("active ");
			$("#clientdocumentform")[0].reset();

			$('.justlist').removeClass("invisible");
			$('.justdetail').addClass("invisible");
			$("#clientdocumentform").resetChanges();

        }

        function doDetail(){
        	$('.mol-nav-link').removeClass("active ");
			$('#tab-1').addClass("active ");

			$('.mol-tab-pane').removeClass("active ");
			$('#tab-detail').addClass("active ");

			$('.justlist').addClass("invisible	");
			$('.justdetail').removeClass("invisible");

			$( "#clientdocumentform" ).removeValidator();

        }

        function addNewdocument(){
        	if ( $("#clientdocumentform").isChanged() ){
                confirm("Nu ati salvat modificarile! Doriti sa continuati?", doNew);
            }else
            	doNew();
        }


        function doNew(){
        	doDetail();
	       	 $("#clientdocumentform").data("changed", false);
	       	 $("#clientdocumentform")[0].reset();

	       	 // scoatem versiunile si atasamentele

	       	$('#versiondetail').html("");
            $('#attachdiv').html("");
            $('#ul-actions').html("");
            $('#relateddocuments').html("");
        }

        function clientdocumentSubmit(){

            $("#clientdocumentform").data("changed", false);
            SaveClientdocument()


        };


		function clientdocumentCancel(){
			$("#clientdocumentform").data("changed", false);
			CancelClientdocument();
		};

		function GetDetailAjax(rowindex){
				if (rowindex == -1){
					ShowError('Selectati un document!');
					return;
				}


				if (!$('#documentlist').jqxGrid('getrowdata', rowindex)){
					ShowError('Selectati un document!');
					return;
				}

				var DocumentId = $('#documentlist').jqxGrid('getrowdata', rowindex).DocumentId;


			        $('#tab-detail').block({
			        	message:null
			        });

				 $.ajax({
			            type: 'POST',

			            url: moduleUrl + '/ajaxgetclientdocument',
			            data: {DocumentId: DocumentId},


			            success: function (data) {
				            $('#date').val(data[0][0].DocumentDate);
				            $('#number').val(data[0][0].DocumentNumber);
				            $('#clientdocumentid').val(data[0][0].DocumentId);
				            $('#state').val(data[0][0].State);
				            $('#version').val(data[0][0].Version);
				            $('#customer').val(data[0][0].OrganizationId);
				            $("#description" ).val(data[0][0].Description);

				            $('#versiondetail').html(data[1]);
				            $('#attachdiv').html(data[2]);
				            $('#ul-actions').html(data[3]);
				            $('#relateddocuments').html(data[4]);

				            $("#clientdocumentform" ).removeValidator();
				            $('#tab-detail').unblock();
			            },
			            error: function(data){
			            	$('#tab-detail').unblock();
			            }
			        });

			}


			function CancelClientdocument(){

				var DocumentId = $('#clientdocumentid').val();
				if (DocumentId == ""){
					$("#clientdocumentform")[0].reset();
					$("#clientdocumentform").resetChanges();
					$("#clientdocumentform").removeValidator();
					return
				}

				 $.ajax({
			            type: 'POST',

			            url: moduleUrl + '/ajaxgetclientdocument',
			            data: {DocumentId: DocumentId},


			            success: function (data) {
				            $('#date').val(data[0][0].DocumentDate);
				            $('#number').val(data[0][0].DocumentNumber);
				            $('#clientdocumentid').val(data[0][0].DocumentId);
				            $('#state').val(data[0][0].State);
				            $('#version').val(data[0][0].Version);
				            $('#customer').val(data[0][0].OrganizationId);
				            $("#description" ).val(data[0][0].Description);

				            $('#versiondetail').html(data[1]);


				            $("#clientdocumentform").resetChanges();
				            $( "#clientdocumentform" ).removeValidator();
				            ShowSuccess('Refreshed the document');
			            }
			        });
			}



			function ChangeState(type, NextDocumentTypeId, NextDocumentStateId){
				var DocumentId = $('#clientdocumentid').val();
				var Description = $("#description" ).val();
				var Comment = $("#confirminput" ).val();
				var CustomerId = $('#customer').val();


				$.ajax({
		            type: 'POST',

		            url: moduleUrl + '/ajaxschangeclientdocument',
		            data: {DocumentId: DocumentId, State: type, Description:Description, Comment:Comment,
		            			CustomerId: CustomerId, NextDocumentTypeId: NextDocumentTypeId, NextDocumentStateId:NextDocumentStateId},


		            success: function (data) {
		            	ShowSuccess('Modificat cu succes!');

		            	$('#date').val(data[0][0].DocumentDate);
			            $('#number').val(data[0][0].DocumentNumber);
			            $('#clientdocumentid').val(data[0][0].DocumentId);
			            $('#state').val(data[0][0].State);
			            $('#version').val(data[0][0].Version);
			            $('#customer').val(data[0][0].OrganizationId);
			            $("#description" ).val(data[0][0].Description);

			            $('#versiondetail').html(data[1]);
			            $('#ul-actions').html(data[3]);
                        $('#relateddocuments').html(data[4]);



			    		Refreshdocuments('')
			    		$("#clientdocumentform").resetChanges();
			    		$( "#clientdocumentform" ).removeValidator();



		            }
		        });

			}


			function DoAction(type, NextDocumentTypeId, NextDocumentStateId){


				function DoIt(){
					ChangeState(type, NextDocumentTypeId, NextDocumentStateId);
				}


				if ( $("#clientdocumentform").isChanged() ){
					ShowError('Salvati documentul!')
					return;
				}

				confirm("Doriti sa modificati documentul?", DoIt, true);

			}



			function DeleteDocument(){
				function DoIt(){


					var DocumentId = $('#clientdocumentid').val();



					 $.ajax({
				            type: 'POST',

				            url: baseUrl + '/ajaxdeletedocument',
				            data: {DocumentId: DocumentId},


				            success: function (data) {
				            	Refreshdocuments('');
					    		$("#clientdocumentform").resetChanges();
					    		$( "#clientdocumentform" ).removeValidator();
					    		doList();
				            }
				        });
				}

				confirm("Doriti sa stergeti documentul?", DoIt);

			}

			function SaveClientdocument(){


				var Rec = false;

				$('#clientdocumentform').find(':input').each(function(){
					if ($(this).prop('required') && $(this).val() == "")
						Rec = true;

					}

				);

				if (Rec)
					return false;


				if (! $("#clientdocumentform").isChanged())
					return false;

				var DocumentId = $('#clientdocumentid').val();
				var	Date = $('#date').val();
				var Number = $('#number').val();
				var State = $('#state').val();
				var CustomerId = $('#customer').val();
				var Description = $("#description" ).val();


				 $.ajax({
		            type: 'POST',

		            url: moduleUrl + '/ajaxsaveclientdocument',
		            data: {DocumentId: DocumentId, Date:Date, Number: Number,
		                	State: State, CustomerId: CustomerId, Description: Description},


		            success: function (data) {
		            	ShowSuccess('Salvat cu succes!');
		            	$('#date').val(data[0][0].DocumentDate);
			            $('#number').val(data[0][0].DocumentNumber);
			            $('#clientdocumentid').val(data[0][0].DocumentId);
			            $('#state').val(data[0][0].State);
			            $('#version').val(data[0][0].Version);
			            $('#customer').val(data[0][0].OrganizationId);
			            $("#description" ).val(data[0][0].Description);

			            $('#versiondetail').html(data[1]);
			            $('#attachdiv').html(data[2]);
			            $('#ul-actions').html(data[3]);
			            $('#relateddocuments').html(data[4]);

			    		Refreshdocuments('');
			    		$("#clientdocumentform").resetChanges();
			    		$( "#clientdocumentform" ).removeValidator();

		            }
		        });

				 return false;
			}


			function Refreshdocuments(filter){

				if (filter != '')
					$("#customfilter").dropdown("toggle");

				if (filter == 'all')
					filter = '';

				 $.ajax({
			            type: 'POST',

			            url: moduleUrl + '/ajaxgetclientdocuments',
			            data: {filter: filter},

			            success: function (data) {

			            	source.localdata = data.documents;
			                $("#documentlist").jqxGrid('updatebounddata', 'cells');

			                $('#filter-draft').html(data.counts.Draft);
			                $('#filter-sent').html(data.counts.Sent);
			                $('#filter-action').html(data.counts.Feedback);
			                $('#filter-contract').html(data.counts.Contract);
			                $('#filter-all').html(data.counts.All);


			            }
			        });


			}


			function uploadajax(){


			    form_data = new FormData();

			    if ($('#theFile')[0].files.length == 0){
			    	ShowError('Alegeti un fisier!');
			    	return;
				}

			    form_data.append("thefile", $('#theFile')[0].files[0]);
			    form_data.append("DocumentId", $('#clientdocumentid').val()),
			    form_data.append("Version",  $('#version').val()),
			    form_data.append("Description",  $('#attachdescription').val()),

			    $('#theFile').val('');
			    $('#attachdescription').val('');


			    $.ajax({
			              url:  baseUrl + '/ajaxuploaddocumentfile',
			              cache: false,
			              contentType: false,
			              processData: false,
			              async: true,
			              data: form_data,
			              type: 'POST',
			              success: function (res, status) {
			                  	if (status == 'success') {

			                      if (res == 'No file'){
			                    	  ShowError('Fisierul nu s-a incarcat!');
			                      }
			                      else{

			                    	  ShowSuccess('Fisierul s-a importat cu succes!');
			                    	  $('#attachdiv').html(res)
			                      }
			                  }
			              },
			              error: function (res) {
			            	  ShowError(res);

			              }
			          })
			    }



			var gAttachmentId = 0;

			function deleteattachment (AttachmentId){
				gAttachmentId = AttachmentId;
				confirm("Doriti sa stergeti atasamentul?", deleteattachmentdo);
			}

			function deleteattachmentdo(){
				AttachmentId = gAttachmentId;
				DocumentId = $('#clientdocumentid').val();

				$.ajax({
		              url:  baseUrl + '/ajaxdeletedocumentfile',

		              data: {AttachmentId: AttachmentId, DocumentId:DocumentId},
		              type: 'POST',
		              success: function (res, status) {
		                  	if (status == 'success') {

		                      if (res == 'No file'){
		                    	  ShowError('Fisierul nu s-a sters!');
		                      }
		                      else{

		                    	  ShowSuccess('Fisierul s-a sters cu succes!');
		                    	  $('#attachdiv').html(res)
		                      }


		                  }
		              },
		              error: function (res) {
		            	  ShowError('Eroare la stergere fisier');

		              }
		          })

			}


			$(document).ready(function () {

		        // prepare the data
		        source =
		        {
		            localdata: data,
		            datatype: "array",
		            datafields:
		            [
		            	{ name: 'DocumentDate', type: 'Date' },
		                { name: 'DocumentNumber', type: 'integer' },
		                { name: 'Partner', type: 'string' },
		                { name: 'State', type: 'string' },
		                { name: 'DocumentId', type: 'string' },
		            ]
		        };

		        var addfilter = function () {
	                 var filtergroup = new $.jqx.filter();
	                 var filter_or_operator = 1;
	                 var filtervalue = '';
	                 var filtercondition = 'contains';
	                 var filter1 = filtergroup.createfilter('stringfilter', filtervalue, filtercondition);
	                 filtervalue = '';
	                 filtercondition = 'starts_with';
	                 var filter2 = filtergroup.createfilter('stringfilter', filtervalue, filtercondition);

	                 filtergroup.addfilter(filter_or_operator, filter1);
	                 filtergroup.addfilter(filter_or_operator, filter2);

	             }


		        var groupsrenderer = function (text, group, expanded, data) {
	                if (data.groupcolumn.datafield !== 'Value' ) {
	                    var number = dataAdapter.formatNumber(group, data.groupcolumn.cellsformat);
	                    var text = data.groupcolumn.text + ': ' + number;
	                    if (data.subItems.length > 0) {
	                        var aggregate = this.getcolumnaggregateddata('Value', ['sum'], true, data.subItems);
	                    }
	                    else {
	                        var rows = new Array();
	                        var getRows = function (group, rows) {
	                            if (group.subGroups.length > 0) {
	                                for (var i = 0; i < group.subGroups.length; i++) {
	                                    getRows(group.subGroups[i], rows);
	                                }
	                            }
	                            else {
	                                for (var i = 0; i < group.subItems.length; i++) {
	                                    rows.push(group.subItems[i]);
	                                }
	                            }
	                        }
	                        getRows(data, rows);
	                        var aggregate = this.getcolumnaggregateddata('Value', ['sum'], true, rows);
	                    }

	                    return '<div class="'  + '" style="position: absolute;"><span>' + text + ', </span>' + '<span class="' +  '">' + "Total" + ' (' + aggregate.sum + ')' + '</span></div>';
	                }
	                else {
	                    return '<div class="' + '" style="position: absolute;"><span>' + text + '</span>';
	                }
	            }


		        var dataAdapter = new $.jqx.dataAdapter(source, {
		            downloadComplete: function (data, status, xhr) { },
		            loadComplete: function (data) { },
		            loadError: function (xhr, status, error) { }
		        });


		        $("#documentlist").jqxGrid(
		        {
		            width: '100%',
		            source: dataAdapter,
		            
		            autoheight: false,
		            sortable: true,
		            altrows: true,
		            groupable: true,
	                filterable: true,
		            enabletooltips: true,
		            editable: false,
		            columnsresize: true,
		            selectionmode: 'singlerow',
		            showtoolbar: false,
	                theme: 'energyblue',

	                columns: [
		              { text: 'Date', datafield: 'DocumentDate', width:'20%'},
		              { text: 'Number', datafield: 'DocumentNumber', width: '20%'},
		              { text: 'Customer', datafield: 'Partner', width: '40%'},
		              { text: 'State', datafield: 'State', width: '20%'},
		              { text: 'DocumentId', datafield: 'DocumentId', width: '20%', hidden: true}
		            ]
		        });


		        $('#clientdocumentform').trackChanges();

		        $('#documentlist').on('rowdoubleclick', function (event) {

		        	var rowindex = $('#documentlist').jqxGrid('getselectedrowindex');

		        	GetDetailAjax(rowindex);
		        	doDetail();
		            //var DocumentId = event.args.row.bounddata.DocumentId;

		        });

		        $( "#clientdocumentform" ).submit(function( event ) {
					SaveClientdocument();
					event.preventDefault();
				});


		        $('#buttonUpload').click(uploadajax)



		    });


