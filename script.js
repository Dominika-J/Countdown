const $years = document.getElementById('years');
const $days = document.getElementById('days');
const $hours = document.getElementById('hours');
const $minutes = document.getElementById('minutes');
const $seconds = document.getElementById('seconds');
const $loader = document.getElementById('loader');
const $yearsUnit = document.getElementById('years-unit');
const $daysUnit = document.getElementById('days-unit');
const $hoursUnit = document.getElementById('hours-unit');
const $minutesUnit = document.getElementById('minutes-unit');
const $secondsUnit = document.getElementById('seconds-unit');

const COVID_INCEPTION_IN_CZ = '2020/03/1 00:00:00';

function timeDiffCalc(dateFuture, dateNow) {
    const MIN_IN_SEC = 60;
    const HOUR_IN_SEC = 60 * MIN_IN_SEC;
    const DAY_IN_SEC = 24 * HOUR_IN_SEC;
    const YEAR_IN_SEC = 365 * DAY_IN_SEC;

    const SECONDS_PER_MINUTE = 60;
    // const MINUTES_PER_HOUR = 60;
    // const HOURS_PER_DAY = 24;
    // const DAYS_PER_YEAR = 365.242199;

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
        if (years <= 1) {
          $yearsUnit.innerText = 'rok'
        } else if (years > 1 && years < 5) {
          $yearsUnit.innerText = 'roky'
        } else if (years >= 5) {
          $yearsUnit.innerText = 'let'
        }

      $days.innerHTML = days;
      if (days <= 1) {
        $daysUnit.innerText = 'den'
      } else if (days > 1 && days < 5) {
        $daysUnit.innerText = 'dny'
      } else if (days >= 5) {
        $daysUnit.innerText = 'dnů'
      }

      $hours.innerHTML = hours;
      if (hours <= 1) {
        $hoursUnit.innerText = 'hodina'
      } else if (hours > 1 && hours < 5) {
        $hoursUnit.innerText = 'hodiny'
      } else if (hours >= 5) {
        $hoursUnit.innerText = 'hodin'
      }

      $minutes.innerHTML =  minutes;
      if (minutes <= 1) {
        $minutesUnit.innerText = 'minuta'
      } else if (minutes > 1 && minutes < 5) {
        $minutesUnit.innerText = 'minuty'
      } else if (minutes >= 5) {
        $minutesUnit.innerText = 'minut'
      }

      $seconds.innerHTML = seconds;
      if (seconds <= 1) {
        $secondsUnit.innerText = 'sekunda'
      } else if (seconds > 1 && seconds < 5) {
        $secondsUnit.innerText = 'sekundy'
      } else if (seconds >= 5) {
        $secondsUnit.innerText = 'sekund'
      }
   }, 1000);

   setTimeout(() => {
    $loader.remove();
    countdown.style.visibility = 'visible';
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

  