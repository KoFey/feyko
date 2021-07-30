function anima(e) {
    var duration = 2000,
    startTime = new Date().getTime();
    var canvas = document.getElementById(e);
    var context = canvas.getContext('2d');
    canvas.height = 250;
    canvas.width = 250;
    var x = canvas.width / 2;
    var y = canvas.height / 2;
    var radius = 110;
    var counterClockwise = false;
    var run = function () {
        var time = (new Date().getTime() - startTime) / duration;
        var startAngle = 3 * Math.PI / 2;
        var endAngle;
        switch(e) {
            case "html": endAngle = 3.35* Math.PI / 1.0; break;
            case "css":  endAngle = 3.25 * Math.PI / 1.0; break;
            case "C": endAngle = 3* Math.PI / 1.0; break;
            case "prolog": endAngle = 2.69 * Math.PI / 1.0; break;
        }
        
        context.lineWidth = 15;
        context.strokeStyle = "#ff3535";
        if (time < 1) {
            requestAnimationFrame(run);
            endAngle = startAngle + (endAngle - startAngle) * time;
        }
        context.clearRect(0, 0, 600, 300);
        context.beginPath();
        context.arc(x, y, radius, startAngle, endAngle, counterClockwise);
        context.stroke();
    };
    run();
}