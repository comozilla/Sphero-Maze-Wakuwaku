var express = require("express");
var app = express();
var http = require("http").Server(app);
var io = require("socket.io")(http);

// 自分の Sphero の ID に置き換える
var orb = require("sphero")("COM7");
var angles = [];
var currentAngleIndex = 0;
var isRunning = false;

// 接続された時に呼び出されます。
function onConnect() {
  orb.color("orange");
}

// 衝突時に呼び出されます。
function onCollide(count) {
  console.log(isRunning);
  if (isRunning) {
    roll(100, angles[Math.min(currentAngleIndex++, angles.length - 1)]);
  }
}

orb.connect(onConnect);
orb.detectCollisions();
orb.on("collision", onCollide);

function roll(speed, degree) {
  clearTimeout(moveLoopId);
  orb.roll(speed, degree);
  moveLoopId = setTimeout(roll, 1000, speed, degree);
}
function setColor(color, time) {
  orb.getColor(function (err, data) {
    if (err) {
      console.log("getColorでエラーが発生: " + err);
    } else {
      if (data) {
        // なぜかdata.colorは、16進数だが文字列として帰ってくるので、parseInt。
        var originalColor = parseInt(data.color);
        orb.color(color);
        if (typeof time !== "undefined") {
          setTimeout(function () {
            orb.color(originalColor);
          }, time * 1000);
        }
      }
    }
  });
}
app.use(express.static("client"));
http.listen(3000, function () { });

io.sockets.on("connection", function (socket) {
  socket.on("runSphero", function (angles) {
    var isError = false;
    angles.forEach(angle => {
      if (typeof angle !== "number") {
        console.log("Error: 正しくない値が送られました");
        isError = true;
      }
    });
    socket.emit("received", {});
    if (!isError) {
      currentAngleIndex = 0;
      if (angles.length > 0) {
        roll(100, angles[currentAngleIndex++]);
      }
      isRunning = true;
    }
  });
  socket.on("stopSphero", function () {
    roll(0, 0)
    isRunning = false;
    currentAngleIndex = 0;
  });
  socket.on("startCalibration", function () {
    orb.startCalibration();
  });
  socket.on("finishCalibration", function () {
    orb.finishCalibration();
  });
});

