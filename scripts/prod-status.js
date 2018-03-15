/////////////////////////////
// Original Production Chart
/////////////////////////////
// function drawChart() {
//   var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/16q-bSvIapnCXyqv3YU5fO4M2xDf1GxATscDXPjf8xGY/gviz/tq?gid=1078118238&range=A1:G11&headers=1');
//   query.send(handleQueryResponse);
// }
//
// function handleQueryResponse(response) {
//   if (response.isError()) {
//         alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
//         return;
//       }
//
//   var data = response.getDataTable();
//   data.insertColumn( 1, {
//     type: 'string',
//     role: 'annotation'
//   });
//   data.insertColumn( 2, {
//     type: 'string',
//     role: 'annotationText'
//   });
//   data.setValue(5, 1, 'March 1');
//   data.setValue(5, 2, 'Risk free templates completed');
//
//   var chart = new google.visualization.LineChart(document.getElementById('combochart'));
//   chart.draw(data, {
//     height: '100%',
//     width: '100%',
//     annotations: {
//       style: 'line'
//      },
//      series: {
//          0: { color: '#cccccc' },
//          1: { color: '#f15152' },
//          2: { lineDashStyle: [5, 2], color: '#f15152', visibleInLegend: false },
//          3: { type: 'bars', color: '#768e70' },
//          4: { color: '#1b4079'},
//          5: { lineDashStyle: [5, 2], color: '1b4079', visibleInLegend: true }
//      },
//      legend: {position: 'right', textStyle: {color: 'dark-gray', fontSize: 12}}
//     });
// }

/////////////////////////////
// NEW Production Chart
/////////////////////////////
function drawChart() {
  var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/16q-bSvIapnCXyqv3YU5fO4M2xDf1GxATscDXPjf8xGY/gviz/tq?gid=1078118238&range=A1:H11&headers=1');
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
         0: { color: '', visibleInLegend: false },
         1: { color: '#f15152', lineWidth: 3 },
         2: { type: 'bars', color: '#768e70' },
         3: { type: 'bars', color: '#f5a65b' },
         4: { color: '#1b4079', lineWidth: 3},
         5: { lineDashStyle: [5, 2], color: '', visibleInLegend: false, dataOpacity: 0.1 },
         6: { color: 'black', lineWidth: 3}
     },
     legend: {position: 'right', textStyle: {color: 'dark-gray', fontSize: 12}},
    });
}


/////////////////////////////
// Risk / Completed Pie Chart
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
    width: 600,
    height: 400,
    slices: {
      0: { color: '#dddddd' },
      1: { color: '#cccccc' },
      2: { color: '#f15152' }
    }
  });
}

// /////////////////////////////
// // Dev Status Pie chart
// /////////////////////////////
// function drawStatusChart() {
//   var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/16q-bSvIapnCXyqv3YU5fO4M2xDf1GxATscDXPjf8xGY/gviz/tq?gid=1313464239&range=B246:C253');
//   query.send(handleStatusQueryResponse);
// }
//
// function handleStatusQueryResponse(response) {
//   if (response.isError()) {
//         alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
//         return;
//       }
//
//   var statusData = response.getDataTable();
//   var statusChart = new google.visualization.PieChart(document.getElementById('status_chart'));
//   statusChart.draw(statusData, {
//     width: 600,
//     height: 400,
//     slices: {
//       7: { color: '#f15152' }, // On Hold
//       6: { color: '#cbdf90' }, // In Queue
//       5: { color: '#f5a65b' }, // Change Requests (Dev)
//       4: { color: '#768e70' }, // Template Dev
//       3: { color: '#b87b41' }, // Change Requests (QA)
//       2: { color: '#7f9c96' }, // Template QA
//       1: { color: '#4d7c8a' }, // AM Review
//       0: { color: '#1b4079' }  // Client Review
//     }
//   });
// }

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
    width: 600,
    height: 400,
    legend: 'none',
    animation: {
      duration: 1200
    },
  });
}

/////////////////////////////
// Overflow Status Pie Chart
/////////////////////////////
// function drawStudioChart() {
//   var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/16q-bSvIapnCXyqv3YU5fO4M2xDf1GxATscDXPjf8xGY/gviz/tq?gid=1313464239&range=E246:F253');
//   query.send(handleStudioQueryResponse);
// }
//
// function handleStudioQueryResponse(response) {
//   if (response.isError()) {
//         alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
//         return;
//       }
//
//   var studioData = response.getDataTable();
//   var studioChart = new google.visualization.PieChart(document.getElementById('studio_chart'));
//   studioChart.draw(studioData, {
//     width: 600,
//     height: 400,
//     slices: {
//       7: { color: '#f15152' }, // On Hold
//       6: { color: '#cbdf90' }, // In Queue
//       5: { color: '#f5a65b' }, // Change Requests (Dev)
//       4: { color: '#768e70' }, // Template Dev
//       3: { color: '#b87b41' }, // Change Requests (QA)
//       2: { color: '#7f9c96' }, // Template QA
//       1: { color: '#4d7c8a' }, // AM Review
//       0: { color: '#1b4079' }  // Client Review
//     }
//   });
// }

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
    width: 600,
    height: 400,
    legend: 'none',
    animation: {
      duration: 1200
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
    series: {
      1: { color: '#f15152' }, // On Going
      0: { color: '#dddddd' }, // Completed
    },
    // legend: 'none'
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
