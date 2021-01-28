
@push('css')
   	<link rel="stylesheet" href={{asset("/assets/plugins/jqwidgets/styles/jqx.base.css")}} type="text/css" />
   	<link rel="stylesheet" href={{asset("/assets/plugins/jqwidgets/styles/jqx.energyblue.css")}} type="text/css" />
@endpush



	<script type="text/javascript" src={{asset("/assets/plugins/jqwidgets/jqxcore.js")}}></script>
    <script type="text/javascript" src={{asset("/assets/plugins/jqwidgets/jqxdata.js")}}></script>
    <script type="text/javascript" src={{asset("/assets/plugins/jqwidgets/jqxbuttons.js")}}></script>
    <script type="text/javascript" src={{asset("/assets/plugins/jqwidgets/jqxscrollbar.js")}}></script>
    <script type="text/javascript" src={{asset("/assets/plugins/jqwidgets/jqxmenu.js")}}></script>
    <script type="text/javascript" src={{asset("/assets/plugins/jqwidgets/jqxcheckbox.js")}}></script>
    <script type="text/javascript" src={{asset("/assets/plugins/jqwidgets/jqxlistbox.js")}}></script>
    <script type="text/javascript" src={{asset("/assets/plugins/jqwidgets/jqxdropdownlist.js")}}></script>
    <script type="text/javascript" src={{asset("/assets/plugins/jqwidgets/jqxgrid.js")}}></script>
    <script type="text/javascript" src={{asset("/assets/plugins/jqwidgets/jqxgrid.sort.js")}}></script>
    <script type="text/javascript" src={{asset("/assets/plugins/jqwidgets/jqxgrid.pager.js")}}></script>
    <script type="text/javascript" src={{asset("/assets/plugins/jqwidgets/jqxgrid.selection.js")}}></script>
    <script type="text/javascript" src={{asset("/assets/plugins/jqwidgets/jqxgrid.edit.js")}}></script>
    <script type="text/javascript" src={{asset("/assets/plugins/jqwidgets/jqxgrid.columnsresize.js")}}></script>
    <script type="text/javascript" src={{asset("/assets/plugins/jqwidgets/jqxgrid.filter.js")}}></script>
    <script type="text/javascript" src={{asset("/assets/plugins/jqwidgets/jqxgrid.grouping.js")}}></script>
    <script type="text/javascript" src={{asset("/assets/plugins/jqwidgets/jqxfileupload.js")}}></script>



    <script type="text/javascript" src={{asset("/assets/scripts/modules/clients/clientdocument.js")}}></script>
    @stack('documentscript')

    <script>
    	var data =  @JSON($documents)

    		$( document ).ready(function() {
			    $( "#clientdocumentform" ).validate( {
			        rules: {
			        	date: "required",
			        	number: "required",
			            customer: "required"
			        },
			        messages: {
			        	date: "{{trans('clientdocument.EnterDate')}}",
			        	number: "{{trans('clientdocument.EnterNumber')}}",
			            customer: "{{trans('clientdocument.EnterClient')}}",
			        },
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

			});

    </script>




<div class="app-main__inner">
    <div class="app-page-title">
        <div class="page-title-wrapper">
            <div class="page-title-heading">
                <div class="page-title-icon">
                    <i class="pe-7s-medal icon-gradient bg-tempting-azure"></i>
                </div>
                <div>@stack('title')
                <div class="page-title-subheading">@stack('description')</div>
                </div>
            </div>
            <div class="page-title-actions">

                <button type="button" id="customfilter" data-toggle="tooltip" title="{{trans('general.customfilter')}}" data-placement="bottom" class="btn-shadow mr-3 btn btn-dark justlist">
                    <i class="fa fa-filter"></i>
                </button>
                <div class="d-inline-block dropdown justlist" >
                    <button type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="btn-shadow dropdown-toggle btn btn-info">
                        <span class="btn-icon-wrapper pr-2 opacity-7">
                            <i class="fa fa-filter fa-w-20"></i>
                        </span>

                        {{trans('general.filters')}}
                    </button>

                    <div tabindex="-1" role="menu" aria-hidden="true" class="dropdown-menu dropdown-menu-right">
                        <ul class="nav flex-column">


                         @foreach($counts[0] as $c)

                         <li class="nav-item">
                                <a class="nav-link" onclick="Refreshdocuments('state=\'{{$c->State}}\'')">
                                    <i class="nav-link-icon lnr-pencil"></i>
                                    <span>
                                          {{trans($c->State)}}
                                    </span>
                                    <div class="ml-auto badge badge-pill badge-info" id="filter-draft">{{$c->Count}}</div>
                                </a>
                            </li>

                        @endforeach




                            <li class="nav-item">
                                <a class="nav-link" onclick="Refreshdocuments('all')">
                                    <i class="nav-link-icon lnr-earth"></i>
                                    <span>
                                         {{trans('general.all')}}
                                    </span>
                                    <div class="ml-auto badge badge-pill badge-secondary" id="filter-all">{{$counts[1]}}</div>
                                </a>
                            </li>

                        </ul>
                    </div>
                </div>
                <button type="button" data-toggle="tooltip" class="btn-shadow mr-3 btn btn-primary " title="{{trans('general.add')}}" onclick="addNewdocument()"><i class="fa fa-plus"></i></button>

            </div>
         </div>
    </div>





     <div class="main-card mb-3 card">
        <div class="card-header">

			<ul class="body-tabs body-tabs-layout tabs-animated body-tabs-animated nav">
                <li class="nav-item">
                    <a role="tab" class="nav-link mol-nav-link active" id="tab-0"  href="#" onclick="goList()">
                        <span>List</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a role="tab" class="nav-link mol-nav-link" id="tab-1" href="#" onclick="goDetail()">
                        <span>Detail</span>
                    </a>
                </li>
            </ul>



        		<div class="d-inline-block dropdown justdetail invisible molactionbutton" >
                    <button type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="btn-shadow dropdown-toggle btn btn-info">
                        <span class="btn-icon-wrapper pr-2 opacity-7">
                            <i class="fa fa-angle-double-right fa-w-20"></i>
                        </span>
                        {{trans('general.actions')}}
                    </button>

                    <div tabindex="-1" role="menu" aria-hidden="true" class="dropdown-menu dropdown-menu-right">
                        <ul id="ul-actions" class="nav flex-column">

                        </ul>
                    </div>
                </div>



        </div>
        <div class="card-body">
            <div class="tab-content">
                <div class="tab-pane active mol-tab-pane" id="tab-list" role="tabpanel">
                	<div class="" id = "documentlist">

        			</div>
                </div>


                <div class="tab-pane mol-tab-pane" id="tab-detail" role="tabpanel">

                        <div class = "row detail-tab">
                            <ul class="body-tabs body-tabs-layout tabs-animated body-tabs-animated nav">
                                <li class="nav-item">
                                    <a role="tab" class="nav-link mol-nav-link-detail active" id="tab-00"  href="#" onclick="doMain()">
                                        <span>Main</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a role="tab" class="nav-link mol-nav-link-detail" id="tab-01" href="#" onclick="doMore()">
                                        <span>Others</span>
                                    </a>
                                </li>
                            </ul>
                        </div>

                    	<div class="mol-tab" id="clientdocumentdetail">

                    		<form  method="POST" id="clientdocumentform">

                               <input hidden name='clientdocumentid' id="clientdocumentid" value="">
                               <input hidden name='version' id="version" value="">
                                <div class="form-row">
                                    <div class="col-md-3">
                                        <div class="position-relative form-group"><label for="Date">Date</label><input name="date" id="date" placeholder="data" type="date" class="form-control" required></div>
                                    </div>
                                    <div class="col-md-2">
                                        <div class="position-relative form-group"><label for="number">Number</label><input name="number" id="number" placeholder="numar" type="number" class="form-control" required></div>
                                    </div>
                                    <div class="col-md-2">
                                        <div class="position-relative form-group"><label for="state">State</label><input disabled name="state" id="state" placeholder="State" type="text" class="form-control" ></div>
                                    </div>
                                </div>
                                 <div class="form-row">
                                     <div class="col-md-12">
                                         <label for="customer">Customer</label>
                                         <div class="input-group">
                                         	<select name="customer" id="customer" placeholder="customer" type="text" class="form-control"  required>
                                         	 <option value=""></option>
                                                 @foreach($clients as $c)
                                                        <option value="{{$c->OrganizationId}}"   >{{$c->Partner}}</option>
                                                 @endforeach
                                         	</select>
                                            <div class="input-group-append">
                                                <button class="btn btn-secondary" title="Add">
                                                <i class=" fa fa-plus"></i></button>
                                            </div>
                                          </div>
                                     </div>
                                </div>
                                <div class="form-row">
                                     <div class="col-md-12">
                                         <div class="position-relative form-group"><label for="Description">{{trans('general.description')}}</label><textarea required name="description" id="description" placeholder="Description" class="form-control required"></textarea></div>
                                     </div>
                                </div>

								<div class="d-block text-right card-footer">
                        			<a href="javascript:clientdocumentCancel();" class="btn-wide btn btn-secondary">Cancel</a>
                        			<button type ="submit" class="btn-wide btn btn-success">Save</button>
                    			</div>
                    		</form>
                        </div>

                        <div class="row mol-tab noactive" id="detail_others">
                            <div class="col-sm-12 col-lg-4">
                                <div class="mb-3 card">
                                    <div class="card-body">
                                        <div class="card-header text-right"><h5 class="card-title">Attachments</h5>
                                            <div class="w-100  text-right">
                                                <button data-toggle="modal" data-target="#AttachModal" class="btn-wide btn btn-success">Attach</button>
                                            </div>
                                        </div>
                                        <div class="scroll-area-sm">
                                            <div id="attachdiv" class="scrollbar-container">

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class ="col-sm-12 col-lg-4">
                                <div class="mb-3 card">
                                    <div class="card-body">
                                    <div class="card-header text-right"><h5 class="card-title">Versions</h5>
                                    </div>
                                        <div class="scroll-area-sm">
                                            <div class="scrollbar-container">
                                                <div id="versiondetail" class="vertical-timeline vertical-timeline--animate vertical-timeline--one-column versions">

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class ="col-sm-12 col-lg-4">
                                <div class="mb-3 card">
                                    <div class="card-body">
                                        <div class="card-header text-right"><h5 class="card-title">Related documents</h5>

                                        </div>
                                        <div class="scroll-area-sm">
                                            <div  id="relateddocuments"  class="scrollbar-container">

                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>

               </div>

            </div>
        </div>

    </div>
</div>

@push('dialogs')

<div id="AttachModal" class="modal fade " tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" style="display: none;" aria-hidden="false">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Attach file</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">X</span>
                </button>
            </div>
            <div class="modal-body">
            	<form id="uploadform" class="form-horizontal" method="post" name="uploadform" enctype="multipart/form-data">
                                    			{!! csrf_field() !!}
                	<input class="btn-primary" name="file" id="theFile" type="file" class="form-control-file">
                	<small>Description</small>
                	<input name="description" id="attachdescription" type="text" class="form-control-file">
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button id="buttonUpload" type="button" class="btn btn-primary">Upload</button>
            </div>
        </div>
    </div>
</div>
@endpush
