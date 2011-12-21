function makeCharts() {
	var chart = new Highcharts.Chart({
	    chart: {
	        renderTo: 'charts',
	        backgroundColor: "rgba(0,0,0,0.5)",
	        defaultSeriesType: 'line'
	    },
	    xAxis: {
	        categories: ['A', 'B', 'C']
	    },
	    yAxis: {   
	    },
	    title: {
        text: 'Querry Output'  
		},
	    plotOptions: {
	    },
	    series: [{
	        data: [29.9, 71.5, 106.4]        
	    }]
	});
}
