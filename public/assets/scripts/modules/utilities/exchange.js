



function FilterCurrency(){
    var CurrencyId =  $('#valuta').val();
    var StartDate = moment($("#StartDate").jqxDateTimeInput('getDate')).format('YYYYMMDD');
    var EndDate = moment($("#EndDate").jqxDateTimeInput('getDate')).format('YYYYMMDD');
   
     $.ajax({
         type: 'POST',

         url:  baseUrl +  '/getExchangeRateAjax',
         data: {CurrencyId: CurrencyId, StartDate: StartDate, EndDate: EndDate},
         error: function (xhr, ajaxOptions, thrownError) {
            
             
         },
         success: function (data) {

            $('#gridfx').html(data);         	  

         }
     });		
    
    
}

function DownloadBNR(){

    
    $.ajax({
        type: 'POST',

        url: baseUrl +  '/downloadBNR',
        data: {},
        error: function (xhr, ajaxOptions, thrownError) {
            
            
        },
        success: function (data) {

            ShowSuccess(data);   
            FilterCurrency();        	  

        }
    });	
}



$(document).ready(function () {

    $('#downloadexchange').click(DownloadBNR);

    $('#getexchange').click(FilterCurrency);


    $("#StartDate").jqxDateTimeInput({ width: '120px', height: '25px' });
	$("#EndDate").jqxDateTimeInput({ width: '120px', height: '25px' });

	var date = new Date();
	var threeMonthsAgo = moment(date).subtract(3, 'months');
	$("#StartDate").jqxDateTimeInput('setDate', threeMonthsAgo.toDate());

    FilterCurrency();
})