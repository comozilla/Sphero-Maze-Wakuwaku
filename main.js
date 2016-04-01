var express = require("express");
var app = express();
var http = require("http").Server(app);
var io = require("socket.io")(http);
var controller = require("./sphero-controller");

var angles = [];
// 自分の Sphero の ID に置き換える
var port = "COM7";
var currentAngleIndex = 0;
var isRunning = false;

// 接続された時に呼び出されます。
function onConnect() {
  controller.setColor("orange");
}

// 衝突時に呼び出されます。
function onCollide(count) {
  console.log(isRunning);
  if (isRunning) {
    controller.move(100, angles[Math.min(currentAngleIndex++, angles.length - 1)]);  
  }
}

controller.connect(port, onConnect);
controller.addEventListener("collision", onCollide);

app.use(express.static("client"));
http.listen(3000, function () { });

io.sockets.on("connection", function (socket) {
  socket.on("runSphero", function (angles) {
    socket.emit("received", {});
    currentAngleIndex = 0;
    if (angles.length > 0) {
      controller.move(100, angles[Math.min(currentAngleIndex++, angles.length - 1)]);
    }
    isRunning = true;
  });
  socket.on("stopSphero", function() {
    controller.move(0, 0);
    isRunning = false;
    currentAngleIndex = 0;
  });
  socket.on("startCalibration", function() {
    controller.startCalibration();
  });
  socket.on("finishCalibration", function() {
    controller.finishCalibration();
  });
});

