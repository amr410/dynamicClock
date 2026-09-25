let hour = document.querySelector("[data-hour]");
let minute = document.querySelector("[data-minute]");
let second = document.querySelector("[data-second]");
let am_pm = document.querySelector("[data-am-pm]");
let year = document.querySelector("[data-year]");
let month = document.querySelector("[data-month]");
let day = document.querySelector("[data-day]");

updateClock();
setInterval(() => {
  updateClock();
}, 1000);

function updateClock() {
  let time = new Date();

  let hr = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();

  if (hr % 12 > 9) {
    hour.textContent = hr % 12;
  } else if (hr % 12 == 0) {
    hour.textContent = 12;
  } else {
    hour.textContent = "0" + (hr % 12);
  }

  min > 9 ? (minute.textContent = min) : (minute.textContent = "0" + min);
  sec > 9 ? (second.textContent = sec) : (second.textContent = "0" + sec);
  hr >= 12 ? (am_pm.textContent = "pm") : (am_pm.textContent = "am");

  year.textContent = time.getFullYear();

  month.textContent = time.getMonth() + 1;
  time.getMonth() + 1 > 9
    ? (month.textContent = time.getMonth() + 1)
    : (month.textContent = "0" + (time.getMonth() + 1));

  day.textContent = time.getDate();
  time.getDate() + 1 > 9
    ? (day.textContent = time.getDate() + 1)
    : (day.textContent = "0" + (time.getDate() + 1));
}
