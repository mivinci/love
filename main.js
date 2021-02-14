;(function () {
  'use strict'

  const firstdate = '2020-06-23 22:18';

  function getInterval(init) {
    const sum = new Date() - Date.parse(init);
    const seconds = Math.floor((sum / 1000) % 60),
      minutes = Math.floor((sum / 1000 / 60) % 60),
      hours = Math.floor((sum / (1000 * 60 * 60)) % 24),
      days = Math.floor(sum / (1000 * 60 * 60 * 24));

    return [days, hours, minutes, seconds];
  }

  function run(firstdate) {
    const doms = document.getElementsByClassName('time');

    function deamon() {
      const t = getInterval(firstdate);

      for (let i = 0; i < doms.length; i++) {
        if (i === 0) {
          doms[i].innerText = t[i];
          continue;
        }
        doms[i].innerText = ('0' + t[i]).slice(-2);
      }
    }

    setInterval(deamon, 1000);
  }

  run(firstdate);
}())