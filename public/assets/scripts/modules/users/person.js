
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
	       
	    ]
	
	listdatacolumns=
		[
			 {text: 'Name', datafield: 'Name',  width:'40%',},
			 { text: 'Email', datafield: 'Email', width: '40%'},
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
    

	
	

        

        

	
    
	