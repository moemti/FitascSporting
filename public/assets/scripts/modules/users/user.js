	HasDetails = false;
	


	//MasterPrimaryKey = "PersonId";
	
	urls = {
		saveurl: '/saveuserajax',
		getmasterurl: '/getusersajax',
		getdetailurl: '/getuserajax',
		deleteurl: '/deleteuserajax'
			
	};
	
	listdatafields=
		[
	    	{ name: 'PersonId', type: 'integer'},
	    	{ name: 'Name', type: 'string'},
	    	{ name: 'UserName', type: 'string'},
	        { name: 'Password', type: 'string'},
	      
	       
	    ]
	
	listdatacolumns=
		[
			 {text: 'Name', datafield: 'Name',  width:'50%',},
			 { text: 'User name', datafield: 'UserName', width: '50%'},
			 { text: 'PersonId', datafield: 'PersonId', width: '20%',hidden: true },
			 
        ]
	
	
	

	
	

        

        

	
    
	