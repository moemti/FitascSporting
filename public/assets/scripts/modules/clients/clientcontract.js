


	var documentdetailsSource;


	RequiredFields = {

    }

	RequiredMessages ={

	}
	


	urls = {
		saveurl: '/ajaxsavecontract',
		getmasterurl: '/ajaxgetcontracts',
		getdetailurl: '/ajaxgetcontract',
		deleteurl: '/deletecontract',
		getdetaillisturl: '/getcontractdetailsajax',
		actionurl:'/contractdoactionajax',
		actionlisturl: '/contractactionlistajax',

	};

	listdatafields=
	 
	[
		{ name: 'DocumentDate', type: 'Date' },
		{ name: 'DocumentNumber', type: 'integer' },
		{ name: 'Partner', type: 'string' },
		{ name: 'State', type: 'string' },
		{ name: 'DocumentId', type: 'integer' },
	]


	listdatacolumns=

	 [
		{ text: 'Date', datafield: 'DocumentDate', width:'20%'},
		{ text: 'Number', datafield: 'DocumentNumber', width: '20%'},
		{ text: 'Customer', datafield: 'Partner', width: '40%'},
		{ text: 'State', datafield: 'State', width: '20%'},
		{ text: 'DocumentId', datafield: 'DocumentId', width: '20%', hidden: true}
    ]

	selectMasterMuliple = true;

	detaildatafields= [
		{ name: 'Article', type: 'string'},
		{ name: 'Qtty', type: 'integer'},
		{ name: 'Price', type:'number'},
		{ name: 'Description', type:'string'},
		{ name: 'Value', type:'number'},
		{ name: 'ArticleId', type:'integer'},
		{ name: 'DocumentDetailId', type:'integer'},
		{ name: 'VATCode', type:'string'},
		{ name: 'VATCodeId', type:'integer'},
		{ name: 'VATProc', type:'number'},
		{ name: 'ProcDisc', type:'number'},
		{ name: 'ContractPrice', type:'number'},
		{ name: 'ContractExRate', type:'number'},
		{ name: 'BaseValue', type:'number'},
		{ name: 'VATValue', type:'number'},
		{ name: 'TotalValue', type:'number'},

			
	] 
	
	detailcolumns= [
                
		{text: 'Article', datafield: 'Article', width:'30%', editable:false},
		{text: 'Description', datafield: 'Description', width:'30%', editable:false},
		{text: 'Quantity', datafield: 'Qtty', width:'10%', editable:false},
		{text: 'Price', datafield: 'Price', width:'10%', editable:false},    
		{text: 'VAT Code', datafield: 'VATCode', width:'10%', editable:false},    
		{text: 'Total Value', datafield: 'TotalValue', width:'10%', editable:false},
		{text: 'DocumentDetailId', datafield: 'DocumentDetailId', hidden: true}
		
		
	]	

	function OnPutDetailDefault(){
		$('#detailformmodal').find('#CurrencyId, #ContractExRate').prop('required',false);

	//	$('#detailformmodal').find('#ProcDisc').val(0);
		
	}



	function  ComputeMaster(){
		var Base = 0.0;
		var VAT = 0.0;
		var Total = 0.0;

		documentdetailsDB.forEach(function(item, index){
			Base += Number(item.BaseValue);
			VAT += Number(item.VATValue);
			Total += Number(item.TotalValue);
		});

		$('#BaseValue').val(Base.toFixed(2));
		$('#VATValue').val(VAT.toFixed(2));
		$('#TotalValue').val(Total.toFixed(2));


	}

	function RecalcElem(){
		// se recalculeaza elementele daca s-a modificat ceva din master care influenteaza (ex discount pe factura)

		var Price = 0.0;
		var Qtty = 0;
		var Discount = 0.0;
		var DiscountMaster = 0.0
		var Base = 0.0;
		var Vat = 0.0;
		var ProcVAT = 0.0;
		var Total = 0.0; 

		
		
		DiscountMaster = $('#detailform').find('#ProcDiscInvoice').val();


		documentdetailsDB.forEach(function(item, index){

			ProcVAT = Number(item.VATProc);
			Discount = Number(item.ProcDisc);
			Price =  Number(item.Price);
			Qtty =  Number(item.Qtty);

			Base = Price * Qtty;
			Base = ((Base * (100 - Discount)/100) *  (100 - DiscountMaster)/100).toFixed(2);
			Vat = (Base * ProcVAT/100).toFixed(2);
			Total = (Number(Base) + Number(Vat)).toFixed(2);


			item.BaseValue = Base;
			item.VATValue = Vat;
			item.TotalValue = Total;
			
		});	

		PutDetails();
		ComputeMaster();

	}

	function CalcElem(sender){

		var Price = 0.0;
		var Qtty = 0;
		var Discount = 0.0;
		var DiscountMaster = 0.0
		var Base = 0.0;
		var Vat = 0.0;
		var ProcVAT = 0.0;
		var Total = 0.0; 

		
		ProcVAT = $('#VATCodeId').find('option:selected').attr('procVAT');
		DiscountMaster = $('#detailform').find('#ProcDiscInvoice').val();
		

		Price = $('#Price').val();
		Qtty = $('#Qtty').val();
		Discount = $('#ProcDisc').val();

		Base = Price * Qtty;
		Base = ((Base * (100 - Discount)/100) *  (100 - DiscountMaster)/100).toFixed(2);
		Vat = (Base * ProcVAT/100).toFixed(2);
		Total = (Number(Base) + Number(Vat)).toFixed(2);

		$('#detailformmodal').find('#BaseValue').val(Base);
		$('#detailformmodal').find('#VATValue').val(Vat);
		$('#detailformmodal').find('#TotalValue').val(Total);

	}

	

	function AfterRetreiveDetail(){
		$( "#ExRate" ).rules( "add", {
			required: $('#CurrencyId').val() != 1,
				
		});

		$( "#EUTypeId" ).rules( "add", {
			required: $('#CurrencyId').val() != 1,
		});
	}
	


	function BeforeSaveUpdates(){

		//facem validari true daca este bai

		return false;
	}

	function ChooseArticle(event){


		$('#ArticleModal').modal({
			backdrop: 'static',
			keyboard: false});

	}


	function CloseArticleModal(){
		$('#ArticleModal').modal("toggle");
	}
	
	function ChooseArticleModal(){

		var rowindex = $('#ArticleGrid').jqxGrid('getselectedrowindex');

		if (rowindex == -1){
			ShowError('Alegeti un articol');
			return;
		}

		var ArticleId = $('#ArticleGrid').jqxGrid('getrowdata', rowindex).ArticleId;
		var Name = $('#ArticleGrid').jqxGrid('getrowdata', rowindex).Name;
		var VATCodeId = $('#ArticleGrid').jqxGrid('getrowdata', rowindex).VATCodeId;

		$('#Article').val(Name);
		$('#ArticleId').val(ArticleId);
		$('#VATCodeId').val(VATCodeId);


		$('#ArticleModal').modal("toggle");
	}
	
	function CalculPretContract(){
		var PretContract = 0.0;
		var ExRate = 0.0;

		PretContract = $('#ContractPrice').val();
		ExRate = $('#ContractExRate').val();

		$('#Price').val((PretContract * ExRate).toFixed(2));
	}
		
	

	function BeforeDoAction(Data){

		if (Data.ActionType == 'doinvoice'){

			$( "#DoInvoiceForm" ).off( "submit" );
			$( "#DoInvoiceForm" ).submit(function( event ) {
				event.preventDefault();
				DoInvoice();
				
			});

			$('#DoInvoice').modal({

			backdrop: 'static',
			keyboard: false});
			return true;
		}
		else
			return false;
	}
	
	function DoInvoice(){

		var Valid = true; 
		Valid = $('#DoInvoiceForm').valid();

	 	if (!Valid){
			ShowError('Introduceti toate informatiile!'); 
			return Valid;
		}

		$('#DoInvoiceForm').valid();
		$('#DoInvoice').modal("toggle")
		var DocumentId = $('#DocumentId').val();
		var Data = {DocumentId: DocumentId};
		Data.ActionType = "doinvoice";
		Data.InvoiceDate = $('#InvoiceDate').val();
		Data.ExchangeRate = $('#InvoiceExRate').val();
	
		var SuccesMsg = 'The invoice was created!';
		DoActionAjax(Data, SuccesMsg, "doinvoice");
	}


	function BeforeDoListAction(Data){

		if (Data.ActionType == 'doinvoice'){
			$( "#DoInvoiceForm" ).off( "submit" );
			$( "#DoInvoiceForm" ).submit(function( event ) {
				event.preventDefault();
				DoInvoiceList();
				
			});


			$('#DoInvoice').modal({

			backdrop: 'static',
			keyboard: false});
			return true;
		}
		else
			return false;
	}
	


	function DoInvoiceList(){

		var Valid = true; 
		Valid = $('#DoInvoiceForm').valid();

	 	if (!Valid){
			ShowError('Introduceti toate informatiile!'); 
			return Valid;
		}

		$('#DoInvoiceForm').valid();
		$('#DoInvoice').modal("toggle")


		var rowindexes = $('#masterlist').jqxGrid('getselectedrowindexes');
		var boundrows = $('#masterlist').jqxGrid('getboundrows');
		var selectedrows = new Array();

		for(var i = 0; i < rowindexes.length; i++)
		{
			selectedrows.push( boundrows[rowindexes[i]][MasterPrimaryKey]);
		
		}
		var Data = {};
		Data.Keys = selectedrows;
		Data.ActionType = "doinvoice";
		Data.InvoiceDate = $('#InvoiceDate').val();
		Data.ExchangeRate = $('#InvoiceExRate').val();
	
		var SuccesMssg = 'The invoices were created!';
		DoListActionAjax(Data, SuccesMssg, "doinvoice");
	}

	// override
	function AfterSave(data, ActionType){
		if (data[3] != null)
		$('#relateddocuments').html(data[3]);

	}

	
