# TimeToComplete

Estimate the time remaining for a process from its progress updates.

## Requirements

- Node.js 18.18 or newer

## Installation

```sh
npm install timetocomplete
```

## Usage

```js
const TimeToComplete = require("timetocomplete");

const progress = new TimeToComplete(100);
const estimate = progress.remaining(40);

console.log(`About ${estimate.seconds} seconds remaining.`);
```

Pass the expected final progress value to the constructor. The default is
`100`. Each call to `remaining(current)` returns an object with estimates in
seconds, minutes, and hours, and becomes the baseline for the next call.

Set the second argument to `true` to print the estimates as well as returning
them:

```js
progress.remaining(50, true);
```

## Development

```sh
npm test
npm run check
```

The package uses Node's built-in test runner and has no runtime dependencies.

## License

MIT. See [LICENSE](LICENSE).
