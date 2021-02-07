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
			{ name: 'Name', type: 'string'},
	    	{ name: 'Price', type: 'integer'},
			{ name: 'Qty', type: 'integer'},
			{ name: 'Value', type: 'integer'},
	    	{ name: 'IsPaid', type: 'integer'},
			{ name: 'IsValidat', type: 'integer'},
			
	  
	       
	    ]
	
	listdatacolumns=
		[
			 { text: 'Name', datafield: 'Name',  width:'30%', aggregates: ["count"]},
			 { text: 'Date', datafield: 'Date',  width:'20%',},
			 { text: 'Quantity', datafield: 'Qty', width: '10%', aggregates: ["sum"],},
			 { text: 'Value', datafield: 'Value', width: '20%',  aggregates: ["sum"],},
			 { text: 'Paid', datafield: 'IsPaid', width: '10%',  columntype: 'checkbox'},
			 { text: 'Validated', datafield: 'IsValidat', width: '10%',  columntype: 'checkbox'},
			 { text: 'ClubTransactionId', datafield: 'ClubTransactionId', hidden: true},
			//  {
			// 	text: 'Total', datafield: 'total', aggregates: ["sum"], cellsalign: 'right', cellsformat: 'c2',
			// 	cellsrenderer: function (row, column, value, defaultRender, column, rowData) {
			// 		if (value.toString().indexOf("Sum") >= 0) {
			// 			return defaultRender.replace("Sum", "Total");
			// 		}
			// 	},
			// 	aggregatesrenderer: function (aggregates, column, element) {
			// 		var renderstring = '<div style="position: relative; margin-top: 4px; margin-right:5px; text-align: right; overflow: hidden;">' + "Total" + ': ' + aggregates.sum + '</div>';
			// 		return renderstring;
			// 	}
			// }
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

			if(IsSuperUser)
				$('#PersonId').attr("disabled", false);
			
		
		}

		function AfterRetreiveDetail(){
  
			DoPaidControls(); 
			DoValidateControls();
			
		   
		}

		function onDoNew(){
			DoPaidControls(); 
			DoValidateControls();
		}


		function GetPersonInfo(){

				Data = {PersonId: $('#PersonId').val()};

    			$.ajax({
    	            type: 'POST',

    	            url: baseUrl + '/getPersonInfo',
    	            data: Data,
    	            success: function (data) {
						$('#Price').val(data.Price)
						

    	            }
    	        });


		}

		$(document).ready(function () {
				$('#IsPaid').change( function(){
											DoPaidControls()
										}
									)

				$('#PersonId').change( function(){
											GetPersonInfo()
										}
									)
			}
		);
	

    
	