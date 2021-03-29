
HasDetails = true;
IsDetailListModal = false;


	


	
	urls = {
		saveurl: '/savepersonajax',
		getmasterurl: '/getpersonsajax',
		getdetailurl: '/getpersonajax',
		deleteurl: '/deletepersonajax',
		getdetaillisturl: '/getpersonfunctionsajax',
			
	};
	
	listdatafields=
		[
	    	{ name: 'PersonId', type: 'integer'},
	    	{ name: 'Name', type: 'string'},
	        { name: 'Email', type: 'string'},
			{ name: 'Role', type: 'string' },
			{ name: 'NickName', type: 'string' },
	       
	    ]
	
	listdatacolumns=
		[
			 {text: 'Nick Name', datafield: 'NickName',  width:'40%',},
			 {text: 'Name', datafield: 'Name',  width:'40%',},
			 { text: 'Role', datafield: 'Role', width: '20%'},
			 { text: 'PersonId', datafield: 'PersonId', width: '20%', hidden: true},
        ]
	
	
	
	
	detaildatafields = 
		[
			{ name: 'Name', type:'string'},
			{ name: 'RoleId', type:'integer'},
			{ name: 'PersonId', type:'integer'},
			{ name: 'OLD_RoleId',  type:'integer'},
			{ name: 'NEW_RoleId',  type:'integer'},
			
				
		]
	
	detailcolumns = [
		    			
			{text: 'Role', datafield: 'NEW_RoleId', displayField: 'Name', columntype: 'dropdownlist', width:'100%',
			   createeditor: function (row, value, editor) {
				editor.jqxDropDownList({ source: dataroles, displayMember: 'Name', valueMember: 'RoleId' });
			},
				validation: function (cell, value) {
				  if (value == "") {
					  return { result: false, message: "Enter a value" };
				  }
				  return true;
				},
		 },
		 
		 {text: 'OLD_RoleId', datafield: 'OLD_RoleId', hidden: true},
		 {text: 'RoleId', datafield: 'RoleId', hidden: true},
		 {text: 'PersonId', datafield: 'PersonId', hidden: true}
		 
			
	   ]	
    

	// parametri -- se pune gridul si tot ce mai trebuie




	_onGetDetailSuccess = OnPutDetailOthers;

	OnPutDetailOthers = function(data){
	
		_onGetDetailSuccess(data);
	
		if (data != null){

			PutOthers1(data)
		}
		
	}


	


	var others1DB = [];
	var deltaOthers1 = [];
	var LastOthers1Id = -1;

	var Others1MasterKey = 'PersonXParamId';

	var other1Fields = [
			{ name: 'PersonXParamId', type: 'integer'},
			{ name: 'ParamId', type: 'integer'},
			{ name: 'ParamName', type: 'string'},
			{ name: 'PersonId', type: 'integer'},
			{ name: 'Value', type: 'string'},
			{ name: 'StartDate', type: 'Date'},
			{ name: 'EndDate', type: 'Date'},
		]; 
  


	let Other1Columns = [

		
		 
		 {text: 'Param', datafield: 'ParamId', displayField: 'ParamName', columntype: 'dropdownlist', width:'40%',
				createeditor: function (row, value, editor) {
				editor.jqxDropDownList({ source: dataparams, displayMember: 'Name', valueMember: 'ParamId' });
			},
				validation: function (cell, value) {
					if (value == "") {
						return { result: false, message: "Enter a value" };
					}
					return true;
				},
		},

		{text: 'Value', datafield: 'Value',  width:'20%',
			validation: function (cell, value) {
			  if (value == "") {
				  return { result: false, message: "Enter a value" };
			  }
			  return true;
			},
		 },
	

		{text: 'Start date', datafield: 'StartDate', width: '20%'//, columntype: 'datetimeinput',  cellsformat: 'yyyy-mm-dd'
			

		},

		{text: 'End date', datafield: 'EndDate', width: '20%'//, columntype: 'datetimeinput' , cellsformat: 'MM-dd-yyyy'
			

		},

	   
		{text: 'PersonXParamId', datafield: 'PersonXParamId', hidden: true, key:true},
		{text: 'PersonId', datafield: 'PersonId', hidden: true},
	
   ];


	var Others1GridName = "#params";

	_CustomChanged = CustomChanged;
	CustomChanged = function(){
		return _CustomChanged() || deltaOthers1.length > 0;
	}

	_RetrieveFields = RetrieveFields;
	RetrieveFields = function(){	// pun in saveing fileds the new deltaOthers1
		var results = {};
		results = _RetrieveFields();

		results['deltaOthers1'] = deltaOthers1;
		return results;
	}

	_refreshDetail = refreshDetail;
	refreshDetail = function (){
		_refreshDetail();
		deltaOthers1 = [];
	} 

	function addDeltaOperationS(Oper){
		// check if already exist
		var Exists = false;
		
		deltaOthers1.forEach(CheckExists);
		
		if(!Exists){
			deltaOthers1.push(Oper);
		}
		
		
		function CheckExists(item, index){
			Exists = false;
			if (item[Others1MasterKey] === Oper[Others1MasterKey]){
				if (Oper.Operation == 'D')
					if (deltaOthers1[index].Operation == 'I')
						deltaOthers1.splice(index, 1);
					else
						deltaOthers1[index].Operation = 'D'
						
				if (Oper.Operation == 'U'){
					// extra validation if changed from original
					
						var OldOperation = deltaOthers1[index].Operation;
						deltaOthers1[index] = Oper;
						deltaOthers1[index].Operation = 	OldOperation;
				}

				Exists = true;		
			}
			
		}
	}




	function PutOthers1(data){

		others1DB = data;
		deltaOthers1 = [];

		other1source =
		{
			localdata: others1DB,
			datatype: "array",
			datafields: other1Fields,
			

			addrow: function (rowid, rowdata, position, commit) {

				var obj = Object.assign({Operation:'I'}, rowdata[0]);
				addDeltaOperationS(obj);
				commit(true);
			},
			deleterow: function (rowid, commit) {

				var rowdata = $(Others1GridName).jqxGrid('getrowdatabyid', rowid);
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



		var dataAdapterOthers1 = new $.jqx.dataAdapter(other1source);


		$(Others1GridName).jqxGrid(
		{
			width: '100%',
			source: dataAdapterOthers1,
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
					LastOthers1Id -= 1;

					var newData = 	 [
						{	
							ParamId: LastOthers1Id,
							Value: '',
							StartDate: null,
							EndDate: null,
							PersonXParamId: null,
							PersonId: $('#PersonId').val()
						}
					];;
					
			
					var commit = $(Others1GridName).jqxGrid('addrow', null, newData, 'top');
				});
				// delete selected row.
				deleteButton.click(function (event) {
					var selectedrowindex = $(Others1GridName).jqxGrid('getselectedrowindex');
					if (selectedrowindex == -1)
						ShowError('Alegeti o intregistrare');
			
					var rowscount = $(Others1GridName).jqxGrid('getdatainformation').rowscount;
					if (selectedrowindex >= 0 && selectedrowindex < rowscount) {
						var id = $(Others1GridName).jqxGrid('getrowid', selectedrowindex);
						 commit = $(Others1GridName).jqxGrid('deleterow', id);
					}
				});
			
			},

			columns: Other1Columns,
		});

	
	}

	//  end parametrii 
	

        

        

	
    
	