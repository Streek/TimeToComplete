const TimeToComplete = require('./index.js');
const time = new TimeToComplete(100);

setTimeout(() => {
  time.remaining(40, true);
}, 1000)

setTimeout(() => {
  time.remaining(44, true);
}, 1000)

setTimeout(() => {
  time.remaining(48, true);
}, 1000)