/////////////////////////////
// NEW Production Chart
/////////////////////////////
function drawChart() {
  var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/16q-bSvIapnCXyqv3YU5fO4M2xDf1GxATscDXPjf8xGY/gviz/tq?gid=1078118238&range=A1:F11&headers=1');
  query.setRefreshInterval(5);
  query.send(handleQueryResponse);
}

function handleQueryResponse(response) {
  if (response.isError()) {
        alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
      }

  var data = response.getDataTable();
  data.insertColumn( 1, {
    type: 'string',
    role: 'annotation'
  });
  data.insertColumn( 2, {
    type: 'string',
    role: 'annotationText'
  });
  data.setValue(5, 1, 'March 1');
  data.setValue(5, 2, 'Risk free templates completed');

  var chart = new google.visualization.ComboChart(document.getElementById('combochart'));
  chart.draw(data, {
    height: '100%',
    width: '100%',
    isStacked: true,
    annotations: {
      style: 'line'
     },
     series: {
         0: { type: 'bars', color: '#768e70' }, // Sent Weekly
         1: { type: 'bars', color: '#f5a65b' }, // Change sent
         2: { color: '#f15152', lineWidth: 3 }, // Sent Total
         3: { color: '#1b4079', lineWidth: 3},  // Approved
         4: { color: 'black', lineWidth: 3}     // Change requested
     },
     legend: {position: 'bottom', textStyle: {color: 'dark-gray', fontSize: 12}},
    });
}

/////////////////////////////
// Hour Utlization Chart
/////////////////////////////
function drawHoursChart() {
  var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/16q-bSvIapnCXyqv3YU5fO4M2xDf1GxATscDXPjf8xGY/gviz/tq?gid=1078118238&range=I1:K11&headers=1');
  query.setRefreshInterval(5);
  query.send(handleHoursQueryResponse);
}

function handleHoursQueryResponse(response) {
  if (response.isError()) {
        alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
      }

  var hoursData = response.getDataTable();
  hoursData.insertColumn( 1, {
    type: 'string',
    role: 'annotation'
  });
  hoursData.insertColumn( 2, {
    type: 'string',
    role: 'annotationText'
  });
  hoursData.setValue(5, 1, 'March 1 Deadline');
  hoursData.setValue(5, 2, 'Advanced Templates Due');
  hoursData.setValue(6, 1, 'Overflow received');
  hoursData.setValue(6, 2, '17x \'Overflow\' templates received');
  hoursData.setValue(8, 1, 'Overflow received');
  hoursData.setValue(8, 2, '4x \'Overflow\' templates received');

  var hoursChart = new google.visualization.ComboChart(document.getElementById('hourschart'));
  hoursChart.draw(hoursData, {
    height: '100%',
    width: '100%',
    isStacked: true,
    annotations: {
      style: 'line',
     },
     series: {
         0: { color: '#768e70', type: 'bars' },
         1: { color: '#cccccc', type: 'bars'}
     },
     legend: {position: 'bottom', textStyle: {color: 'dark-gray', fontSize: 12}},
    });
}


/////////////////////////////
// Overview Pie Chart
/////////////////////////////
function drawRiskChart() {
  var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1g5luYrUbpFXWLCInZaWxr1bBU5Qv4i3XfJRzGnXa8bY/gviz/tq?gid=1952206665&range=M29:N32&headers=1');
  query.setRefreshInterval(5);
  query.send(handleRiskQueryResponse);
}

function handleRiskQueryResponse(response) {
  if (response.isError()) {
        alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
      }

  var riskData = response.getDataTable();
  var riskChart = new google.visualization.PieChart(document.getElementById('risk_chart'));
  riskChart.draw(riskData, {
    width: '100%',
    height: '100%',
    chartArea: {
      left: 30,
      top: 20
    },
    slices: {
      0: { color: '#dddddd' },
      1: { color: '#cccccc' },
      2: { color: '#f15152' }
    },
    legend: 'bottom'
  });
}

/////////////////////////////
// NEW Dev Status Bar chart
/////////////////////////////
function drawStatusChart() {
  var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/16q-bSvIapnCXyqv3YU5fO4M2xDf1GxATscDXPjf8xGY/gviz/tq?gid=1313464239&range=B246:C253');
  query.setRefreshInterval(5);
  query.send(handleStatusQueryResponse);
}

function handleStatusQueryResponse(response) {
  if (response.isError()) {
        alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
      }

  var statusData = response.getDataTable();

  statusData.insertColumn( 2, {type: 'string', role: 'style'});
  statusData.insertColumn( 3, {type: 'string', role: 'annotation'})
  statusData.setValue(0,2,'color: #1b4079');
  statusData.setValue(1,2,'color: #4d7c8a');
  statusData.setValue(2,2,'color: #7f9c96');
  statusData.setValue(3,2,'color: #b87b41');
  statusData.setValue(4,2,'color: #768e70');
  statusData.setValue(5,2,'color: #f5a65b');
  statusData.setValue(6,2,'color: #cbdf90');
  statusData.setValue(7,2,'color: #f15152');

  var statusChart = new google.visualization.BarChart(document.getElementById('status_chart'));
  statusChart.draw(statusData, {
    width: '100%',
    height: '100%',
    legend: 'none',
    animation: {
      duration: 1200
    },
    hAxis: {
      minValue: 8,
    },
    chartArea: {
      top: 20
    },
  });
}

