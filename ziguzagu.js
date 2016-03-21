// samples/sample-array.js に移行したので消したい

var controller = require("./controller");
var keypress = require("keypress");

// 自分の Sphero の ID に置き換える
var port = "COM7";
var angles = [
  "前", "右", "前", "左", "前"
];
var currentAnglePoint = 0;

var graph = [];

// 接続された時に呼び出されます。
function onConnected() {
  controller.setColor("orange");
  setTimeout(loop, loopInterval);
  // ここに処理を書きます
  controller.move(255, angles[Math.min(currentAnglePoint++, angles.length - 1)]);
  // ここまで
}

// 衝突時に呼び出されます。
function onCollised(index) {
  // ここに処理を書きます
  console.log(index);
  controller.setColor("red");
  setTimeout(function() {
    controller.setColor("green");
  }, 500);
  controller.move(255, angles[Math.min(currentAnglePoint++, angles.length - 1)]);
  // ここまで
}

controller.connect(port, onConnected);
controller.addEventListener("collision", onCollised);
