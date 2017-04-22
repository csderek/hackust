window.onload = function () {
  var chart = new CanvasJS.Chart("eur-usd-chart",
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
      
      data: data  // random generator below
      
    });

    chart.render();

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

var limit = 100000;    //increase number of dataPoints by increasing this  
var y = 0;
var data = []; var dataSeries = { type: "line" };
var dataPoints = [];
for (var i = 0; i < limit; i += 1) {
  y += (Math.random() * 10 - 5);
  dataPoints.push({
    x: i - limit / 2,
    y: y                
  });
}
dataSeries.dataPoints = dataPoints;
data.push(dataSeries); 

var limit2 = 100000;
var y2 = 0;
var data2 = []; var dataSeries2 = { type: "line" };
var dataPoints2 = [];
for (var i2 = 0; i2 < limit2; i2 += 1) {
  y2 += (Math.random() * 10 - 5);
  dataPoints2.push({
    x: i2 - limit2 / 2,
    y: y2                
  });
}
dataSeries2.dataPoints = dataPoints2;
data2.push(dataSeries2); 

var limit3 = 100000;
var y3 = 0;
var data3 = []; var dataSeries3 = { type: "line" };
var dataPoints3 = [];
for (var i3 = 0; i3 < limit3; i3 += 1) {
  y3 += (Math.random() * 10 - 5);
  dataPoints3.push({
    x: i3 - limit3 / 2,
    y: y3                
  });
}
dataSeries3.dataPoints = dataPoints3;
data3.push(dataSeries3); 