window.onload = function () {

    var chart = new CanvasJS.Chart("chartContainer", {
        theme:"light2",
        animationEnabled: true,
        title:{
            text: "Sales"
        },
        axisY :{
            title: "Number of Products Sold",
            suffix: "k"
        },
        toolTip: {
            shared: "true"
        },
        legend:{
            cursor:"pointer",
            itemclick : toggleDataSeries
        },
        data: [{
            type: "spline",
            visible: false,
            showInLegend: true,
            yValueFormatString: "##.00k",
            name: "Uttarakhand",
            dataPoints: [
                { label: "2017", y: 1.8 },
                { label: "2018", y: 2.3 },
                { label: "2019", y: 2.8 },
                { label: "2020", y: 3.1 }
            ]
        },
        {
            type: "spline", 
            showInLegend: true,
            visible: false,
            yValueFormatString: "##.00mn",
            name: "Uttar Pradesh",
            dataPoints: [
                { label: "2017", y: 1.2 },
                { label: "2018", y: 1.95 },
                { label: "2019", y: 2.8 },
                { label: "2020", y: 3.5 },
            ]
        }]
    });
    chart.render();
    
    function toggleDataSeries(e) {
        if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible ){
            e.dataSeries.visible = false;
        } else {
            e.dataSeries.visible = true;
        }
        chart.render();
    }
    
    }