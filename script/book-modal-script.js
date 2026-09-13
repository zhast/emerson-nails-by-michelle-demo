`use strict`;

window.addEventListener("touchmove", (event) => {}, { passive: true });

const popUpClass = document.querySelector(`.pop-up-1`);
const bookButton = document.getElementById(`book-now-btn`);
const closeButton = document.querySelector(".close-pop-up-btn");
const callButton = document.querySelector(`.call-now-btn`);
const popUpOverlay = document.querySelector(`.overlay-book`);
const body = document.querySelector(`body`);
const header = document.querySelector(`.header-main`);

document.addEventListener("DOMContentLoaded", function () {
  const openModal = function (el) {
    if (!el) return;
    el.addEventListener(`click`, function (event) {
      event.preventDefault();
      popUpClass.classList.toggle("active");
      popUpOverlay.onclick = (event) => {
        if (event.target === popUpOverlay) {
          popUpClass.classList.remove(`active`);
        }
      };
    });
  };

  if (body.contains(header)) {
    openModal(callButton);
    openModal(bookButton);
  } else {
    openModal(callButton);
  }
});

if (closeButton) {
  closeButton.onclick = () => {
    popUpClass.classList.remove(`active`);
  };
}

// GBP hours (Nails by Michelle) — index 0 = Sunday
const schedule = new Map([
  ["Sunday", "7:00 AM–1:00 PM"],
  ["Monday", "Closed"],
  ["Tuesday", "7:00 AM–3:30 PM"],
  ["Wednesday", "7:00 AM–3:00 PM"],
  ["Thursday", "7:00 AM–2:30 PM"],
  ["Friday", "7:00 AM–3:00 PM"],
  ["Saturday", "9:00 AM–5:00 PM"],
]);

const currentDay = new Date().getDay();
const findDay = (schedule, index) => Array.from(schedule.keys())[index];
const findTime = (schedule, index) => Array.from(schedule.values())[index];

const dayToday = findDay(schedule, currentDay);
const timeToday = findTime(schedule, currentDay);

const modalDay = document.querySelector(`.day`);
const modalTime = document.querySelector(`.time`);
if (modalDay) modalDay.textContent = dayToday.toString();
if (modalTime) modalTime.textContent = timeToday.toString();
