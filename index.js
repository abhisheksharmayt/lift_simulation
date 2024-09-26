import { buildLiftSimulationUI } from "./uiBuilder.js";
console.log("connected...")

const inputForm = document.querySelector("#input-form");
let shouldLiftPageVisible = false;

inputForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const floorsCount = document.querySelector("#floors-input").value;
  const liftsCount = document.querySelector("#lifts-input").value;
  if (!Boolean(floorsCount) || !Boolean(liftsCount)) {
    alert("Both inputs fields are required");
    return;
  }
  console.log("it's working");
  const inputPage = document.querySelector("#input-page");
  const liftSimulationPage = document.querySelector("#lift-simulation-page");
  inputPage.style.display = "none";
  liftSimulationPage.style.display = "block";
  
  buildLiftSimulationUI({floors: floorsCount, lifts: liftsCount});
});

