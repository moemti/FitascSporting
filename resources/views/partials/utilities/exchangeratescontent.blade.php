
        <!-- <script src={{asset("/assets/js/chartist.min.js")}}></script>
        <script src={{asset("/assets/plugins/chart.js/dist/Chart.min.js")}}></script> -->
        <link rel="stylesheet" href={{asset("/assets/plugins/jqwidgets/styles/jqx.base.css")}} type="text/css" />
        <link rel="stylesheet" href={{asset("/assets/plugins/jqwidgets/styles/jqx.energyblue.css")}} type="text/css" />


        <script type="text/javascript" src={{asset("/assets/plugins/jqwidgets/jqxcore.js")}}></script>
        <script type="text/javascript" src={{asset("/assets/plugins/jqwidgets/jqxdata.js")}}></script> 
        <script type="text/javascript" src={{asset("/assets/plugins/jqwidgets/jqxbuttons.js")}}></script>
        <script type="text/javascript" src={{asset("/assets/plugins/jqwidgets/jqxscrollbar.js")}}></script>
        <script type="text/javascript" src={{asset("/assets/plugins/jqwidgets/jqxmenu.js")}}></script>
        <script type="text/javascript" src={{asset("/assets/plugins/jqwidgets/jqxgrid.js")}}></script>
        
        <script type="text/javascript" src={{asset("/assets/plugins/jqwidgets/jqxgrid.edit.js")}}></script>  
        <script type="text/javascript" src={{asset("/assets/plugins/jqwidgets/jqxgrid.selection.js")}}></script>
        <script type="text/javascript" src={{asset("/assets/plugins/jqwidgets/jqxgrid.filter.js")}}></script> 
        
        
        
        <script type="text/javascript" src={{asset("/assets/plugins/jqwidgets/jqxlistbox.js")}}></script>
        <script type="text/javascript" src={{asset("/assets/plugins/jqwidgets/jqxdropdownlist.js")}}></script>
        <script type="text/javascript" src={{asset("/assets/plugins/jqwidgets/jqxcheckbox.js")}}></script>
        <script type="text/javascript" src={{asset("/assets/plugins/jqwidgets/jqxcalendar.js")}}></script>
        <script type="text/javascript" src={{asset("/assets/plugins/jqwidgets/jqxnumberinput.js")}}></script>
        <script type="text/javascript" src={{asset("/assets/plugins/jqwidgets/jqxdatetimeinput.js")}}></script>
        <script type="text/javascript" src={{asset("/assets/plugins/jqwidgets/globalization/globalize.js")}}></script>
        
        <script type="text/javascript" src={{asset("/assets/plugins/jqwidgets/jqxgrid.grouping.js")}}></script>
   		<script type="text/javascript" src={{asset("/assets/plugins/jqwidgets/jqxgrid.selection.js")}}></script> 
    	<script type="text/javascript" src={{asset("/assets/plugins/jqwidgets/jqxgrid.sort.js")}}></script>
    	<script type="text/javascript" src={{asset("/assets/plugins/jqwidgets/jqxgrid.columnsresize.js")}}></script>
    	<script type="text/javascript" src={{asset("/assets/plugins/jqwidgets/jqxgrid.aggregates.js")}}></script>
    	<script type="text/javascript" src={{asset("/assets/plugins/jqwidgets/jqxdropdownlist.js")}}></script>
    	
    	
    	<!-- Resources -->
        <script src={{asset("/assets/plugins/@amcharts/amcharts4/core.js")}}></script>
        <script src={{asset("/assets/plugins/@amcharts/amcharts4/charts.js")}}></script>
        <script src={{asset("/assets/plugins/@amcharts/amcharts4/themes/animated.js")}}></script> 
            	
     
        <script type="text/javascript" src={{asset("/assets/scripts/modules/utilities/exchange.js")}}></script>



<div class="app-main__inner">
    <div class="app-page-title">
        <div class="page-title-wrapper">
            <div class="page-title-heading">
                <div class="page-title-icon">
                    <i class="pe-7s-medal icon-gradient bg-tempting-azure"></i>
                </div>
                <div>{{trans('general.Exchangerates')}}
                <div class="page-title-subheading">{{trans('general.ExchangeratesDescription')}}</div>
                </div>
            </div>
            
            <div class="page-title-actions">
            	

                <button id="downloadexchange"  class="mb-2 mr-2 btn-icon btn-shadow btn-outline-2x btn btn-outline-dark">
                    <i class="lnr-earth btn-icon-wrapper"> </i>{{trans('general.downloadexchange')}}
                </button>
               
            </div>   
         </div>
    </div>
    
    <div class="main-card mb-3 card">
        <div class="card-header">
            <div class="col-md-1">
                    <label for="valuta">Currency</label>
                    <select class="form-control-sm form-control mr-3" id="valuta" name="valuta">
                    @foreach($currencies as $c) 
                        <option value="{{$c->CurrencyId}}" {{$c->Symbol=='EUR'?'selected':''}} >{{$c->Symbol}}</option>
                    @endforeach   
                    </select>
            </div>

            <div class="col-md-2">
                    <label for="StartDate">From</label>
                    <div id="StartDate" ></div>
            </div>

            <div class="col-md-2">
                    <label for="EndDate">To</label>
                    <div id="EndDate" ></div>
            </div>
            <div class="col-md-3">
                <button  id="getexchange"  class="mt-2 btn-icon btn btn-info"><i class="fa fa-filter .btn-icon-wrapper"> </i> Filter</button>
            </div>
        		
                
                
                
        </div>
        <div class="card-body">
            <div class="form-row">
                <div class="col-md-8">
                    <div id="griddetailfx" style="height : 500px;"></div>
                </div>   
                <div class="col-md-4">
                    <div id="gridfx"></div>
                </div>
            </div>
        
        </div>
    </div> 

        
    

</div>

         