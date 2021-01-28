
    
    <link rel="stylesheet" href={{asset("assets/plugins/smart/source/styles/smart.default.css")}} type="text/css" />
    <link rel="stylesheet" type="text/css" href={{asset("assets/plugins/smart/styles/demos.css")}} />
    
    <link rel="stylesheet" type="text/css" href={{asset("assets/demo/styles.css")}} />
    
 	
        <div class="row">
            <div class="mr-3 ml-3 mt-2">
                <label>Select view:</label>
                    
                <smart-drop-down-list>
                    <smart-list-item >year</smart-list-item>
                    <smart-list-item>month</smart-list-item>
                    <smart-list-item selected>week</smart-list-item>
                    <smart-list-item>resource</smart-list-item>
                </smart-drop-down-list>
            </div>
                        



            <button id="loadGantt" class="btn">Load</button>

            <button id="saveGantt" class="btn">Save</button>

        </div>

        <div class="main-card mb-12 card">
            <div class="card-body">
                <div class="viewport">
                    <smart-gantt-chart></smart-gantt-chart>
                </div>
            </div>
        </div>

 

    <!-- scripts -->  
    <script src={{asset("assets/plugins/smart/source/modules/smart.ganttchart.js")}}></script> 
    <script src={{asset("assets/scripts/modules/PM/task/gantt.js")}}></script>	
	

