document.writeln("I'm here!");
var ctx = document.getElementById("myChart").getContext('2d');
var scatterChart = new Chart(ctx, {
    type: 'scatter',
    data: {
        //labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: 'Scatter Dataset',
            data: [
                { x: -10, y:  0 },
                { x:   0, y: 10 },
                { x:  10, y:  5 }
            ],
            pointBackgroundColor: [],
            pointBorderColor: [],
        }]
    },
    options: {
        scales: {
            xAxes: [{
                type: 'linear', 
                position: 'bottom'
            }]
        }
    }
});

scatterChart.data.datasets[0].pointBackgroundColor[0] = "rgba(255, 100, 100, 0.2)";
scatterChart.update();
document.writeln("I'm there!!");