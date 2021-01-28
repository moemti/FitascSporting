
HasDetails = false;
IsDetailListModal = false;

 

urls = {
    saveurl: '/savemoduleconfigurationajax',
    getmasterurl: '/getmoduleconfigurationsajax',
    getdetailurl: '/getmoduleconfigurationajax',
    deleteurl: '/deletemoduleconfigurationajax',
  
};


    listdatafields= [
		{ name: 'ModuleConfigurationId', type: 'integer'},
        { name: 'Name', type: 'string'},
        { name: 'Code', type: 'string'},
		{ name: 'DefaultValue', type: 'string'},
		{ name: 'Description', type: 'string'},
        { name: 'DataType', type: 'string'},

    ]
    
    listdatacolumns=  [

        {text: 'Configuration', datafield: 'Name',  width:'70%'},
        {text: 'Code', datafield: 'Code',  width:'30%'},
        {text: 'ModuleConfigurationId', datafield: 'ModuleConfigurationId', hidden: true, key:true},

   ]

