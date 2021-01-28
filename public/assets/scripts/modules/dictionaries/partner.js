
 HasDetails = false;

 MasterPrimaryKey = 'OrganizationId';
 
RequiredFields = {

}


RequiredMessages = {

}

urls = {
    saveurl: '/savepartnerajax',
    getmasterurl: '/getpartnersajax',
    getdetailurl: '/getpartnerajax',

    deleteurl: '/deletepartnerajax'

};

listdatafields=
    [
        { name: 'OrganizationId', type: 'integer'},
        { name: 'Name', type: 'string'},
        { name: 'IsCustomer', type: 'integer'},
        { name: 'IsSupplier', type: 'integer' },

    ]

listdatacolumns=
    [
        { text: 'Partner', datafield: 'Name', width: '70%'},
        { text: 'Customer', datafield: 'IsCustomer',  width:'15%', columntype: 'checkbox'},
        { text: 'Supplier', datafield: 'IsSupplier', width: '15%', columntype: 'checkbox'},
        { text: 'OrganizationId', datafield: 'OrganizationId', hidden: true},
    ]

function OnDeleteSucces(){

}


// function getDetailData(rowindex){
//     return {OrganizationId: $('#masterlist').jqxGrid('getrowdata', rowindex).OrganizationId};
// }


// function getDetailList(data){

// }

// function onGetDetailSuccess(data){

//     $('#organizationid').val(data[0][0].OrganizationId);
//     $('#name').val(data[0][0].Name);



//     $('#iscustomer').prop( "checked", data[0][0].IsCustomer == 1);
//     $('#issupplier').prop( "checked", data[0][0].IsSupplier == 1);



// }

// function OnRefreshMaster(data){
//     source.localdata = data.list;
//     $("#masterlist").jqxGrid('updatebounddata', 'cells');
// }


// function RetrieveFields(){

//     var OrganizationId = $('#organizationid').val();
//     var	Name = $('#name').val();
//     var IsCustomer = $('#iscustomer').is(":checked")?1:0;
//     var IsSupplier = $('#issupplier').is(":checked")?1:0;

//     return  {OrganizationId: OrganizationId, Name: Name, IsCustomer: IsCustomer,
//         IsSupplier: IsSupplier};

// }

// function RetrieveDeleteFields(){
//     var OrganizationId = $('#organizationid').val();
//     return  {OrganizationId: OrganizationId}
// }

// function OnSaveSucces(data){
//     onGetDetailSuccess(data);

// }


// function BeforeSaveUpdates(){

// }

//==========================================================


