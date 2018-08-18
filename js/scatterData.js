let scatterData = function(input_data, colors, canvas_id) {
    canvas_id = (canvas_id == null) ? "myChart" : canvas_id;
    let canvas = document.getElementById(canvas_id);
    let ctx = canvas.getContext('2d');
    let scatterChart = new Chart(ctx, {
        type: 'scatter',
        data: {
            datasets: [{
                label: 'Scatter Dataset',
                data: input_data,
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
    if (colors == null) { return; }
    if (colors.length != input_data.length) { return; }
    for (let i = 0; i < input_data.length; ++i) {
        let r = colors[i][0].toString();
        let g = colors[i][1].toString();
        let b = colors[i][2].toString();
        let a = colors[i][3].toString();
        let color_str = "rgba(" + r.toString() + ", " + g.toString() + ", " + b.toString() + ", " + a.toString() + ")";
        scatterChart.data.datasets[0].pointBackgroundColor[i] = color_str;
        scatterChart.data.datasets[0].pointBorderColor[i] = color_str;
    }
    scatterChart.update();
}