//testing...
document.writeln("I'm here!");
document.writeln("I'm there!!");
document.writeln(Math.PI);
let arr = [];
arr.push({ x: 10, y: 10 });
document.write(arr[0].x);
alert("testing done!!");

//main from here
let createData = function (N) {
    let data = [];
    let colors = [];
    for (let i = 0; i < N; ++i) {
        let j = Math.sin(2 * Math.PI / N * i);
        data.push({ x: 2 * Math.PI / N * i, y: j });
        colors.push([255 / N * i, 0, 255 / N * (N - i), 0.2]);
    }
    return [data, colors];
};

let changeValue = function (value) {
    document.getElementById("val").innerHTML = value;
    let [data, colors] = createData(value);
    scatterData(data, colors, "myChart");
};

// on init ...?
changeValue(10);
