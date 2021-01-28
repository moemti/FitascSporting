 

<div id= "gridfxinner">

     <div id="gridfxin">
        <table id="fxtable" class="table fxtable">
        <thead>
        <tr>
            <th>Data</th>
            <th>Curs</th>
            <th>Multiplier</th>
            
        </tr>
        </thead>
        <tbody>
        
         @foreach($fx as $f) 
            <tr>
            <td> {{ $f->Data  }}</td>
            <td> {{ $f->Value }}</td>
            <td> {{ $f->Multiplier}}</td>
            
        </tr>
        @endforeach  
            </tbody>
        </table>
    </div>
</div>


 


        <!-- Styles -->


        <!-- Chart code -->
        <script>
        am4core.ready(function() {

        // Themes begin
        am4core.useTheme(am4themes_animated);
        // Themes end

        // Create chart instance
        var chart = am4core.create("griddetailfx", am4charts.XYChart);

        // Add data
        chart.data = generateChartData();

        // Create axes
        var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
        dateAxis.renderer.minGridDistance = 50;

        var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

        // Create series
        var series = chart.series.push(new am4charts.LineSeries());
        series.dataFields.valueY = "Curs";
        series.dataFields.dateX = "Data";
        series.strokeWidth = 2;
        series.minBulletDistance = 10;
        series.tooltipText = "{valueY}";
        series.tooltip.pointerOrientation = "vertical";
        series.tooltip.background.cornerRadius = 20;
        series.tooltip.background.fillOpacity = 0.5;
        series.tooltip.label.padding(12,12,12,12)

        // Add scrollbar
        chart.scrollbarX = new am4charts.XYChartScrollbar();
        chart.scrollbarX.series.push(series);

        // Add cursor
        chart.cursor = new am4charts.XYCursor();
        chart.cursor.xAxis = dateAxis;
        chart.cursor.snapToSeries = series;


function generateChartData() {
    var chartData = [];
	

	
     @foreach($fx as $f) 

     	
        chartData.push({
                Data: '{{ $f->Data  }}',
                Curs: {{$f->Value}}
            });
    
    
		@endforeach  
        
    
    return chartData;
}

}); // end am4core.ready()
</script>

