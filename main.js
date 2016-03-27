var express = require("express");
var app = express();
var controller = require("./sphero-controller");

// 自分の Sphero の ID に置き換える
var port = "COM3";

// 接続された時に呼び出されます。
function onConnect() {
  controller.setColor("orange");
  // ここに処理を書きます
  controller.move(100, "前");
  // ここまで
}

// 衝突時に呼び出されます。
function onCollide(count) {
  // ここに処理を書きます
  // ここまで
}

controller.connect(port, onConnect);
controller.addEventListener("collision", onCollide);

app.use(express.static("client"));