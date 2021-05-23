HasDetails = false;
	
	urls = {
		saveurl: '/savecompetitionajax',
		getmasterurl: '/getcompetitionsajax',
		getdetailurl: '/getcompetitionajax',
		deleteurl: '/deletecompetitionajax',
	
			
	};
	
	listdatafields=
		[
	    	{ name: 'CompetitionId', type: 'integer'},
            { name: 'Name', type: 'string'},
			{ name: 'StartDate', type: 'string'},
			{ name: 'EndDate', type: 'string'},
	    	{ name: 'Sport', type: 'string'},
			{ name: 'Range', type: 'string'},
		
			
	  
	       
	    ]

       
	
	listdatacolumns=
		[
			 { text: tName, datafield: 'Name',  width:'30%'},
			 { text: tStartDate, datafield: 'StartDate',  width:'10%'},
			 { text: tEndDate, datafield: 'EndDate', width: '10%'},
			
			 { text: tRange, datafield: 'Range', width: '30%'},
             { text: tSport, datafield: 'Sport', width: '20%'},
	
			
        ]