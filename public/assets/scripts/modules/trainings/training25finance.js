HasDetails = false;
	
	urls = {
		saveurl: '/savetraining25financeajax',
		getmasterurl: '/gettraining25financesajax',
		getdetailurl: '/gettraining25financeajax',
		deleteurl: '/deletetraining25financeajax',
	
			
	};
	
	listdatafields=
		[
	    	{ name: 'ClubTransactionId', type: 'integer'},
			{ name: 'Date', type: 'string'},
			{ name: 'Name', type: 'string'},
			{ name: 'Person', type: 'string'},
			{ name: 'Value', type: 'integer'},
			{ name: 'IsPaid', type: 'integer'},
			{ name: 'IsClay', type: 'integer'},
			{ name: 'IsValidat', type: 'integer'},
			{ name: 'Description', type: 'string'},
			
	  
	       
	    ]
	
	listdatacolumns=
		[
			 { text: 'Colector', datafield: 'Name',  width:'25%', aggregates: ["count"]},
			 { text: 'Date', datafield: 'Date',  width:'10%',},
			 { text: 'Description', datafield: 'Description',  width:'25%',},
			 { text: 'From', datafield: 'Person',  width:'15%',},
			 { text: 'Value', datafield: 'Value', width: '10%',  aggregates: ["sum"],},
			 { text: 'Paid', datafield: 'IsPaid', width: '5%',  columntype: 'checkbox'},
			 { text: 'Clay', datafield: 'IsClay', width: '5%',  columntype: 'checkbox'},
			 { text: 'Validated', datafield: 'IsValidat', width: '5%',  columntype: 'checkbox'},
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
	
	
		function DoValidateControls(){
			if (($('#IsValidat').prop( "checked") && (!IsSuperUser) )|| $('#IsClay').prop( "checked")){
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
			DoValidateControls();
		}

		function onDoNew(){
			DoValidateControls();
		}



    
	