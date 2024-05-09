// Set counting timer
const timeContainer = document.getElementById("time-container");
const starthDay = "02-01-2024";
const startDayDate = new Date(starthDay);
const intlNumberFormatter = new Intl.NumberFormat("en-US");

setInterval(() => {
  const now = new Date();
  const difference = Math.floor(
    (now.getTime() - startDayDate.getTime()) / 1000
  );

  timeContainer.innerText = intlNumberFormatter.format(difference);
}, 1000);

// Set event listener for picture mouse over
const picture = document.getElementById("picture");

picture.addEventListener("mouseover", (event) => {
    event.target.style.opacity = "0.6";
    event.target.style.transition = "1s";
}) 

picture.addEventListener("mouseout", (event) => {
    event.target.style.opacity = "1";
}) 