paper.install(window);
window.onload = function() {
    // Setup directly from canvas id:
    paper.setup('myCanvas');

    for(i=1; i<10; i++){
        for(j=1; j<10; j++){
            console.log(i + j);

            var circle = new Path.Circle(new Point(i * 100, j * 100), i*j);
            circle.fillColor = new Color(i/10,j/10,i/10);

        }

    }


    view.draw();
};