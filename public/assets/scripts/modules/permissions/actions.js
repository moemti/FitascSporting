
    HasDetails = false;
    
    MasterPrimaryKey = "ActionId";

	RequiredFields = {

    }

	RequiredMessages ={

	}
	


	urls = {
		saveurl: '/savepermissionajax',
		getmasterurl: '/getpermissionsajax',
		getdetailurl: '/getpermissionajax',
		deleteurl: '/deletepermissionajax',
		actionurl:'/getpermissiondictionariesajax'

	};

	listdatafields=
	 
	[
		{ name: 'Name', type: 'string' },
		{ name: 'Code', type: 'string' },
		{ name: 'ActionId', type: 'integer' },
	]


	listdatacolumns=

	 [
		{ text: 'Permission', datafield: 'Name', width: '50%'},
		{ text: 'Code', datafield: 'Code', width: '50%'},
		{ text: 'ActionId', datafield: 'ActionId',  hidden: true}
    ]