//-------------------------------------------------------------------------------		

	$(document).ready(function() {

		$('#VATCodeId').change(function() {
			$('#VATCode').val($(this).find('option:selected').text());
			$('#VATProc').val($('#VATCodeId').find('option:selected').attr('procVAT'));

			CalcElem(this);
		});

		$('#Qtty, #Price, #ProcDisc').change(function() {
		
			CalcElem(this);
		});


		$('#ProcDiscInvoice').change(function() {
		
			RecalcElem()
		});
		
		
		$('#ContractPrice').change(function() {
			
			$('#CurrencyId').prop('required',$(this).val() > 0);
			
			if ($(this).val() > 0){
				CalculPretContract();
			}
			
		});

		$('#ContractExRate').change(function() {
			if ($('#ContractPrice').val() > 0){
				CalculPretContract();
			}
			
		});

	
		

		 // punem gridul de articole

		 var articlesSource =
		 {
			 localdata: articlesdata,
			 datatype: "array",
			 datafields: [   
				 { name: 'ArticleId', type: 'integer' },
				 { name: 'Name', type: 'string' },
				 { name: 'VATCodeId', type: 'integer'}
			 ],
		};
			 
		var	 listdatacolumns =
		 
			 [
				 { text: 'Name', datafield: 'Name', width:'100%'},
				 { text: 'ArticleId', datafield: 'ArticleId', hidden: true},
				 { text: 'VATCodeId', datafield: 'VATCodeId', hidden: true}
			 ]
		
		 
		 
		 $("#ArticleGrid").jqxGrid(
		 {
			 width: '100%',
			 source: articlesSource,                
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
			 columns: listdatacolumns,
		 });
	 
	 
		 $('#ArticleGrid').on('rowdoubleclick', function (event) {
	 		 ChooseArticleModal()
		  });
		  
		 

		  $('#CurrencyId').change(function (){
				
				// la contract nu este necesar cursul, daca nu are curs atunci se ia cursul zilei

				// $( "#ExRate" ).rules( "add", {
				// 	required: $('#CurrencyId').val() != 1,
				
					
				// });



				$( "#EUTypeId" ).rules( "add", {
					required: $('#CurrencyId').val() != 1,
				});

				$('#detailform').valid();
		  });


		  $( "#DoInvoiceForm" ).validate( {

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
				dotabvalidation(element);
			},
			unhighlight: function (element, errorClass, validClass) {
				$( element ).addClass( "is-valid" ).removeClass( "is-invalid" );
				dotabvalidation(element);
			}
		} );
		
		  
	});




