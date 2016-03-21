var spheroController = require("./spheroController");

// 自分の Sphero の ID に置き換える
var port = "COM3";

// 接続された時に呼び出されます。
function connect() {
  spheroController.setColor("orange");
  // ここに処理を書きます
  spheroController.move(100, "前");
  // ここまで
}

// 衝突時に呼び出されます。
function collision(count) {
  // ここに処理を書きます
  // ここまで
}

spheroController.connect(port, connect);
spheroController.addEventListener("collision", collision);
