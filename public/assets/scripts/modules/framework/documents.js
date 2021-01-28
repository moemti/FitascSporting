



MasterPrimaryKey = "DocumentId"
DetailPrimaryKey = "DocumentDetailId";
IsDetailListModal = true;


function getDateStr(){
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    return  yyyy + '-' +  mm   + '-' + dd
}


function  onDoNew(){

    documentdetailsDB = [];
    PutDetails();
    LastDocumentDetailId = -1;
    mydelta = [];
}


function getDetailData(rowindex){
    return {DocumentId:   $('#masterlist').jqxGrid('getrowdata', rowindex).DocumentId}; 
    
}


_onGetDetailSuccess = onGetDetailSuccess;

onGetDetailSuccess = function(data){

    _onGetDetailSuccess(data);

    if (data[1] != null)
		$('#attachdiv').html(data[1]);
    $('#ul-actions').html(data[2]);
    if (data[3] != null)
		$('#relateddocuments').html(data[3]);
}

function refreshDetail(){
    
    var DocumentId = $('#DocumentId').val();
    
    RefreshDetails(DocumentId);
    
    LastDocumentDetailId = -1;
    mydelta = [];

}




function OnRefreshMaster(data){
    source.localdata = data.documents;
    $("#masterlist").jqxGrid('updatebounddata', 'cells');
}

 

_RetrieveFields = RetrieveFields ;
RetrieveFields = function(){


    var results = {};

    results = _RetrieveFields();
    //compunem un singur delta
  
    
    documentdetailsDB.forEach(element => {
        mydelta.forEach(elementD => {
            if (element.DocumentDetailId == elementD.DocumentDetailId){
                elementD = Object.assign(elementD, element)
            }
        });
       
    });

    results['delta'] = mydelta;
    return results;
    
    
}



function RefreshDetails(DocumentId){
		
    // =============  Detail grid  ==================================
    
        
    $('#tab-detail').block({
            message:null	
        });
     
    $.ajax({
        type: 'POST',

        url: baseUrl + urls.getdetaillisturl, 
        data: {DocumentId: DocumentId},
        success: function (data) {
            ShowSuccess('Details retrieved!');
            documentdetailsDB = data;
            PutDetails();
            $('#tab-detail').unblock();
        }
    });  
    
}

function PutDetails(){
            
    
    documentdetailsSource =
    {
        localdata: documentdetailsDB,
        datatype: "array",
        datafields: detaildatafields,
    };
    
    
    $("#documentdetails").jqxGrid(
    {
        width: '100%',
        source: documentdetailsSource,                
        pageable: false,
        autoheight: false,
        sortable: true,
        altrows: true,
        groupable: false,
        filterable: true,
        enabletooltips: true,
        editable: false,
        columnsresize: true,
        selectionmode: 'singlerow',
        showtoolbar: false,
        theme: 'energyblue',
        columns: detailcolumns,
    });

    $('#documentdetails').on('rowdoubleclick', function (event) {

        var rowindex = $('#documentdetails').jqxGrid('getselectedrowindex');
        var DocumentDetailId = $('#documentdetails').jqxGrid('getrowdata', rowindex).DocumentDetailId;
        ShowDetailModal(DocumentDetailId);

    });
    invalidateInputForms();
}

function addDetail(){
    ShowDetailNew();
}



function deleteDetail(){
    var selectedrowindex = $("#documentdetails").jqxGrid('getselectedrowindex');
    
    if (selectedrowindex == -1)
        ShowError('Alegeti o intregistrare');
    else{
        // delete from datasource
        var DocumentDetailId = $('#documentdetails').jqxGrid('getrowdata', selectedrowindex).DocumentDetailId; 
        
        addDeltaOperation({Operation:'D', DocumentDetailId: DocumentDetailId});
        documentdetailsDB.forEach(function(item, index){
            if (item.DocumentDetailId == DocumentDetailId){
                documentdetailsDB.splice(index, 1);
                return;
            }
        });
        PutDetails();
        ComputeMaster();
    }
    
}

// modal detail functions

function ShowDetailModal(DocumentDetailId){
    ShowDetail(DocumentDetailId);
}


function ShowDetailNew(){
    ShowDetail();
}


function ShowDetail(DocumentDetailId){
    $('#DetailModal')
    .modal({
        backdrop: 'static',
        keyboard: false});

    $('#detailformmodal').find('input, select').val("");

    PutDefaultModalValues(DocumentDetailId);    

    $("#detailformmodal").resetChanges();
    $('#detailformmodal').trackChanges();
    $('#detailformmodal').removeValidator();

    if (typeof AfterPutDetailValues === "function")
        AfterPutDetailValues();
    
}

