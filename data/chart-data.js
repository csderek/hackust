window.onload = function () {
  $.getJSON('https://www.highcharts.com/samples/data/jsonp.php?filename=usdeur.json&callback=?', function (data) {
    // Create the chart
    data1 = [];
    for (var i = 0; i < data.length; i++) {
      data1.push({x: data[i][0], y: data[i][1]});
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

    var chart2 = new CanvasJS.Chart("bond-chart",
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
      
      data: data2  // random generator below
      
    });

    chart2.render();

    var chart3 = new CanvasJS.Chart("stock-chart",
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
      
      data: data3  // random generator below
      
    });

    chart3.render();

    $(".canvasjs-chart-credit").remove();
}

var limit2 = 5000;
var y2 = 24000;
var data2 = []; var dataSeries2 = { type: "line", xValueType: "dateTime" };
var dataPoints2 = [];
for (var i2 = 0; i2 < limit2; i2 += 1) {
  y2 += (Math.random() * 10 - 5);
  dataPoints2.push({
    x: 1488326400000 + i2 * 1050000,
    y: y2                
  });
}
dataSeries2.dataPoints = dataPoints2;
data2.push(dataSeries2); 

var limit3 = 100000;
var y3 = 400000;
var data3 = []; var dataSeries3 = { type: "line", xValueType: "dateTime" };
var dataPoints3 = [];
for (var i3 = 0; i3 < limit3; i3 += 1) {
  y3 += (Math.random() * 1000 - 500);
  dataPoints3.push({
    x: 1488326400000 + i3 * 1050000,
    y: y3                
  });
}
dataSeries3.dataPoints = dataPoints3;
data3.push(dataSeries3); 