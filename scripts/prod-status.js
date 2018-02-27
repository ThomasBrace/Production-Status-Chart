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
  data.setValue(8, 1, 'March 22');
  data.setValue(8, 2, 'Expected Completion');

  var chart = new google.visualization.LineChart(document.getElementById('combochart'));
  chart.draw(data, {
    height: 400,
    width: 900,
    annotations: {
      style: 'line'
     },
     series: {
         0: { color: '#acadaf' },
         1: { color: '#f72e00' },
         2: { type: 'bars', color: '#0b911d' },
         3: { lineDashStyle: [5, 2] ,color: '#f72e00' },
         4: { color: '#591faf'},
         5: { lineDashStyle: [5, 2] ,color: '#934ff9' }
     },
     legend: {position: 'right', textStyle: {color: 'dark-gray', fontSize: 12}},
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
      0: { color: '#dddddd'},
      1: { color: '#cccccc'},
      2: { color: '#f72e00'}
    }
  });
}
