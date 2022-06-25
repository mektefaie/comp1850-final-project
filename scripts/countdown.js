let myCounter = setInterval(function () {
  const countDownDate = new Date(2022, 11, 11, 0, 0, 0, 0).getTime();
  let now = new Date().getTime();
  let timeleft = countDownDate - now;

  let days = Math.floor(timeleft / (1000 * 60 * 60 * 24))
    .toString()
    .padStart(3, '0');
  let hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    .toString()
    .padStart(2, '0');
  let minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60))
    .toString()
    .padStart(2, '0');
  let seconds = Math.floor((timeleft % (1000 * 60)) / 1000)
    .toString()
    .padStart(2, '0');

  document.getElementById('daysLeft').textContent = `${days} days`;
  document.getElementById(
    'timeLeft'
  ).textContent = `${hours} h : ${minutes} m : ${seconds} s`;

  if (timeleft < 0) {
    clearInterval(myCounter);
    document.getElementById('timeLeft').textContent =
      '00 d : 00 h : 00 m : 00 s';
    document.getElementById('countdown-text').textContent = 'Merry Christmas!';
  }
}, 1000);
