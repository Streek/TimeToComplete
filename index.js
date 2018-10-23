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
    const timeDifference = now - this.lastTime;
    const difference = (this.destination) / (current - this.last);

    const timeToComplete = timeDifference * difference;

    const seconds = timeToComplete / 1000;
    const minutes = timeToComplete / 1000 / 60;
    const hours = timeToComplete / 1000 / 60 / 60;

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

module.exports = TimeToComplete;