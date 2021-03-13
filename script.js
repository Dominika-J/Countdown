const $years = document.getElementById('years');
const $days = document.getElementById('days');
const $hours = document.getElementById('hours');
const $minutes = document.getElementById('minutes');
const $seconds = document.getElementById('seconds');
const loader = document.getElementById('loader');

const COVID_INCEPTION_IN_CZ = '2020/03/1 00:00:00';

function timeDiffCalc(dateFuture, dateNow) {
    const MIN_IN_SEC = 60;
    const HOUR_IN_SEC = 60 * MIN_IN_SEC;
    const DAY_IN_SEC = 24 * HOUR_IN_SEC;
    const YEAR_IN_SEC = 365 * DAY_IN_SEC;

    const SECONDS_PER_MINUTE = 60;
    const MINUTES_PER_HOUR = 60;
    const HOURS_PER_DAY = 24;
    const DAYS_PER_YEAR = 365.242199;

    let diffInSeconds = Math.abs(dateFuture - dateNow) / 1000;
    
    //calculate years
    const years = Math.floor(diffInSeconds/YEAR_IN_SEC);
    diffInSeconds -= years * YEAR_IN_SEC;

    // calculate days
    const days = Math.floor(diffInSeconds / DAY_IN_SEC);
    diffInSeconds -= days * DAY_IN_SEC;

    // calculate hours
    const hours = Math.floor(diffInSeconds / HOUR_IN_SEC);
    diffInSeconds -= hours * HOUR_IN_SEC;

    // calculate minutes
    const minutes = Math.floor(diffInSeconds / SECONDS_PER_MINUTE);
    diffInSeconds -= minutes * SECONDS_PER_MINUTE;

    // calculate seconds
    const seconds = Math.floor(diffInSeconds);

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

   setTimeout(() => {
    loader.remove();
    countdown.style.display = 'flex';
  }, 1000);

  
  //  const test = () => {
  //     console.log('Testing timeDiffCalc should return correct number of days');

  //     const dateA = new Date('2023/03/20 00:00:00');
  //     const dateB = new Date('2020/03/1 00:00:00');
  //     const result = timeDiffCalc(dateA, dateB);

  //     if (result.days === 19) {
  //       console.log('success');
  //     } else {
  //       console.log('failed', result);
  //     }
  //  }
  //  test();

  