	var projectrolessrource;
	
	
	HasDetails = false;
	

	
	function fillStates(DocumentTypeId){
		
	}
	
	urls = {
		saveurl: '/saveprojectajax',
		getmasterurl: '/getprojectsajax',
		getdetailurl: '/getprojectajax',
		deleteurl: '/deleteprojectajax',
		getdetaillisturl: '/getprojectfunctionsajax',
		getdictionariesurl: '/getprojectdictionariesajax'
			
	};
	
	listdatafields=
		[
	    	{ name: 'ProjectId', type: 'integer'},
	    	{ name: 'ProjectCategoryId', type: 'integer'},
	    	{ name: 'ParentId', type: 'integer'},
	    	{ name: 'Priority', type: 'integer'},
	    	{ name: 'ProjectStateId', type: 'integer'},
	    	{ name: 'Name', type: 'string'},
	    	{ name: 'Description', type: 'string'},
	        { name: 'Category', type: 'string'},
	        { name: 'State', type: 'string'},
	        { name: 'DateStart', type: 'string' },
	        { name: 'DateEnd', type: 'string' },
	       
	    ]
	
	listdatacolumns=
		[
			 {text: 'Name', datafield: 'Name',  width:'30%',},
			 { text: 'Category', datafield: 'Category', width: '30%'},
			 { text: 'Start', datafield: 'DateStart', width: '13%'},
			 { text: 'End', datafield: 'DateEnd', width: '13%'},
			 { text: 'State', datafield: 'State', width: '14%'},
			 
			 { text: 'ProjectId', datafield: 'ProjectId', width: '20%', hidden: true},
        ]
	
	_onGetDetailSuccess = onGetDetailSuccess;
	onGetDetailSuccess = function (data){

		_onGetDetailSuccess(data);

	    $("#jqxTreeCategory").jqxTree('selectItem', $("#"+ data[0][0].ProjectCategoryId)[0]);
	    

	    if ($('#ParentId').val() != "")
			$("#jqxTreeParent").jqxTree('selectItem', $("#"+ $('#ParentId').val())[0]);
	    

	    if ($('#ProjectStateId').val() != "")
			$("#jqxTreeState").jqxTree('selectItem', $("#"+ $('#ProjectStateId').val())[0]);

	}
	

	
	function AfterLoadMaster(data){
		var source2 =
	    {
	        datatype: "array",
	        datafields: [
	            { name: 'id' },
	            { name: 'ParentId' },
	            { name: 'Name' },
	        ],
	        id: 'id',
	        localdata: data
	    };
	    // create data adapter.
	    var dataAdapter = new $.jqx.dataAdapter(source2);
	    // perform Data Binding.
	    dataAdapter.dataBind();
	    // get the tree items. The first parameter is the item's id. The second parameter is the parent item's id. The 'items' parameter represents 
	    // the sub items collection name. Each jqxTree item has a 'label' property, but in the JSON data, we have a 'text' field. The last parameter 
	    // specifies the mapping between the 'text' and 'label' fields.  
	    var records = dataAdapter.getRecordsHierarchy('id', 'ParentId', 'items', [{ name: 'Name', map: 'label'} ]);
	    
	    $("#dropDownParent").jqxDropDownButton({ width: '100%', height: 25});
	    
	    
	    $('#jqxTreeParent').on('select', function (event) {
	        var args = event.args;
	        var item = $('#jqxTreeParent').jqxTree('getItem', args.element);
	        
	        if (item == null)
	        	return;
	        
	        var dropDownContent = '<div style="position: relative; margin-left: 3px; margin-top: 5px;">' + item.label + '</div>';
	        $("#dropDownParent").jqxDropDownButton('setContent', dropDownContent);
	        $("#dropDownParent").jqxDropDownButton('close');
	        
	        var id = args.element.id;
	        
	          
	        $('#ParentId').val(id==="-1"?null:id);
	        $('#ParentId').trigger('change');
	        
	    });
	    
	
	  
	    $('#jqxTreeParent').jqxTree({ source: records});
	
	    var treeItems = $("#jqxTreeParent").jqxTree('getItems');
	    var firstItem = treeItems[0];
	    var firstItemElement = firstItem.element;
	    $('#jqxTreeParent').jqxTree('addBefore', { label: '-', id: -1 }, firstItemElement);
	    

		
	}
	
	

	function onDoNew(){
		$(".jqx-dropdownlist-content").find('div').html('');
	}
	////////////////////////////////////////////////////////////////
	

		
	function OnGetDictionaries(data){
		
		
		
		// categories
		var source2 =
	    {
	        datatype: "json",
	        datafields: [
	            { name: 'id' },
	            { name: 'ParentId' },
	            { name: 'Name' },
	            { name: 'ElemDictionaryId' }
	        ],
	        id: 'id',
	        localdata: data.category
	    };
	    // create data adapter.
	    var dataAdapter = new $.jqx.dataAdapter(source2);
	    // perform Data Binding.
	    dataAdapter.dataBind();
	    // get the tree items. The first parameter is the item's id. The second parameter is the parent item's id. The 'items' parameter represents 
	    // the sub items collection name. Each jqxTree item has a 'label' property, but in the JSON data, we have a 'text' field. The last parameter 
	    // specifies the mapping between the 'text' and 'label' fields.  
	    var records = dataAdapter.getRecordsHierarchy('id', 'ParentId', 'items', [{ name: 'Name', map: 'label'} ]);
	    
	    $("#dropDownCategory").jqxDropDownButton({ width: 150, height: 25});
	    
	    
	    $('#jqxTreeCategory').on('select', function (event) {
	        var args = event.args;
	        var item = $('#jqxTreeCategory').jqxTree('getItem', args.element);
	        
	        if (item == null)
	        	return;
	        
	        var dropDownContent = '<div style="position: relative; margin-left: 3px; margin-top: 5px;">' + item.label + '</div>';
	        $("#dropDownCategory").jqxDropDownButton('setContent', dropDownContent);
	        $("#dropDownCategory").jqxDropDownButton('close');
	        
	        var id = args.element.id;
	        
	          
	        $('#ProjectCategoryId').val(id==="-1"?null:id);
	        $('#ProjectCategoryId').trigger('change');
	        
	    });
	    
	
	  
	    $('#jqxTreeCategory').jqxTree({ source: records, width: '300px'});
	
	   

	        
	    
	 // states
		var source3 =
	    {
	        datatype: "json",
	        datafields: [
	            { name: 'id' },
	            { name: 'ParentId' },
	            { name: 'Name' },
	            { name: 'ElemDictionaryId' }
	        ],
	        id: 'id',
	        localdata: data.state
	    };
	    // create data adapter.
	    var dataAdapter = new $.jqx.dataAdapter(source3);
	    // perform Data Binding.
	    dataAdapter.dataBind();
	    // get the tree items. The first parameter is the item's id. The second parameter is the parent item's id. The 'items' parameter represents 
	    // the sub items collection name. Each jqxTree item has a 'label' property, but in the JSON data, we have a 'text' field. The last parameter 
	    // specifies the mapping between the 'text' and 'label' fields.  
	    var records = dataAdapter.getRecordsHierarchy('id', 'ParentId', 'items', [{ name: 'Name', map: 'label'} ]);
	    
	    $("#dropDownState").jqxDropDownButton({ width: 150, height: 25});
	    
	    
	    $('#jqxTreeState').on('select', function (event) {
	        var args = event.args;
	        var item = $('#jqxTreeState').jqxTree('getItem', args.element);
	        
	        if (item == null)
	        	return;
	        
	        var dropDownContent = '<div style="position: relative; margin-left: 3px; margin-top: 5px;">' + item.label + '</div>';
	        $("#dropDownState").jqxDropDownButton('setContent', dropDownContent);
	        $("#dropDownState").jqxDropDownButton('close');
	        
	        var id = args.element.id;
	        
	          
	        $('#ProjectStateId').val(id);
	        $('#ProjectStateId').trigger('change');
	        
	    });
	    
	
	  
	    $('#jqxTreeState').jqxTree({ source: records, width: '300px'});
	
	   

	}

	
    
	