const day = document.querySelector(".day");
const hours = document.querySelector(".hours");
const mins = document.querySelector(".mins");
const secs = document.querySelector(".secs");

const futureDate = new Date("2024-12-25");

const furtureTime = futureDate.getTime();
function getRemaindingTime() {
  const today = new Date().getTime();

  const t = furtureTime - today;
  if (t < 0) {
    clearTimeout(countdown);
  }
  // 1s = 1000ms
  // 1m = 60s
  // 1hr = 60m
  // 1d = 24hr

  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  let days = t / oneDay;

  days = Math.floor(days);
  let newhours = Math.floor((t % oneDay) / oneHour);
  let newminutes = Math.floor((t % oneHour) / oneMinute);
  let newseconds = Math.floor((t % oneMinute) / 1000);

  day.textContent = days;
  hours.textContent = newhours;
  mins.textContent = newminutes;
  secs.textContent = newseconds;

  let countdown = setInterval(() => {
    getRemaindingTime();
  }, 1000);
}

getRemaindingTime();
