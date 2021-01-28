HasDetails = false;

RequiredFields = {

}


RequiredMessages = {

}

urls = {
    saveurl: '/savedictionaryajax',
    getmasterurl: '/getdictionariesajax',
    getdetailurl: '/getdictionaryajax',

    deleteurl: '/deletedictionaryajax'

};

listdatafields=
    [
        { name: 'ElemDictionaryId', type: 'integer'},
        { name: 'Name', type: 'string'},
        { name: 'Code', type: 'string'},
        { name: 'IsActive', type: 'integer' },

    ]

listdatacolumns=
    [
        { text: 'Name', datafield: 'Name', width: '60%'},
        { text: 'Code', datafield: 'Code',  width:'30%'},
        { text: 'Active', datafield: 'IsActive', width: '10%', columntype: 'checkbox'},
        { text: 'ElemDictionaryId', datafield: 'ElemDictionaryId', hidden: true},
    ]

function OnDeleteSucces(){

}

function GetMasterListData(){
	data = [$('#dictionaryid').val()]
	return data;
}

function getDetailData(rowindex){
    return {ElemDictionaryId: $('#masterlist').jqxGrid('getrowdata', rowindex).ElemDictionaryId};
}


function getDetailList(data){

}

function onGetDetailSuccess(data){

    $('#name').val(data[0][0].Name);
    $('#code').val(data[0][0].Code);
    $('#elemdictionaryid').val(data[0][0].ElemDictionaryId);
    $('#dictionaryid').val(data[0][0].DictionaryId);
    $('#description').val(data[0][0].Description);
    $('#parentid').val(data[0][0].ParentId);
    $('#isactive').prop( "checked", data[0][0].IsActive == 1);
    
    $('#parentid').val(data[0][0].ParentId);
    
    var Parent = data[0][0].Parent == null?'-':data[0][0].Parent; 
    
    var dropDownContent = '<div style="position: relative; margin-left: 3px; margin-top: 5px;">' + Parent + '</div>';
    $("#dropDownButton").jqxDropDownButton('setContent', dropDownContent);
    $("#jqxTree").jqxTree('selectItem', $("#"+ data[0][0].ParentId)[0]);
    
    $("#detailform").resetChanges();

}




function OnRefreshMaster(data){
    source.localdata = data.list;
    $("#masterlist").jqxGrid('updatebounddata', 'cells');
    
    // punem parent list
    

    
    AfterLoadMaster(data.list)
    
}


function AfterLoadMaster(data){
	
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
    
    $("#dropDownButton").jqxDropDownButton({ width: 150, height: 25});
    
    
    $('#jqxTree').on('select', function (event) {
        var args = event.args;
        var item = $('#jqxTree').jqxTree('getItem', args.element);
        
        if (item == null)
        	return;
        
        var dropDownContent = '<div style="position: relative; margin-left: 3px; margin-top: 5px;">' + item.label + '</div>';
        $("#dropDownButton").jqxDropDownButton('setContent', dropDownContent);
        $("#dropDownButton").jqxDropDownButton('close');
        
        var id = args.element.id;
        
          
        $('#parentid').val(id==="-1"?null:id);
        $('#parentid').trigger('change');
        
    });
    

  
    $('#jqxTree').jqxTree({ source: records, width: '300px'});
    var treeItems = $("#jqxTree").jqxTree('getItems');
    var firstItem = treeItems[0];
    var firstItemElement = firstItem.element;
    $('#jqxTree').jqxTree('addBefore', { label: '-', id: -1 }, firstItemElement);
    
    if ($('#parentid').val() != "")
		$("#jqxTree").jqxTree('selectItem', $("#"+ $('#parentid').val())[0]);
	
}


function RetrieveFields(){
	
    var	Name = $('#name').val();
    var	Code = $('#code').val();
    var	ElemDictionaryId = $('#elemdictionaryid').val();
    var	DictionaryId = $('#dictionaryid').val();
    var	Description = $('#description').val();
    var IsActive = $('#isactive').is(":checked")?1:0;
    var	ParentId = $('#parentid').val();
    
 
    

    return  {Name: Name, Code: Code,
        IsActive: IsActive, ElemDictionaryId: ElemDictionaryId, 
        DictionaryId: DictionaryId, Description:Description, ParentId:ParentId};

}

function RetrieveDeleteFields(){
    var ElemDictionaryId = $('#elemdictionaryid').val();
    return  {ElemDictionaryId: ElemDictionaryId}
}

function OnSaveSucces(data){
    onGetDetailSuccess(data);
    
    

}


function BeforeSaveUpdates(){

}

//==========================================================


