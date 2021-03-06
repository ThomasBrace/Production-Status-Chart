function drawChart() {
      var data = new google.visualization.DataTable();

  //setup columns
  data.addColumn('string', 'x');
  data.addColumn({
    type: 'string',
    role: 'annotation'
  });
  data.addColumn({
    type: 'string',
    role: 'annotationText'
  });
  data.addColumn('number', 'Baseline Plan');
  data.addColumn('number', 'Sent to Client - Overall Total');
  data.addColumn('number', 'Sent to Client - Weekly Total');
  data.addColumn('number', 'Prediction');
  data.addColumn({type: 'boolean', role: 'certainty'});
  data.addColumn('number', 'Approved by Client');
  data.addColumn({type: 'boolean', role: 'certainty'});
  data.addColumn('number', 'Approval Trendline');

  //add data to table
  data.addRows([
        ['22-Jan', null, null, 0, 0, 0, null, true, 0, true, 0],
        ['29-Jan', null, null, 7.5, 4, 4, null, true, 2, true, 2.2],
        ['05-Feb', null, null, 15, 8, 4, null, true, 5, true, 4.4],
        ['12-Feb', null, null, 22.5, 16, 8, null, true, 11, true,  6.6],
        ['19-Feb', null, null, 30, 24, 9, 24, true, 11, true, 8.8],
        ['26-Feb', 'March 1', 'Risk free templates completed', 37.5, null, null, 35, false, null, false, 11],
        ['05-Mar', null, null, 45, null, null, 42, false, null, false, 13.2],
        ['12-Mar', null, null, 52.5, null, null, 50, false, null, false, 15.4],
        ['19-Mar', 'March 22', 'Expected Completion', 59, null, null, 59, false, null, false, 17.6]
      ]);

  //setup chart options: size, style,  etc
      var options = {
        curveType: "", //add "function" for a curved line
        legend: {position: 'right', textStyle: {color: 'dark-gray', fontSize: 12}},
        height: 400,
        width: 900,
        // title: 'Advanced Production Status',
        hAxis: {
          title: 'Week Commencing'
        },
        // vAxis: {
        //   title: 'Template Count'
        // },
        series: {
            0: { color: '#acadaf' },
            1: { color: '#f72e00' },
            2: { type: 'bars', color: '#0b911d' },
            3: { lineDashStyle: [5, 2] ,color: '#f72e00' },
            4: { color: '#591faf'},
            5: { lineDashStyle: [5, 2] ,color: '#934ff9' }
        },

        annotations: {
          style: 'line'
         },
      };

      var chart = new google.visualization.LineChart(document.getElementById('status_chart'));
      chart.draw(data, options);
    }
