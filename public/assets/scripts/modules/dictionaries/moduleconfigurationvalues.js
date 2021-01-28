
HasDetails = true;
IsDetailListModal = true;
HasDetailBtn = false; 
CanDeleteMaster = false;

 

urls = {
    saveurl: '/save_mcv_ajax',
    getmasterurl: '/get_mcv_masterlist_sajax',
    getdetailurl: '/get_mcv_master_sajax',
    deleteurl: '/delete_mcv_ajax',
    getdetaillisturl: '/get_mcv_detail_list_ajax'

};

listdatafields=
    [
        { name: 'ModuleId', type: 'integer'},
        { name: 'Name', type: 'string'},
        { name: 'Code', type: 'string'},
       

    ]

listdatacolumns=
    [
        { text: 'Module', datafield: 'Name', width: '70%'},
        { text: 'Code', datafield: 'Code',  width:'30%'},
      
        { text: 'ModuleId', datafield: 'ModuleId', hidden: true},
    ]


detaildatafields= [
		{ name: 'ModuleConfigurationId', type: 'integer'},
        { name: 'Name', type: 'string'},
        { name: 'Code', type: 'string'},
		{ name: 'DefaultValue', type: 'string'},
		{ name: 'Description', type: 'string'},
        { name: 'DataType', type: 'string'},
        { name: 'Value', type: 'string'},
        { name: 'ModuleId', type: 'integer'},
    ]
    
detailcolumns=  [

        {text: 'Configuration', datafield: 'Name',  width:'40%'},
        {text: 'Code', datafield: 'Code', width: '40%'},
		{text: 'Value', datafield: 'Value', width: '20%'},
        {text: 'ModuleConfigurationId', datafield: 'ModuleConfigurationId', hidden: true, key:true},
        {text: 'ModuleId', datafield: 'ModuleId', hidden: true,},
   ]

