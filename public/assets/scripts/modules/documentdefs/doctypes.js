
	HasDetails = true;
	

	urls = {
		saveurl: '/savedocumenttypeajax',
		getmasterurl: '/getdocumenttypesajax',
		getdetailurl: '/getdocumenttypeajax',
		getdetaillisturl: '/getdocumenttypedetaillistajax',
		deleteurl: '/deletedocumenttypeajax'

	};

	listdatafields=
		[
	    	{ name: 'DocumentTypeId', type: 'integer'},
	    	{ name: 'Name', type: 'string'},
	        { name: 'Code', type: 'string'},
	        { name: 'Category', type: 'string' },

	    ]

	listdatacolumns=
		[
			{ text: 'Category', datafield: 'Category', width: '30%'},
			 {text: 'Document Type', datafield: 'Name',  width:'50%',},
			 { text: 'Code', datafield: 'Code', width: '20%'},
			 { text: 'DocumentTypeId', datafield: 'DocumenttypeId', hidden: true},
        ]

	
	MasterPrimaryKey = "DocumentTypeId";
	DetailPrimaryKey = 'DocumentStateId';




	//==========================================================



	detaildatafields= [
		{ name: 'DocumentTypeId', type: 'integer'},
		{ name: 'DocumentStateId', type: 'integer'},
		{ name: 'Name', type: 'string'},
		{ name: 'Code', type: 'string'},
		{ name: 'IsInitial', type: 'integer'},
	] 


	detailcolumns=  [

		{text: 'Document state', datafield: 'Name',  width:'60%',
			validation: function (cell, value) {
			  if (value == "") {
				  return { result: false, message: "Enter a value" };
			  }
			  return true;
			},
	 },
		{text: 'Code', datafield: 'Code', width: '30%',
			validation: function (cell, value) {
			  if (value == "") {
				  return { result: false, message: "Enter a value" };
			  }
			  return true;
			},

		},
	   {text: 'Initial', datafield: 'IsInitial', columntype: 'checkbox', width: '10%',
			validation: function (cell, value) {
			  if (value == "") {
				  return { result: false, message: "Enter a value" };
			  }
			  return true;
			},

		},
		{text: 'DocumentStateId', datafield: 'DocumentStateId', hidden: true, key:true},
   ]


	//============== serials >>>>>>>>>>>>>>


	_onGetDetailSuccess = OnPutDetailOthers;

	OnPutDetailOthers = function(data){
	
		_onGetDetailSuccess(data);
	
		if (data != null){

			PutSerials(data)
		}
		
	}


	


	var serialsDB = [];
	var deltaS = [];
	var SerialMasterKey = 'SerialId';
	var LastSerialId = -1;
  
	_CustomChanged = CustomChanged;
	CustomChanged = function(){
		return _CustomChanged() || deltaS.length > 0;
	}

	_RetrieveFields = RetrieveFields;
	RetrieveFields = function(){	// pun in saveing fileds the new deltaS
		var results = {};
		results = _RetrieveFields();

		results['deltaS'] = deltaS;
		return results;
	}

	_refreshDetail = refreshDetail;
	refreshDetail = function (){
		_refreshDetail();
		deltaS = [];
	} 

	function addDeltaOperationS(Oper){
		// check if already exist
		var Exists = false;
		
		deltaS.forEach(CheckExists);
		
		if(!Exists){
			deltaS.push(Oper);
		}
		
		
		function CheckExists(item, index){
			Exists = false;
			if (item[SerialMasterKey] === Oper[SerialMasterKey]){
				if (Oper.Operation == 'D')
					if (deltaS[index].Operation == 'I')
						deltaS.splice(index, 1);
					else
						deltaS[index].Operation = 'D'
						
				if (Oper.Operation == 'U'){
					// extra validation if changed from original
					
						var OldOperation = deltaS[index].Operation;
						deltaS[index] = Oper;
						deltaS[index].Operation = 	OldOperation;
				}

				Exists = true;		
			}
			
		}
	}




	function PutSerials(data){

		serialsDB = data;
		deltaS = [];

		serialsource =
		{
			localdata: serialsDB,
			datatype: "array",
			datafields: [
				{ name: 'SerialId', type: 'integer'},
				{ name: 'IsActive', type: 'integer'},
				{ name: 'Serial', type: 'string'},
				{ name: 'Format', type: 'string'},
				{ name: 'LastNumber', type: 'integer'},
				{ name: 'StartDate', type: 'Date'},
				{ name: 'EndDate', type: 'Date'},
			] ,

			addrow: function (rowid, rowdata, position, commit) {

				var obj = Object.assign({Operation:'I'}, rowdata[0]);
				addDeltaOperationS(obj);
				commit(true);
			},
			deleterow: function (rowid, commit) {

				var rowdata = $('#serials').jqxGrid('getrowdatabyid', rowid);
				var obj = Object.assign({Operation:'D'}, rowdata)
				addDeltaOperationS(obj);
				commit(true);
			},
			updaterow: function (rowid, newdata, commit) {

				var obj = Object.assign({Operation:'U'}, newdata)
				addDeltaOperationS(obj);
				commit(true);
			}

		};



		var dataAdapterS = new $.jqx.dataAdapter(serialsource);


		$("#serials").jqxGrid(
		{
			width: '100%',
			source: dataAdapterS,
			pageable: false,
			autoheight: false,
			sortable: true,
			altrows: true,
			groupable: false,
			filterable: true,
			enabletooltips: true,
			editable: true,
			columnsresize: true,
			selectionmode: 'singlerow',
			showtoolbar: true,
			theme: 'energyblue',
			rendertoolbar: function (statusbar) {
				// appends buttons to the status bar.
				var container = $("<div style='overflow: hidden; position: relative; margin: 2px;    text-align: right;'></div>");
				var addButton = $('<button type="button" data-toggle="tooltip" class="btn-shadow  btn btn-primary " title="" style="padding:2px; margin:2px;" data-original-title="Add" ><i class="mb-2 fa fa-plus"></i></button>');
				var deleteButton = $('<button type="button" data-toggle="tooltip" class="btn-shadow  btn btn-danger " title="" style="padding:2px; margin:2px;"  data-original-title="Delete" ><i class="mb-2 fa fa-minus"></i></button>');
				container.append(deleteButton);
				container.append(addButton);
				
				statusbar.append(container);
				addButton.jqxButton({  width: 40, height: 25 });
				deleteButton.jqxButton({  width: 40, height: 25});
				// add new row.
				addButton.click(function (event) {
					LastSerialId -= 1;

					var newData = [
						{	LastNumber: 0,
							SerialId: LastSerialId,
							Serial: 'NEW',
							Format: 'NEW',
							IsActive: 1,
							StartDate: null,
							EndDate: null,
						}
					]
			
					var commit = $("#serials").jqxGrid('addrow', null, newData, 'top');
				});
				// delete selected row.
				deleteButton.click(function (event) {
					var selectedrowindex = $("#serials").jqxGrid('getselectedrowindex');
					if (selectedrowindex == -1)
						ShowError('Alegeti o intregistrare');
			
					var rowscount = $("#serials").jqxGrid('getdatainformation').rowscount;
					if (selectedrowindex >= 0 && selectedrowindex < rowscount) {
						var id = $("#serials").jqxGrid('getrowid', selectedrowindex);
						 commit = $("#serials").jqxGrid('deleterow', id);
					}
				});
			
			},

			columns: [

				{text: 'Serial', datafield: 'Serial',  width:'20%',
					validation: function (cell, value) {
					  if (value == "") {
						  return { result: false, message: "Enter a value" };
					  }
					  return true;
					},
				 },
				 
				{text: 'Format', datafield: 'Format', width: '15%',
					validation: function (cell, value) {
					  if (value == "") {
						  return { result: false, message: "Enter a value" };
					  }
					  return true;
					},
		
				},

				{text: 'Last number', datafield: 'LastNumber', width: '15%',
					validation: function (cell, value) {
					  if (value == "") {
						  return { result: false, message: "Enter a value" };
					  }
					  return true;
					},
		
				},

				{text: 'Start date', datafield: 'StartDate', width: '20%',
					
		
				},

				{text: 'End date', datafield: 'EndDate', width: '20%',
					
		
				},



			   {text: 'Active', datafield: 'IsActive', columntype: 'checkbox', width: '10%',
					validation: function (cell, value) {
					  if (value == "") {
						  return { result: false, message: "Enter a value" };
					  }
					  return true;
					},
		
				},
				{text: 'SerialId', datafield: 'SerialId', hidden: true, key:true},
		   ],
		});

	
	}

