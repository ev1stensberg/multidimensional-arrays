
  var arrays = [
      /*arrays[0] */ [
    /*  arrays [0][0] */  [createRect(0,50,200,200, 250, 500)],
  /*  arrays [0][1] */  [createRect(0,50,200,200, 250, 500)]
    ],

  /*  arrays [1] */  [
  /*  arrays [1][0] */  [createRect(0,50,200,200, 250, 500)],
/*  arrays [1][1] */  [ createRect(0,50,200,200, 250, 500)]
    ],
  ]
/*
  arrays[0][0] = createRect(50, 100, 50, 100)
  arrays[0][1] = createRect(100, 200, 100, 200)
  arrays[1][0] = createRect(150, 400, 200, 400)
  arrays[1][1] = createRect(300, 400, 400, 800)
  */
console.log(arrays[0][0]) // true
console.log(arrays[0][1])
console.log(arrays[1][0]) // true
console.log(arrays[1][1])

  var x = this.x;
  var y = this.y;
  var width = this.width;
  var height = this.width;

  function createRect(x,y, width, height, canvasWidth, canvasHeight) {
  var canvas = document.createElement('canvas');
  canvas.width = canvasWidth;
  canvas.height = canvasHeight;
  document.body.appendChild(canvas);

  var context = canvas.getContext('2d');
  context.rect(x, y, width, height);
  context.lineWidth = 4;
  context.strokeStyle = 'rgba(0, 81, 115,1)';
  context.stroke();

  canvas.addEventListener('click', function() {
    console.log("heyhaa")
  })
}
