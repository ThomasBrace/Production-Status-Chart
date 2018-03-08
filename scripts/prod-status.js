function drawChart() {
  var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/16q-bSvIapnCXyqv3YU5fO4M2xDf1GxATscDXPjf8xGY/gviz/tq?gid=1078118238&range=A1:G11&headers=1');
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

  var chart = new google.visualization.LineChart(document.getElementById('combochart'));
  chart.draw(data, {
    height: '100%',
    width: '100%',
    annotations: {
      style: 'line'
     },
     series: {
         0: { color: '#cccccc' },
         1: { color: '#f15152' },
         2: { lineDashStyle: [5, 2], color: '#f15152', visibleInLegend: false },
         3: { type: 'bars', color: '#768e70' },
         4: { color: '#1b4079'},
         5: { lineDashStyle: [5, 2], color: '1b4079', visibleInLegend: true }
     },
     legend: {position: 'right', textStyle: {color: 'dark-gray', fontSize: 12}}
    });
}

function drawRiskChart() {
  var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1g5luYrUbpFXWLCInZaWxr1bBU5Qv4i3XfJRzGnXa8bY/gviz/tq?gid=1952206665&range=M29:N32&headers=1');
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

function drawStatusChart() {
  var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/16q-bSvIapnCXyqv3YU5fO4M2xDf1GxATscDXPjf8xGY/gviz/tq?gid=1313464239&range=B246:C253');
  query.send(handleStatusQueryResponse);
}

function handleStatusQueryResponse(response) {
  if (response.isError()) {
        alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
      }

  var statusData = response.getDataTable();
  var statusChart = new google.visualization.PieChart(document.getElementById('status_chart'));
  statusChart.draw(statusData, {
    width: 600,
    height: 400,
    slices: {
      7: { color: '#f15152' }, // On Hold
      6: { color: '#cbdf90' }, // In Queue
      5: { color: '#f5a65b' }, // Change Requests (Dev)
      4: { color: '#768e70' }, // Template Dev
      3: { color: '#b87b41' }, // Change Requests (QA)
      2: { color: '#7f9c96' }, // Template QA
      1: { color: '#4d7c8a' }, // AM Review
      0: { color: '#1b4079' }  // Client Review
    }
  });
}

function drawStudioChart() {
  var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/16q-bSvIapnCXyqv3YU5fO4M2xDf1GxATscDXPjf8xGY/gviz/tq?gid=1313464239&range=E246:F253');
  query.send(handleStudioQueryResponse);
}

function handleStudioQueryResponse(response) {
  if (response.isError()) {
        alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
      }

  var studioData = response.getDataTable();
  var studioChart = new google.visualization.PieChart(document.getElementById('studio_chart'));
  studioChart.draw(studioData, {
    width: 600,
    height: 400,
    slices: {
      7: { color: '#f15152' }, // On Hold
      6: { color: '#cbdf90' }, // In Queue
      5: { color: '#f5a65b' }, // Change Requests (Dev)
      4: { color: '#768e70' }, // Template Dev
      3: { color: '#b87b41' }, // Change Requests (QA)
      2: { color: '#7f9c96' }, // Template QA
      1: { color: '#4d7c8a' }, // AM Review
      0: { color: '#1b4079' }  // Client Review
    }
  });
}

function drawWaveOneChart() {
  var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/16q-bSvIapnCXyqv3YU5fO4M2xDf1GxATscDXPjf8xGY/gviz/tq?gid=1313464239&range=K246:M249');
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
    series: {
      1: { color: '#f15152' }, // On Going
      0: { color: '#dddddd' }, // Completed
    },
    // legend: 'none'
  });
}

function drawWaveTwoChart() {
  var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/16q-bSvIapnCXyqv3YU5fO4M2xDf1GxATscDXPjf8xGY/gviz/tq?gid=1313464239&range=H251:I252');
  query.send(handleWavetwoQueryResponse);
}

function handleWavetwoQueryResponse(response) {
  if (response.isError()) {
        alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
      }

  var waveTwoData = response.getDataTable();
  var waveTwoChart = new google.visualization.PieChart(document.getElementById('wavetwo_chart'));
  waveTwoChart.draw(waveTwoData, {
    height: '100%',
    width: '100%',
    slices: {
      1: { color: '#f15152' },
      0: { color: '#dddddd' }
    },
    legend: 'none',
  });
}

function drawWaveThreeChart() {
  var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/16q-bSvIapnCXyqv3YU5fO4M2xDf1GxATscDXPjf8xGY/gviz/tq?gid=1313464239&range=H255:I256');
  query.send(handleWavethreeQueryResponse);
}

function handleWavethreeQueryResponse(response) {
  if (response.isError()) {
        alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
      }

  var waveThreeData = response.getDataTable();
  var waveThreeChart = new  google.visualization.PieChart(document.getElementById('wavethree_chart'));
  waveThreeChart.draw(waveThreeData, {
    height: '100%',
    width: '100%',
    slices: {
      1: { color: '#f15152' },
      0: { color: '#dddddd' }
    },
    legend: 'none',
  });
}
