// Calculate the remaining time between progress updates.
class TimeToComplete {
  constructor(destination) {
    this.destination = destination ?? 100;
    this.last = 0;
    this.lastTime = Date.now();
  }

  // Calculate time remaining and prepare for the next progress update.
  remaining(current, consoleLogProgress = false) {
    const now = Date.now();
    const timeDifference = now - this.lastTime;
    const difference = (this.destination) / (current - this.last);

    const timeToComplete = timeDifference * difference;

    const seconds = timeToComplete / 1000;
    const minutes = timeToComplete / 1000 / 60;
    const hours = timeToComplete / 1000 / 60 / 60;

    if (consoleLogProgress) {
      console.log(`This process should be done in ${seconds} seconds.`);
      console.log(`This process should be done in ${minutes} minutes.`);
      console.log(`This process should be done in ${hours} hours.`);
    }

    // Set the baseline for the next run.
    this.lastTime = now;
    this.last = current;
    return {
      seconds,
      minutes,
      hours
    }
  }
}

module.exports = TimeToComplete;
