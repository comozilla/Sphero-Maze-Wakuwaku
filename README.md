# Sphero-Maze-Wakuwaku
Sphero で迷路を脱出するためのプログラム。  
Webpage から操作ができます。  

## 準備

- モジュールをインストール

```bash
npm install
```

- main.jsを編集

```js
// 自分の Sphero の ID に置き換える
var orb = require("sphero")("xxx");
```
Spheroのシリアルポートにしておく。  
シリアルポートの取得は[こちら](https://github.com/comozilla/Sphero-wakuwaku/wiki/%E7%92%B0%E5%A2%83%E8%A8%AD%E5%AE%9A)を参照。  

- 実行

```bash
npm start
```

- [localhost:3000](http://localhost:3000/)を開く

## Webpage の使い方
textarea に、角度を、改行を区切りにして書いていきます。
角度の他に、「前後左右」でも操作できるよう、ラップしてあります。  
(例)
```
180
0
右
前
```

### 動かす
`run!` ボタンを押します。  

### 止める
`stop!` ボタンを押します。  

### 前後左右を変えたいとき
`start calibration` ボタンを押すと、  
`orb.startCalibration();` が実行されます。  
後となる方向に、青色のLEDが光りますので、
手動で向きを変えてください。
`finish calibration` で、このモードを終了します。

## License
[MIT License](http://wisdommingle.com/mit-license/)
