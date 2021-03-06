var controller = require("./../sphero-controller");
var keypress = require("keypress");

// 自分の Sphero の ID に置き換える
var port = "COM7";

var currentAnglePoint = 0;
var angles = [
  "前", "右", "前", "左", "前"
];

// 接続された時に呼び出されます。
function onConnect() {
  controller.setColor("orange");
  // ここに処理を書きます
  controller.move(199, angles[Math.min(currentAnglePoint++, angles.length - 1)]);
  // ここまで
}

// 衝突時に呼び出されます。
function onCollide(count) {
  // ここに処理を書きます
    
  // 配列で書くこともできるよ
  controller.move(100, angles[Math.min(currentAnglePoint++, angles.length - 1)]);
  // ここまで
}

controller.connect(port, onConnect);
controller.addEventListener("collision", onCollide);
