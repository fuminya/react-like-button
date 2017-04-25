# react-like-button

* [React](https://facebook.github.io/react/)に入門してみます。
* [「いいねボタン」作成チュートリアル](http://c16e.com/1510161700/)を参考に作成していきます。
* つまったことや、気づいたことなど、```README.md```に残していきます。

## チュートリアルと変えたところ

* ```src / main.css``` を用意して、別ファイルのCSSをstylesとしてimportして```className={styles.XXX}```というふうに設定しました。
* CSSを別ファイル```src / main.css```にしたため、onMouseEnter/onMouseLeaveの実装はせず、CSSで```.like:hover```としました。
* onClickのイベントハンドラを設定している箇所がチュートリアル通りには動かなかったため、動くようなソースコードに書き換えました。
    - 修正前 : ```onClick={::this.onClick}```
    - 修正後 : ```onClick={() => onClick()}```
    - チュートリアルが2015/10/16に投稿されたものなので、Reactのバージョンアップの影響かな？