function PutDefaultModalValues(DocumentDetailId){
    // punem valorile deja introduse sau valori default    


    function PutValues(item){
        

        $('#detailformmodal').find('input, select').each(function() {
            if ($(this).is(':checkbox')){
                $(this).prop( "checked", item[$(this).attr('name')] == 1 );
            }
            else{
                $(this).val(item[$(this).attr('name')]);
            }
        });
    }


    if (DocumentDetailId != null){
        // punem valorile deja introduse
        
        documentdetailsDB.forEach(function(item){
            if (item.DocumentDetailId == DocumentDetailId){
                PutValues(item);
            }
        });
        $('#IsNewDetail').val(0);
    }
    else{
        // punem valori default


        $("#detailformmodal :input").each(function(){
            var name = $(this).attr('name');
            var val;
    
            if (DefaultDetailValues[name] == "date()")
                val = getDateStr();
            else    
                val = DefaultDetailValues[name]
    
            if (val != undefined){
                if ($(this).is(':checkbox'))
                    $(this).prop( "checked", val == 1);
                else
                    $(this).val(val);
            }
        
        });
        
        // daca mai e ceva in descendats
        if (typeof OnPutDetailDefault === "function")
            OnPutDetailDefault();


        $('#IsNewDetail').val(1);

         // decrementam cu una
         LastDocumentDetailId -= 1;
         $('#DocumentDetailId').val(LastDocumentDetailId);
    }
}


function onCloseDetailModal(){
    $('#DetailModal').modal('toggle') ;
}

function CloseDetailModal(){
    if ( $('#detailformmodal').isChanged() ){
        confirm("Nu ati salvat modificarile! Doriti sa continuati?", onCloseDetailModal);
    }
    else
        onCloseDetailModal()
}

function ValidateDetailModal(){
    var Valid = true;
		
   // if (!$(this).find('.is-invalid'))

    Valid = $('#detailformmodal').valid();//false;

    // $('#detailformmodal').find('input, select').each(function(){
    //     var Valid = true;

    //     if ( !$(this).is(':checkbox'))
    //         if ($(this).prop('required') && $(this).val() == "")
    //             Valid = false;
    // });


    if (!Valid)
        ShowError('Introduceti toate informatiile!');

    return Valid;
}

function SubmitDetailModal(){
   
    if (!ValidateDetailModal())
        return;

    var IsNewDetail = $('#IsNewDetail').val();
    var DocumentDetailId = $('#DocumentDetailId').val();

    if (IsNewDetail == 1){
        InsertDetailModal(DocumentDetailId);
    }
    else{
        UpdateDetailModal(DocumentDetailId);
    }


    onCloseDetailModal();
    //refresh detail grid
    PutDetails();
    ComputeMaster();
}

function  ComputeMaster(){
    // se rescrie in descrendants 
}

function InsertDetailModal(DocumentDetailId){

        function PutValues(item){
            $('#detailformmodal').find('input, select').each(function() {
                if ($(this).is(':checkbox')){
                    item[$(this).attr('name')] = $(this).prop( "checked")?1:0;
                }
                else{
                    item[$(this).attr('name')] = $(this).val();
                }
            });
        }

    addDeltaOperation({Operation:'I', DocumentDetailId: DocumentDetailId});

        // insert in documentdetailsDB;

    documentdetailsDB.push({});
    
    item = documentdetailsDB[documentdetailsDB.length -1];
        // insert new row and put values
    PutValues(item);


}


function UpdateDetailModal(DocumentDetailId){

        function PutValues(item){
            $('#detailformmodal').find('input, select').each(function() {
                if ($(this).is(':checkbox')){
                    item[$(this).attr('name')] = $(this).prop( "checked")?1:0;
                }
                else{
                    item[$(this).attr('name')] = $(this).val();
                }
            });
            addDeltaOperation({Operation:'U', DocumentDetailId: DocumentDetailId});
        }

    documentdetailsDB.forEach(function(item){
        if (item.DocumentDetailId == DocumentDetailId){
            PutValues(item);
            return;
        }
    });

}


