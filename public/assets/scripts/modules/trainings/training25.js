HasDetails = false;
	
	urls = {
		saveurl: '/savetraining25ajax',
		getmasterurl: '/gettraining25sajax',
		getdetailurl: '/gettraining25ajax',
		deleteurl: '/deletetraining25ajax',
	
			
	};
	
	listdatafields=
		[
	    	{ name: 'ClubTransactionId', type: 'integer'},
	    	{ name: 'Date', type: 'string'},
	    	{ name: 'Price', type: 'integer'},
			{ name: 'Qty', type: 'integer'},
			{ name: 'Value', type: 'integer'},
	    	{ name: 'IsPaid', type: 'integer'},
	    	{ name: 'IsValidat', type: 'integer'},
	  
	       
	    ]
	
	listdatacolumns=
		[
			 { text: 'Date', datafield: 'Date',  width:'30%',},
			 { text: 'Quantity', datafield: 'Qty', width: '20%'},
			 { text: 'Value', datafield: 'Value', width: '30%'},
			 { text: 'Paid', datafield: 'IsPaid', width: '10%',  columntype: 'checkbox'},
			 { text: 'Validated', datafield: 'IsValidat', width: '10%',  columntype: 'checkbox'},
			 
			 
			 { text: 'ClubTransactionId', datafield: 'ClubTransactionId', hidden: true},
        ]
	

		function DoPaidControls(){
				$('#ColectorId').attr('required', $('#IsPaid').prop( "checked"));
				$("#ColectorId" ).removeClass('is-invalid');
		}
	
		function DoValidateControls(){
			if ($('#IsValidat').prop( "checked") && (!IsSuperUser)){
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

		function AfterRetreiveDetail(){
  
			DoPaidControls(); 
			DoValidateControls();
			
		   
		}

		$(document).ready(function () {
				$('#IsPaid').change( function(){
							DoPaidControls()
						}
					)
				
			}
		);
	

    
	