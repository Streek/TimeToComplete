# TimeToComplete

This library exported as a class module.

## Download

 * [Master build](https://github.com/Streek/TimeToComplete)
 * [1.0 build](https://github.com/Streek/TimeToComplete/releases)

TimeToComplete is released under the [MIT license](https://raw.githubusercontent.com/streek/TimeToComplete/LICENSE) & supports modern environments.

## Installation

In a browser:
```html
<script src="TimeToComplete/index.js"></script>
```

Using npm:
```shell
$ npm i -g npm
$ npm i --save TimeToComplete
```

In Node.js:
```js
const TimeToComplete = require('./index.js');
const time = new TimeToComplete(100);

setTimeout(() => {
  time.remaining(40, true);
  setTimeout(() => {
    time.remaining(44, true);
    setTimeout(() => {
      time.remaining(48, true);
    }, 1000)
  }, 1000)
}, 1000)
```