const test = require("node:test");
const assert = require("node:assert/strict");

const TimeToComplete = require("..");

test("exports the estimator class from the package root", () => {
  assert.equal(typeof TimeToComplete, "function");
  assert.equal(new TimeToComplete(100).destination, 100);
});

test("estimates time from progress between updates", () => {
  const originalNow = Date.now;
  let now = 1_000;
  Date.now = () => now;

  try {
    const time = new TimeToComplete(100);

    now = 2_000;
    assert.deepEqual(time.remaining(50), {
      seconds: 2,
      minutes: 1 / 30,
      hours: 1 / 1_800,
    });

    now = 3_000;
    assert.deepEqual(time.remaining(75), {
      seconds: 4,
      minutes: 1 / 15,
      hours: 1 / 900,
    });
  } finally {
    Date.now = originalNow;
  }
});

test("can log the estimate without changing the returned values", () => {
  const originalNow = Date.now;
  const originalLog = console.log;
  let now = 1_000;
  const messages = [];
  Date.now = () => now;
  console.log = (message) => messages.push(message);

  try {
    const time = new TimeToComplete(100);
    now = 2_000;

    assert.deepEqual(time.remaining(50, true), {
      seconds: 2,
      minutes: 1 / 30,
      hours: 1 / 1_800,
    });
    assert.equal(messages.length, 3);
  } finally {
    Date.now = originalNow;
    console.log = originalLog;
  }
});
