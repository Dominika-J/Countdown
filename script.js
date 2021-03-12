const countdown = document.getElementById('countdown');
const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');


const oneDayInMilisec = 24*60*60*1000;
const firstDate = new Date();
const secondDate = new Date(2020,03,01);
const diffMilisec = Math.abs(firstDate - secondDate);
const milisecResult = Math.round (diffMilisec/oneDayInMilisec);
console.log(milisecResult);
console.log(diffMilisec);



document.getElementById('days').innerHTML = milisecResult;


  