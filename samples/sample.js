var controller = require("./../sphero-controller");
var keypress = require("keypress");

// 自分の Sphero の ID に置き換える
var port = "COM7";

// 接続された時に呼び出されます。
function connect() {
  controller.color("orange");
  // ここに処理を書きます
  controller.move(100, "前");
  // ここまで
}

// 衝突時に呼び出されます。
function collision(count) {
  // ここに処理を書きます
  // ぶつかったかの確認
  if (count === 0) {
    // 1 回目のとき
    controller.move(255, "右");
  }
  if (count === 1) {
    // 2 回目のとき
    controller.move(255, "前");
  }
  if (count === 2) {
    // 3 回目のとき
    controller.move(255, "左");
  }
  if (count === 3) {
    // 4 回目のとき
    controller.move(255, "前");
  }
  // ここまで
}

controller.connect(port, connect);
controller.addEventListener("collision", collision);
controller.addEventListener("loop", loop);