function Print(){

    if ( DetailChanged() ){
        ShowError('Nu puteti tipari documentul daca nu este salvat!');
        return;
    }
    var DocumentId = $('#DocumentId').val();
    window.open(baseUrl + "/printinvoice/" + DocumentId, "_blank");
}


    function getActionData(ActionType){
        var DocumentId = $('#DocumentId').val();

        return {DocumentId: DocumentId};

    }

    // function ActionConfirm(ActionType, DoIt){
        
    //     if (ActionType == "Validate"){
    //         SuccessMsg = 'Documentul s-a validat cu succes!';
        
    //         Data.SerialId = $('#SerialNumberId').val();
    //         Data.Serial = $('#SerialNumberId option:selected' ).text();

    //         confirm('Doriti sa validati documentul?', DoIt);
    //     }
    //     else
    //         confirm("Doriti sa executati actiunea " + ActionType + "?", DoIt);
        
    // }




function invalidateInputForms(){
    var State = $("#State").val();

    if (State != "Created" && State != ""){
        // validat sau anulat
        $('#detailformmodal').find('input, select, textarea').addClass('readonly');
        $('#detailform').find('input, select, textarea').addClass('readonly');
        $('body').find('button.editable').addClass('readonly');
        if(!IsSuperUser)
          $("#action_delete").attr("hidden", true);

        
    }else{
        $('#detailformmodal').find('input, select, textarea').removeClass('readonly');
        $('#detailform').find('input, select, textarea').removeClass('readonly');
        $('body').find('button.editable').removeClass('readonly');
        if(!IsSuperUser)
          $("#action_delete").attr("hidden", false);

    }

}

function ValidateDelete(){
    if (IsSuperUser)
        return true;
    var State = $("#State").val();
    if (!(State == "Created" || State == "")){
        ShowError('Nu se poate sterge un document validat sau anulat!')
    }
    return State == "Created" || State == "";
}

function uploadajax(){


    form_data = new FormData();

    if ($('#theFile')[0].files.length == 0){
        ShowError('Alegeti un fisier!');
        return;
    }

    form_data.append("thefile", $('#theFile')[0].files[0]);
    form_data.append("DocumentId", $('#DocumentId').val()),
    form_data.append("Version",  $('#version').val()),
    form_data.append("Description",  $('#attachdescription').val()),

    $('#theFile').val('');
    $('#attachdescription').val('');

    
    $.ajax({
              url:  baseUrl + '/ajaxuploaddocumentfile',
              cache: false,
              contentType: false,
              processData: false,
              async: true,
              data: form_data,
              type: 'POST',
              success: function (res, status) {
                      if (status == 'success') {

                        if (res == 'No file'){
                            ShowError('Fisierul nu s-a incarcat!');
                      }
                      else{

                          ShowSuccess('Fisierul s-a importat cu succes!');
                          $('#attachdiv').html(res)
                      }
                  }
              },
              error: function (res) {
                  ShowError(res);

              }
          })
    }

    var gAttachmentId = 0;

    function deleteattachment (AttachmentId){
        gAttachmentId = AttachmentId;
        confirm("Doriti sa stergeti atasamentul?", deleteattachmentdo);
    }

    function deleteattachmentdo(){
        AttachmentId = gAttachmentId;
        DocumentId = $('#DocumentId').val();

        $.ajax({
                url:  baseUrl + '/ajaxdeletedocumentfile',

                data: {AttachmentId: AttachmentId, DocumentId:DocumentId},
                type: 'POST',
                success: function (res, status) {
                    if (status == 'success') {

                        if (res == 'No file'){
                            ShowError('Fisierul nu s-a sters!');
                        }
                        else{

                            ShowSuccess('Fisierul s-a sters cu succes!');
                            $('#attachdiv').html(res)
                        }


                    }
                },
                error: function (res) {
                    ShowError('Eroare la stergere fisier');

                }
            })

    }

//-------------------------------------------------------------------------------------------

$( document ).ready(function() {


    $("#detailformmodal").validate( {

        excluded: [':disabled'],
        ignore:"",
        // rules: RequiredFields,
        // messages: RequiredMessages,
        errorElement: "em",
        errorPlacement: function ( error, element ) {
            // Add the `invalid-feedback` class to the error element
            error.addClass( "invalid-feedback" );
            if ( element.prop( "type" ) === "checkbox" ) {
                error.insertAfter( element.next( "label" ) );
            } else {
                error.insertAfter( element );
            }
        },
        highlight: function ( element, errorClass, validClass ) {
            $( element ).addClass( "is-invalid" ).removeClass( "is-valid" );
     
        },
        unhighlight: function (element, errorClass, validClass) {
            $( element ).addClass( "is-valid" ).removeClass( "is-invalid" );
     
        }
    } );

    $( "#detailformmodal" ).off( "submit" );
    $( "#detailformmodal" ).submit(function( event ) {
        event.preventDefault();
        SubmitDetailModal();
        
    });

    $('#buttonUpload').click(uploadajax)



});