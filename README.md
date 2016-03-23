# Sphero-Maze-Wakuwaku
Sphero で迷路を脱出するためのプログラム。
Gifter-labo 向けのひな形。

## About
できるだけ簡単に、node.js で
迷路を解けるようにしました。
___

## 準備

1. モジュールをインストール

```bash
npm install
```

2. main.jsを編集

```js
// 自分の Sphero の ID に置き換える
var port = "xxx";
```
Spheroのシリアルポートにしておく。
シリアルポートの取得は[こちら](https://github.com/comozilla/Sphero-wakuwaku/wiki/%E7%92%B0%E5%A2%83%E8%A8%AD%E5%AE%9A)を参照。

## main.js 内関数について

### connect

Spheroに接続された時に呼び出されます

### loop

loopIntervalで指定した間隔（ミリ秒）で呼び出されます。

### collision

衝突時に呼び出されます。

## backside.js

### move(power, deg)
Spheroを動かします。
degは、数値を指定すると角度、
文字列を指定すると、「左 右 前 後」に動きます。

## License
[MIT License](http://wisdommingle.com/mit-license/)
