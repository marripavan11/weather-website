google.charts.load('current', {'packages':['table']});
google.charts.setOnLoadCallback(drawTable);

function drawTable() {

    var data = new google.visualization.DataTable();
        data.addColumn('string', 'refNum');
        data.addColumn('boolean', 'APPLY');
        data.addColumn('boolean', 'Feature 1');
        data.addColumn('boolean', 'Feature 2');
        data.addColumn('boolean', 'Feature 3');
        data.addColumn('boolean', 'Feature 4');
        data.addColumn('boolean', 'Feature 5');
        data.addColumn('boolean', 'Feature 6');
        data.addRows([
          ['Mike',  false, true,false, true,false, true, true],
          ['Jim',   true,  false,false, true,false, true, true],
          ['Alice', true, true,false, true,false, true, true],
          ['Bob',   false,  true,false, true,false, true, true]
        ]);

        var table = new google.visualization.Table(document.getElementById('table_div'));
        table.draw(data, {showRowNumber: true, width: '100%', height: '100%'});
      }
    