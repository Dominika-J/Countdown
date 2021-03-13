const $years = document.getElementById('years');
const $days = document.getElementById('days');
const $hours = document.getElementById('hours');
const $minutes = document.getElementById('minutes');
const $seconds = document.getElementById('seconds');

const COVID_INCEPTION_IN_CZ = '2020/03/1 00:00:00';

function timeDiffCalc(dateFuture, dateNow) {
    const SECONDS_PER_DAY = 86400;
    const MILISEC_IN_HOUR = 3600;
    const SECONDS = 60;
    const MINUTES_PER_HOUR = 60;
    const HOURS_PER_DAY = 24;
    const NUMBER_OF_DAYS_IN_YEAR = 365;

    let diffInMilliSeconds = Math.abs(dateFuture - dateNow) / 1000;
    
    //calculate years
    const years = Math.ceil(diffInMilliSeconds/31536000000);
    console.log(years);

    // calculate days
    const days = Math.floor(diffInMilliSeconds / SECONDS_PER_DAY);
    diffInMilliSeconds -= days * SECONDS_PER_DAY;
    // if (days > 365) {
    //    days = days - NUMBER_OF_DAYS_IN_YEAR;
    // } else {
    //    days
    // }

    // calculate hours
    const hours = Math.floor(diffInMilliSeconds / MILISEC_IN_HOUR) % HOURS_PER_DAY;
    diffInMilliSeconds -= hours * MILISEC_IN_HOUR;

    // calculate minutes
    const minutes = Math.floor(diffInMilliSeconds / SECONDS) % MINUTES_PER_HOUR;
    diffInMilliSeconds -= minutes * SECONDS;

    // calculate seconds
    const seconds = Math.floor(diffInMilliSeconds) % MINUTES_PER_HOUR;
    diffInMilliSeconds -= seconds * SECONDS;

    return {
      years,
      days,
      hours,
      minutes,
      seconds
    };
}

    setInterval(function() { 
      const { years, days, hours, minutes, seconds } = timeDiffCalc(new Date(), new Date(COVID_INCEPTION_IN_CZ));
      $years.innerHTML = years;
      $days.innerHTML = days;
      $hours.innerHTML = hours;
      $minutes.innerHTML =  minutes;
      $seconds.innerHTML = seconds;
   }, 1000);



  