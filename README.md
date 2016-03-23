# Sphero-Maze-Wakuwaku
Sphero で迷路を脱出するためのプログラム。
Gifter-labo 向けのひな形。

## About
できるだけ簡単に、node.js で
迷路を解けるようにしました。
___

## 準備

- モジュールをインストール

```bash
npm install
```

- main.jsを編集

```js
// 自分の Sphero の ID に置き換える
var port = "xxx";
```
Spheroのシリアルポートにしておく。
シリアルポートの取得は[こちら](https://github.com/comozilla/Sphero-wakuwaku/wiki/%E7%92%B0%E5%A2%83%E8%A8%AD%E5%AE%9A)を参照。

- 実行

```bash
npm start
```

その後、位置補正が始まる。
Space キーで位置補正終了、onConnect 関数呼び出し。

## main.js 内関数について

### onConnect

Spheroに接続された時に呼び出されます。

### onCollide

衝突時に呼び出されます。

## sphero-controller でラップしている部分。

※ `[]` 内は省略可能

### move(power, deg)
Spheroを動かします。
degは、数値を指定すると角度、
文字列を指定すると、「左 右 前 後」に動きます。

### setColor(color[, time])
Sphero の色を変更します。
第二引数に、指定した色を適用する時間を秒単位で設定します。

### connect(port, callback)
Sphero に接続します。
callback では、接続、位置補正の処理が
終わった後に呼び出される関数を指定します。

## License
[MIT License](http://wisdommingle.com/mit-license/)
