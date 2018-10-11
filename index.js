//calculate time remaining between now and completion in arbitrary amounts
class TimeToComplete {
  constructor(destination) {
    this.destination = destination || 100;
    this.last = 0;
    this.lastTime = Date.now();
  }

  //calculate time remaining;
  remaining(current, consoleLogProgress = false) {
    const now = Date.now();
    const timeDifference = this.lastTime - now;
    const difference = (this.destination) / (this.last - current);

    const timeToComplete = timeDifference * difference;

    const seconds = Math.abs(timeToComplete / 1000);
    const minutes = Math.abs(timeToComplete / 1000 / 60);
    const hours = Math.abs(timeToComplete / 1000 / 60 / 60);

    if (consoleLogProgress) {
      console.log(`This process should be done in ${seconds} seconds.`)
      console.log(`This process should be done in ${minutes} minutes.`)
      console.log(`This process should be done in ${hours} hours.`)
    }

    //set for next run;
    this.lastTime = now;
    this.last = current
    return {
      seconds,
      minutes,
      hours
    }
  }
}

const time = new TimeToComplete(100);

setTimeout(() => {
  time.remaining(40, true);
}, 1000)

setTimeout(() => {
  time.remaining(44, true);
}, 2000)