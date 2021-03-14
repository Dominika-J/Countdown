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
const REFRESH_RATE = 1000; 

function timeDiffCalc(dateFuture, dateNow) {
    const MIN_IN_SEC = 60;
    const HOUR_IN_SEC = 60 * MIN_IN_SEC;
    const DAY_IN_SEC = 24 * HOUR_IN_SEC;
    const YEAR_IN_SEC = 365 * DAY_IN_SEC;
    const SECONDS_PER_MINUTE = 60;

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
      $yearsUnit.innerText = getTimeTranslation(years, 'years'); // should return e.g. 'rok'

      $days.innerHTML = days;   
      $daysUnit.innerText = getTimeTranslation(days, 'days');

      $hours.innerHTML = hours;
      $hoursUnit.innerText = getTimeTranslation(hours, 'hours');

      $minutes.innerHTML =  minutes;
      $minutesUnit.innerText = getTimeTranslation(minutes, 'minutes');

      $seconds.innerHTML = seconds;
      $secondsUnit.innerText = getTimeTranslation(seconds, 'seconds');
   }, REFRESH_RATE);

   setTimeout(() => {
    $loader.remove();
    countdown.style.visibility = 'visible';
  }, REFRESH_RATE);

  const inflectionTranslations = {
    years: {
      0: 'let',
      1: 'rok',
      2: 'roky',
    },
    days: {
      0: 'dnů',
      1: 'den',
      2: 'dny',
    }, 
    months: {
      0: 'měsíců',
      1: 'měsíc',
      2: 'měsíce',
    },
    hours: {
      0: 'hodin',
      1: 'hodina',
      2: 'hodiny',
    },
    minutes: {
      0: 'minut',
      1: 'minuta',
      2: 'minuty',
    },
    seconds: {
      0: 'sekund',
      1: 'sekunda',
      2: 'sekundy',
    }
  };

  // value = 77
  // timeUnit = 'years'

  function getTimeTranslation(value, timeUnit) {
    let timeIndex = 0;
    if (value === 1) {
      timeIndex = 1;
    } else if (value > 1 && value < 5) {
      timeIndex = 2;
    } else if (value >= 5 || value === 0) {
      timeIndex = 0;
    }
    return inflectionTranslations[timeUnit][timeIndex];
  }



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