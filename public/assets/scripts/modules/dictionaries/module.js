
HasDetails = true;
IsDetailListModal = false;

 

urls = {
    saveurl: '/savemoduleajax',
    getmasterurl: '/getmodulesajax',
    getdetailurl: '/getmoduleajax',
    deleteurl: '/deletemoduleajax',
    getdetaillisturl: '/getmoduledetaillistajax'

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
        { name: 'OLD_ModuleConfigurationId', type: 'integer'},
        { name: 'NEW_ModuleConfigurationId', type: 'integer'},
        
        { name: 'Name', type: 'string'},
        

        { name: 'ModuleId', type: 'integer'},
    ]
    
detailcolumns=  [

        {text: 'Configuration', datafield: 'NEW_ModuleConfigurationId', displayField: 'Name', columntype: 'dropdownlist', width:'100%',
            createeditor: function (row, value, editor) {
                editor.jqxDropDownList({ source: configurations, displayMember: 'Name', valueMember: 'ModuleConfigurationId' });
            }
        },

        {text: 'ModuleId', datafield: 'ModuleId', hidden: true,},

        {text: 'OLD_ModuleConfigurationId', datafield: 'OLD_ModuleConfigurationId', hidden: true,},



   ]