/////////////////////////////
// NEW Overflow Status Bar Chart
/////////////////////////////
function drawStudioChart() {
  var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/16q-bSvIapnCXyqv3YU5fO4M2xDf1GxATscDXPjf8xGY/gviz/tq?gid=1313464239&range=E246:F253');
  query.setRefreshInterval(5);
  query.send(handleStudioQueryResponse);
}

function handleStudioQueryResponse(response) {
  if (response.isError()) {
        alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
      }

  var studioData = response.getDataTable();

  studioData.insertColumn( 2, {type: 'string', role: 'style'});
  studioData.insertColumn( 3, {type: 'string', role: 'annotation'})
  studioData.setValue(0,2,'color: #1b4079');
  studioData.setValue(1,2,'color: #4d7c8a');
  studioData.setValue(2,2,'color: #7f9c96');
  studioData.setValue(3,2,'color: #b87b41');
  studioData.setValue(4,2,'color: #768e70');
  studioData.setValue(5,2,'color: #f5a65b');
  studioData.setValue(6,2,'color: #cbdf90');
  studioData.setValue(7,2,'color: #f15152');

  var studioChart = new google.visualization.BarChart(document.getElementById('studio_chart'));

  studioChart.draw(studioData, {
    width: '100%',
    height: '100%',
    legend: 'none',
    animation: {
      duration: 1200,
    },
    hAxis: {
      minValue: 8,
    },
    chartArea: {
      top: 20
    },
  });
}

/////////////////////////////
// 'By Wave' Chart
/////////////////////////////
function drawWaveOneChart() {
  var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/16q-bSvIapnCXyqv3YU5fO4M2xDf1GxATscDXPjf8xGY/gviz/tq?gid=1313464239&range=K246:M249');
  query.setRefreshInterval(5);
  query.send(handleWaveQueryResponse);
}

function handleWaveQueryResponse(response) {
  if (response.isError()) {
        alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
      }

  var waveOneData = response.getDataTable();
  var waveOneChart = new google.visualization.BarChart(document.getElementById('waveone_chart'));
  waveOneChart.draw(waveOneData, {
    height: '100%',
    width: '100%',
    animation: {
      duration: 1200
    },
    chartArea: {
      left: 50,
      top: 20,
    },
    series: {
      1: { color: '#f15152' }, // On Going
      0: { color: '#dddddd' }, // Completed
    },
    legend: 'bottom'
  });
}

/////////////////////////////
// Dev-Active Status Table
/////////////////////////////
function drawActivityTable() {
  var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/16q-bSvIapnCXyqv3YU5fO4M2xDf1GxATscDXPjf8xGY/gviz/tq?gid=1078118238&range=A25:B35&headers=1');
  query.setRefreshInterval(5);
  query.send(handleActivityTableResponse);
}

function handleActivityTableResponse(response) {
  if (response.isError()) {
    alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }

  var activityData = response.getDataTable();
  var table = new google.visualization.Table(document.getElementById('dev_status'));
  table.draw(activityData, {
    height: '100%',
    width: '100%',
  });
}

/////////////////////////////
// Dev-Gauge
/////////////////////////////
function drawGauge() {
  var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/16q-bSvIapnCXyqv3YU5fO4M2xDf1GxATscDXPjf8xGY/gviz/tq?gid=1078118238&range=D25:E35&headers=1');
  query.setRefreshInterval(5);
  query.send(handleGaugeResponse);
}

function handleGaugeResponse(response) {
  if (response.isError()) {
    alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }

  var gaugeData = response.getDataTable();
  var gauge = new google.visualization.Gauge(document.getElementById('gauge_div'));

  var gaugeOptions = {
    width: '100%', height: 300,
    min: 0, max: 5,
    redFrom: 4, redTo: 5,
    yellowFrom: 2, yellowTo: 4,
    majorTicks: ['0','1','2','3','4','5'],
    minorTicks: 4,
    animation:{
        duration: 1000
       },
  };

  gauge.draw(gaugeData, gaugeOptions);

  // setInterval(function(){
  //   gauge.draw(gaugeData, gaugeOptions);
  // }, 2500)
}

/////////////////////////////
// QA-Gauge
/////////////////////////////
function drawQAGauge() {
  var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/16q-bSvIapnCXyqv3YU5fO4M2xDf1GxATscDXPjf8xGY/gviz/tq?gid=1078118238&range=D36:E36');
  query.setRefreshInterval(5);
  query.send(handleQAGaugeResponse);
}

function handleQAGaugeResponse(response) {
  if (response.isError()) {
    alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }

  var gaugeQAData = response.getDataTable();
  var gaugeQA = new google.visualization.Gauge(document.getElementById('gauge_QA'));

  var gaugeQAOptions = {
    width: 400, height: 120,
    min: 0, max: 10,
    redFrom: 8, redTo: 10,
    yellowFrom: 4, yellowTo: 8,
    majorTicks: ['QUIET','','','','','BUSY'],
    minorTicks: 0,
    animation:{
        "startup": true,
        duration: 2000,
       },
  };

  gaugeQA.draw(gaugeQAData, gaugeQAOptions);

  // setInterval(function(){
  //   gauge.draw(gaugeData, gaugeOptions);
  // }, 2500)
}
