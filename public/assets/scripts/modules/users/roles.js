	HasDetails = true;
	IsDetailListModal = false;

	urls = {
		saveurl: '/saveroleajax',
		getmasterurl: '/getrolesajax',
		getdetailurl: '/getroleajax',
		deleteurl: '/deleteroleajax',
		getdetaillisturl:'/getrolepermissionsajax'
			
	};

	MasterPrimaryKey = "RoleId";
	DetailPrimaryKey = 'PermissionRoleId';

	listdatafields=
		[
	    	{ name: 'RoleId', type: 'integer'},
	    	{ name: 'Name', type: 'string'},
	        { name: 'Code', type: 'string'},
	      
	       
	    ]
	
	listdatacolumns=
		[
			 { text: 'Name', datafield: 'Name',  width:'50%',},
			 { text: 'Code', datafield: 'Code', width: '50%'},
			 { text: 'RoleId', datafield: 'RoleId', width: '20%',hidden: true },
			 
        ]
	

// ================			detail list functions		=========================



	detaildatafields= [
		{ name: 'RoleId', type: 'integer'},
		{ name: 'ActionId', type: 'integer'},
		{ name: 'Action', type: 'string'},
		{ name: 'PermissionType', type:'number'},
		{ name: 'PermissionRoleId', type: 'integer'},
		{ name: 'PermissionTypeS', type:'string'},
	] 

	detailcolumns=  [
						
		{text: 'Permission', datafield: 'ActionId', displayField: 'Action', columntype: 'dropdownlist', width:'70%',
			createeditor: function (row, value, editor) {
				editor.jqxDropDownList({ source: permissions, displayMember: 'Name', valueMember: 'ActionId' });
			}
		},
	
		
		{text: 'Type', datafield: 'PermissionType', width:'30%',columntype: 'dropdownlist', displayField: 'PermissionTypeS',
			createeditor: function (row, value, editor) {
				editor.jqxDropDownList({ source: PermissionTypesSource, displayMember: 'typename', valueMember: 'value' });
				}
		},    
		{text: 'RoleId', datafield: 'RoleId', hidden: true},
		{text: 'PermissionRoleId', datafield: 'PermissionRoleId', hidden: true}
			
				
	]	

	PermissionTypesSource = [
		{typename: 'Permitted', value: 1 },
		{typename: 'Denied', value: 0 }
	]	





	
	

        

        

	
    
	