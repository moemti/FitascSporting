
	var HasDetails = false;
	
	
	MasterPrimaryKey = "DocumentFlowId"	;

	urls = {
		saveurl: '/savedocumentflowajax',
		getmasterurl: '/ajaxgetdocumentflows',
		getdetailurl: '/ajaxgetdocumentflow',
		deleteurl: '/deletedocumentflowajax',
	

	};

	listdatafields=
	 [
     	{ name: 'DocumentFlowId', type: 'integer'},
     	{ name: 'DocumentType', type: 'string'},
         { name: 'InitialState', type: 'string'},
         { name: 'NextState', type: 'string' },
         { name: 'Name', type: 'string' },
         { name: 'Code', type: 'string' },
         { name: 'NextDocumentType', type: 'string' },

     ]

	listdatacolumns=

	 [
      	{text: 'Document Type', datafield: 'DocumentType', displayfield: 'DocumentType',  width:'20%',},
       { text: 'Initial State', datafield: 'InitialState', displayfield: 'InitialState', width: '20%'},
       { text: 'Next State', datafield: 'NextState', width: '20%'},
       { text: 'Name', datafield: 'Name', width: '20%'},
       { text: 'Code', datafield: 'Code', width: '10%'},
       { text: 'Next Document Type', datafield: 'NextDocumentType', width:'10%'},
       { text: 'DocumentFlowId', datafield: 'DocumentFlowId', width: '20%', hidden: true},
       ]



	
	// function getDetailData(rowindex){
	// 	return {DocumentFlowId:  $('#documentflowid').val()};
	// }
	


	// sursa functiilor si a persoanelor (vin direct la dechidere cu JSON)

    
	
    // function RefreshRights(DocumentFlowId){
		
	// 	// =============  rights grid  ==================================
		
		
	// 	var actionrights;
		
	// 	$('#tab-detail').block({
	//         	message:null	
	//         });
		 
	// 	$.ajax({
    //         type: 'POST',

    //         url: baseUrl + urls.getdetaillisturl, 
    //         data: {DocumentFlowId: DocumentFlowId},
    //         success: function (data) {
    //         	ShowSuccess('Details retrieved!');
    //         	actionrights = data;
	//             PutActionRights();
	//             $('#tab-detail').unblock();
    //         }
    //     });  
		
		
	// 	function PutActionRights(){
				
	// 			var DocumentFlowId = $('#documentflowid').val();
			
	// 			actionrightsSource =
	// 	        {
	// 	            localdata: actionrights,
	// 	            datatype: "array",
	// 	            datafields: [
	// 	    	    	{ name: 'Role', value: 'FunctionId', values: { source: rolesAdapter.records, value: 'FunctionId', name: 'Name' }},
	// 	    	    	{ name: 'Person', value: 'PersonId', values: { source: personsAdapter.records, value: 'PersonId', name: 'Name' }},
	// 	    	    	{ name: 'FunctionId', type:'integer'},
	// 	    	    	{ name: 'OLD_RoleId', value: 'FunctionId', type:'integer'},
	// 	    	    	{ name: 'PersonId', type:'integer'},
	// 	    	    	{ name: 'OLD_PersonIdId', value: 'PersonId', type:'integer'},
	// 	    	    	{ name: 'DocumentFlowActionId', value: 'DocumentFlowActionId', type:'integer'},
	// 	    	    	{ name: 'SQLCondition', value: 'SQLCondition', type:'string'},
		    	    	
		    	    	    
	// 	    	    ],
	// 	    	    addrow: function (rowid, rowdata, position, commit) {
		    	    	
	// 	    	    	addDeltaOperation({Operation:'I', DocumentFlowActionId: LastDocumentFlowActionId, DocumentFlowId: DocumentFlowId, 
	// 	    	    								PersonId: rowdata[0].PersonId, FunctionId: rowdata[0].FunctionId, SQLCondition:  rowdata[0].SQLCondition})
	// 	    	    	commit(true);
	//                 },
	                
	                
	//                 deleterow: function (rowid, commit) {
	                	
	//                 	var rowdata = $('#documentdetails').jqxGrid('getrowdatabyid', rowid);
	//                 	addDeltaOperation({Operation:'D', DocumentFlowActionId: rowdata.DocumentFlowActionId});
	//                     commit(true);
	//                 },
	//                 updaterow: function (rowid, newdata, commit) {
	//                 	addDeltaOperation({Operation:'U', DocumentFlowActionId: newdata.DocumentFlowActionId,
	//                 							PersonId: newdata.PersonId, FunctionId: newdata.FunctionId, SQLCondition: newdata.SQLCondition});
	                	
	//                     commit(true);
	//                 }
		            
	// 	        };
		        
	// 	        // var dataAdapter = new $.jqx.dataAdapter(actionrightsSource, {
	// 	        //     downloadComplete: function (data, status, xhr) { },
	// 	        //     loadComplete: function (data) { },
	// 	        //     loadError: function (xhr, status, error) { }
	// 	        // });
		        
		        
	// 	        $("#documentdetails").jqxGrid(
	// 	        {
	// 	            width: '100%',
	// 	            source: actionrightsSource,                
	// 	            pageable: false,
	// 	            autoheight: false,
	// 	            sortable: true,
	// 	            altrows: true,
	// 	            groupable: false,
	// 	            filterable: false,
	// 	            enabletooltips: true,
	// 	            editable: true,
	// 	            columnsresize: true,
	// 	            selectionmode: 'singlerow',
	// 	            showtoolbar: false,
	// 	            theme: 'energyblue',
		            	    
	// 	            columns: [
		    			
	// 	   			 {text: 'Role', datafield: 'FunctionId', displayField: 'Role', columntype: 'dropdownlist', width:'40%',
	// 	   				createeditor: function (row, value, editor) {
	//                         editor.jqxDropDownList({ source: rolesAdapter, displayMember: 'Name', valueMember: 'FunctionId' });
	//                     }
	//                  },
	                 
	                 
	//                  {text: 'Person', datafield: 'PersonId', displayField: 'Person', columntype: 'dropdownlist', width:'40%',
	// 		   				createeditor: function (row, value, editor) {
	// 	                        editor.jqxDropDownList({ source: personsAdapter, displayMember: 'Name', valueMember: 'PersonId' });
	// 	                    }
	// 	                 },
	// 	             {text: 'SQLCondition', datafield: 'SQLCondition', width:'20%',},    
	//                  {text: 'OLD_RoleId', datafield: 'OLD_RoleId', hidden: true},
	//                  {text: 'DocumentFlowActionId', datafield: 'DocumentFlowActionId', hidden: true}
	                 
		   			 
	// 	           ]	,
	// 	        });
				
	// 		}
	// }
	
		
	// function refreshDetail(){
	// 	var DocumentFlowId = $('#documentflowid').val();
	// 	RefreshRights(DocumentFlowId);
		
	
	// }
	
	
	// function addDetail(){
	// 	// decrementam cu una
	// 	LastDocumentFlowActionId -= 1;
		
	//     var newData = [
	//     	{	PersonId: null,
	//     		FunctionId: null,
	//     		SQLCondition: null,
	//     		DocumentFlowActionId: LastDocumentFlowActionId,
	//     		Role: null,
	//     		DocumentFlowId:null,
	//     		Person:null
	    		
	//     	}
	//     ]
	    
	//     var commit = $("#documentdetails").jqxGrid('addrow', null, newData, 'top');
	// }
	
	
	// function deleteDetail(){
	// 	var selectedrowindex = $("#documentdetails").jqxGrid('getselectedrowindex');
	// 	if (selectedrowindex == -1)
	// 		ShowError('Alegeti o intregistrare');
		
	//     var rowscount = $("#documentdetails").jqxGrid('getdatainformation').rowscount;
	//     if (selectedrowindex >= 0 && selectedrowindex < rowscount) {
	//         var id = $("#documentdetails").jqxGrid('getrowid', selectedrowindex);
	//         var commit = $("#documentdetails").jqxGrid('deleterow', id);
	//     }
	    
	// }

	// function getDetailData(rowindex){
	// 	return {DocumentFlowId: $('#masterlist').jqxGrid('getrowdata', rowindex).DocumentFlowId};
	// }


	_onGetDetailSuccess = onGetDetailSuccess;
     onGetDetailSuccess = function(data){


		_onGetDetailSuccess(data);

		RefreshStates(data[0][0].DocumentTypeId);

		_onGetDetailSuccess(data);
		

    }



	function BeforeSaveUpdates(){
		var InitialDocumentStateId = $('#InitialDocumentStateId').val();
		var FinalDocumentStateId = $("#FinalDocumentStateId" ).val();

		if (InitialDocumentStateId == FinalDocumentStateId){
			ShowMessage('You have entered identical states!');
			return false;
		}
		return false;
	}

	// function RetrieveFields(){
	// 	// deprecated
	// 	var DocumentFlowId = $('#DocumentFlowId').val();
	// 	var	Name = $('#name').val();
	// 	var Code = $('#code').val();
	// 	var DocumentTypeId = $('#documenttype').val();
	// 	var InitialDocumentStateId = $('#initialdocumentstate').val();
	// 	var FinalDocumentStateId = $("#finaldocumentstate" ).val();
	// 	var NextDocumentTypeId = $('#nextdocumenttype').val();
	// 	var ActionId = $('#actionid').val();

		
		
	// 	return  {DocumentFlowId: DocumentFlowId, Name: Name, Code: Code,
	// 		DocumentTypeId: DocumentTypeId, InitialDocumentStateId: InitialDocumentStateId,
	// 		FinalDocumentStateId: FinalDocumentStateId, NextDocumentTypeId: NextDocumentTypeId, ActionId: ActionId};

	// }

	// function RetrieveDeleteFields(){
	// 	var DocumentFlowId = $('#DocumentFlowId').val();
	// 	return  {DocumentFlowId: DocumentFlowId}
	// }



	//==========================================================

	function RefreshStates(selected){

		$('#InitialDocumentStateId option').remove()
		$('#InitialDocumentStateId').append($('<option>', {
				value: '',
				text : ''
				}));

		$.each(states, function (i, state) {
			if (selected == state.DocumentTypeId)
				$('#InitialDocumentStateId').append($('<option>', {
				value: state.DocumentStateId,
				text : state.Name
				}));
		});

		$('#FinalDocumentStateId option').remove()
		$('#FinalDocumentStateId').append($('<option>', {
				value: '',
				text : ''
				}));

		$.each(states, function (i, state) {
			if (selected == state.DocumentTypeId)
				$('#FinalDocumentStateId').append($('<option>', {
				value: state.DocumentStateId,
				text : state.Name
				}));
		});
	}

	////////////////////////////////////////////////////////////////

	$(document).ready(function () {

		//===============================================

        $('#documenttype').change(function(){
        	selected = this.value;

        	RefreshStates(selected)
        });

		//====================================================

    });



