
    HasDetails = false;

	var documentdetailsSource;


	RequiredFields = {

    }

	RequiredMessages ={

	}
	


	urls = {
		saveurl: '/savenoteajax',
		getmasterurl: '/getnotesajax',
		getdetailurl: '/getnoteajax',
		deleteurl: '/deletenoteajax',
		getdetaillisturl: '/getnotedetailsajax',
		actionurl:'/notedoactionajax'
	};

	listdatafields=[
		{ name: 'Title', type: 'string' },
        { name: 'Tags', type: 'string' },
        { name: 'Text', type: 'string' },
		{ name: 'IsLink', type: 'integer' },
		{ name: 'NoteId', type: 'integer' },
	]

    var linkrenderer = function (row, column, value) {

        var rowid = $('#masterlist').jqxGrid('getrowid', row);
        var data = $('#masterlist').jqxGrid('getrowdatabyid', rowid);

        if (data['IsLink'] == 1) {
           // value = value.substring(0, value.indexOf('#'));
        
            var format = { target: '"_blank"' };
            var value = $.jqx.dataFormat.formatlink(value, format);
           
        }else{


		}
      

        return '<div class="jqx-grid-cell-left-align" style="margin-top: 8px;">'+ value +'</div>';
    }

	listdatacolumns=[
		{ text: 'Title', datafield: 'Title', width:'30%'},
		{ text: 'Tags', datafield: 'Tags', width: '30%'},
		{ text: 'Text', datafield: 'Text', width: '40%',  cellsrenderer: linkrenderer},
        { text: 'NoteId', datafield: 'NoteId', width: '20%', hidden: true},
        { text: 'IsLink', datafield: 'IsLink', width: '20%', hidden: true}
    ]


	
	


	// _AfterRetreiveDetail =  AfterRetreiveDetail;

	// AfterRetreiveDetail = function(){
	// 	_AfterRetreiveDetail();
	// 	$("textarea").each(function(){
	// 		do_resize($(this)[0]);

	// 	});
	// }

	
//-------------------------------------------------------------------------------		

	$(document).ready(function() {

        $("#masterlist").jqxGrid(
			{
				width: '100%',
				source: source,
				pageable: false,
				autoheight: false,
				sortable: true,
				altrows: true,
				groupable: true,
				filterable: true,
				enabletooltips: true,
				editable: false,
				columnsresize: true,
				selectionmode: selectMasterMuliple? 'multiplerowsextended':'singlerow',
				showtoolbar: false,
				theme: 'energyblue',

				columns: listdatacolumns,
			});
		  

		

	});




