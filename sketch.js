var raw;
var temp;
var stored = [];
var answer;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  raw = getURLParams();
  temp = split(raw.params, ',');

  answer = convertBaseTen(temp[0], temp[1], 0);
  print(answer);
  showWork();
  noLoop();
}

function convertBaseTen(input, base, sum) {

  var index = input.length - 1;
  var character = input.charAt(0);

  var a = parseInt(character);
  var b = Math.pow(base, index);
  var newSum = sum + (a * b);

  stored[index] = "(" + a + " * " + base + "^" + index + ") ";

  //Base case
  if (index == 0) {
    return newSum;
  } else {
    return convertBaseTen(input.substring(1), base, newSum);
  }
}

function showWork() {
  fill(255);
  textAlign(LEFT);
  textSize(64);

  var a = "";
  a= "(" + temp[0] + ")_" + temp[1] + " = ";
  text(a, 16, 64);

  var build = "";
  for (var i = stored.length - 1; i >= 0; i--) {
    build += stored[i];
    if (i > 0) {
      build += " + ";
    }
  }
  textSize(32);
  text(build, 16, 64 * 2);
  textSize(64);
  var c = "(" + answer + ")_10";
  text(a + c, 16, 64*3+16);
}
