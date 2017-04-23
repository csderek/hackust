window.onload = function () {
  // EUR-USD Chart
  $.getJSON('https://www.highcharts.com/samples/data/jsonp.php?filename=usdeur.json&callback=?', function (data) {
    // Create the chart
    data1 = [];
    console.log(data[data.length-1][0]);
    for (var i = 0; i < data.length; i++) {
      if (data[i][0] > 1428710400*1000) {
        data1.push({x: data[i][0]+57110400000, y: data[i][1]});
      }
    }
    var chart1 = new CanvasJS.Chart('eur-usd-chart',
    {
      zoomEnabled: true,
      title:{
        text: "" 
      },
      animationEnabled: true,
      axisX:{
        labelAngle: 30
      },
      
      axisY :{
        includeZero:false
      },
      
      data: [
        {
          type: "line", 
          xValueType: "dateTime",
          dataPoints: data1
        }
      ]
      
    });
    chart1.render();
  });

  // Apple Stock Graph
  for (var i = 0; i < data2.length; i++) {
    data2[i].x = data2[i].x * 1000;
  }
  var chart2 = new CanvasJS.Chart("apple-chart",
  {
    zoomEnabled: true,
    title:{
      text: "" 
    },
    animationEnabled: true,
    axisX:{
      labelAngle: 30
    },
    
    axisY :{
      includeZero:false
    },
    
    data: [
      {
        type: "line", 
        xValueType: "dateTime",
        dataPoints: data2
      }
    ]  // random generator below
    
  });

  chart2.render();

  // Microsoft Stock Graph
  for (var i = 0; i < data3.length; i++) {
    data3[i].x = data3[i].x * 1000;
  }
  var chart3 = new CanvasJS.Chart("microsoft-chart",
  {
    zoomEnabled: true,
    title:{
      text: "" 
    },
    animationEnabled: true,
    axisX:{
      labelAngle: 30
    },
    
    axisY :{
      includeZero:false
    },
    
    data: [
      {
        type: "line", 
        xValueType: "dateTime",
        dataPoints: data3
      }
    ]  // random generator below
    
  });

  chart3.render();

  $(".canvasjs-chart-credit").remove();
}