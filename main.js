;(function () {
  'use strict'

  const first_day = '2020-06-23 22:18';

  function parse(date) {
    const sum = new Date() - Date.parse(date);
    const seconds = Math.floor((sum / 1000) % 60),
      minutes = Math.floor((sum / 1000 / 60) % 60),
      hours = Math.floor((sum / (1000 * 60 * 60)) % 24),
      days = Math.floor(sum / (1000 * 60 * 60 * 24));

    return [days, hours, minutes, seconds];
  }

  function run(date) {
    const doms = document.getElementsByClassName('time');

    function tick() {
      const t = parse(date);

      for (let i = 0; i < doms.length; i++) {
        if (i === 0) {
          doms[i].innerText = t[i];
          continue;
        }
        doms[i].innerText = ('0' + t[i]).slice(-2);
      }
    }

    setInterval(tick, 1000);
  }

  run(first_day);
}())