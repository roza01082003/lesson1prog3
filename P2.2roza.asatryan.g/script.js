var matrix = [];
var x = 40;
var y = 40;
var side = 20;
var xotArr = [];
var xotakerArr = [];
var gishatichArr = [];
var snowArr = [];
var ancrevArr = [];
var takter = -1;
var weather = "summer";

function andzrevStexcel() {
  var dzg = 10;
  while (dzg > 0) {
    var x1 = Math.floor(random(x - 1));
    var y1 = Math.floor(random(y - 1));
    if (matrix[y1][x1] == 0) {
      matrix[y1][x1] = 5;
      ancrevArr.push(new ancrev(x1, y1, 5));
      dzg--;
      if (dzg == 1){
        break;
      }
    }
  }
}
function dzyunStexcel() {
  var dzg = 10;
  while (dzg > 0) {
    var x1 = Math.floor(random(x - 1));
    var y1 = Math.floor(random(y - 1));
    if (matrix[y1][x1] == 0) {
      matrix[y1][x1] = 4;
      snowArr.push(new snow(x1, y1, 4));
      dzg--;
      if (dzg == 1){
        break;
      }
    }
  }
}
function xot() {
  var dzg = 20;
  while (dzg > 0) {
    var x1 = Math.floor(random(x - 1));
    var y1 = Math.floor(random(y - 1));
    if (matrix[y1][x1] == 0) {
      matrix[y1][x1] = 1;
      xotArr.push(new Grass(x1, y1, 1));
      dzg--;
    }
  }
}
function xotaker() {
  var dzg = 10;
  while (dzg > 0) {
    var x1 = Math.floor(random(x - 1));
    var y1 = Math.floor(random(y - 1));
    if (matrix[y1][x1] == 0) {
      matrix[y1][x1] = 2;
      xotakerArr.push(new StandardCritter(x1, y1, 2));
      dzg--;
    }
  }
}
function gishishatich() {
  var dzg = 5;
  while (dzg > 0) {
    var x1 = Math.floor(random(x - 1));
    var y1 = Math.floor(random(y - 1));
    if (matrix[y1][x1] == 0) {
      matrix[y1][x1] = 4;
      gishatichArr.push(new Gishatich(x1, y1, 4));
      dzg--;
    }
  }
}
function setup() {
  for (var a = 0; a < y; a++) {
    matrix[a] = [];
    for (var b = 0; b < x; b++) {
      var rand = Math.round(random(0,5));
      matrix[a][b] = rand;
    }
  }
  frameRate(3);
  createCanvas(x * side, y * side);
  background('#FAFDAD');

  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] == 1) {
        xotArr.push(new Grass(j, i, 1));
      }
      else if (matrix[i][j] == 2) {
        xotakerArr.push(new StandardCritter(j, i, 2));
      }
      else if (matrix[i][j] == 3) {
        gishatichArr.push(new Gishatich(j, i, 3));
      }
    }
  }
}

var dzyunKa = false;
function draw() {
  takter++;
  console.log(takter);
  if (takter < 10) {
    weather = "summer";
    andzrevStexcel();

    for (var y = 0; y < matrix.length; y++) {
      for (var x = 0; x < matrix[y].length; x++) {
        if (matrix[y][x] == 4)
          matrix[y][x] = 0;
      }
    }
    console.log(ancrevArr);
  }
  else if (takter >=10 && takter < 20) {
    weather = "winter";
    dzyunStexcel();

    for (var y = 0; y < matrix.length; y++) {
      for (var x = 0; x < matrix[y].length; x++) {
        if (matrix[y][x] == 5)
          matrix[y][x] = 0;
      }
    }
    console.log(snowArr);
    if (takter == 19){
      takter = -1;
    }
  }

  if (weather == "winter") {
    background("#acacac");

  }
  else if (weather == "summer") {
    background("#FAFDAD");

  }
  for (var i in xotArr) {
    xotArr[i].mul();
  }
  for (var i in xotakerArr) {
    xotakerArr[i].eat();
  }
  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] == 1) {
        fill("green");
        rect(j * side, i * side, side, side);
      }
      else if (matrix[i][j] == 2) {
        fill("yellow");
        rect(j * side, i * side, side, side);
      }
      else if (matrix[i][j] == 3) {
        fill("red");
        rect(j * side, i * side, side, side);
      }
      else if (weather == "winter") {
        if (matrix[i][j] == 4) {
          fill("write");
          ellipse(j * side + 10, i * side + 10, side, side);
        }
      }
      else if (weather == "summer") {
        if (matrix[i][j] == 5) {
          fill("#84BDF6");
          ellipse(j * side + 10, i * side + 10, side, side);

        }
      }
    }
  }
  for (var i in xotArr) {
    xotArr[i].mul();
  }
  for (var i in xotakerArr) {
    xotakerArr[i].eat();
  }
  if (weather == "summer") {
    for (var i in gishatichArr) {
      gishatichArr[i].eat();
    }
  }
  if (weather == "winter") {
    for (var i in snowArr) {
      snowArr[i].eat();
    }
  }
}