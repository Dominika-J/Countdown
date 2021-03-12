const $days = document.getElementById('days');
const $hours = document.getElementById('hours');
const $minutes = document.getElementById('minutes');
const $seconds = document.getElementById('seconds');


function timeDiffCalc(dateFuture, dateNow) {
    const SECONDS_PER_DAY = 86400;
    const MILISEC_IN_HOUR = 3600;
    const SECONDS = 60;
    const MINUTES_PER_HOUR = 60;
    const HOURS_PER_DAY = 24;

    let diffInMilliSeconds = Math.abs(dateFuture - dateNow) / 1000;
    
    // calculate days
    const days = Math.floor(diffInMilliSeconds / SECONDS_PER_DAY);
    diffInMilliSeconds -= days * SECONDS_PER_DAY;
    console.log('calculated days', days);

    // calculate hours
    const hours = Math.floor(diffInMilliSeconds / MILISEC_IN_HOUR) % HOURS_PER_DAY;
    diffInMilliSeconds -= hours * MILISEC_IN_HOUR;
    console.log('calculated hours', hours);

    // calculate minutes
    const minutes = Math.floor(diffInMilliSeconds / SECONDS) % MINUTES_PER_HOUR;
    diffInMilliSeconds -= minutes * SECONDS;
    console.log('minutes', minutes);

    // calculate seconds
    const seconds = Math.floor(diffInMilliSeconds) % MINUTES_PER_HOUR;
    diffInMilliSeconds -= seconds * SECONDS;
    console.log('seconds', seconds);

    return {
      days,
      hours,
      minutes,
      seconds
    };
}

  // console.log(timeDiffCalc(new Date(), new Date('2020/03/1 00:00:00')));

  const { days, hours, minutes, seconds } = timeDiffCalc(new Date(), new Date('2020/03/1 00:00:00'));

  $days.innerHTML = days;
  $hours.innerHTML = hours;
  $minutes.innerHTML =  minutes;
  $seconds.innerHTML = seconds;