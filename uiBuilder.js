const liftWidth = 60;
const liftMargin = 30;
const liftHeight = 80;
const liftSpacing = 10;
const buttonBoxWidth = 150;
const floorBorderWidth = 1;
const liftBorderWidth = 1;

export class Lift {
  constructor(index, totalFloors) {
    this.floor = 0;
    this.index = index;
    this.isLiftInUse = false;
    this.direction = "up";
    this.top = calculateLiftTopPosition(0);
    this.left = index * (liftWidth + liftMargin) + buttonBoxWidth;
  }
}

export let LiftsArray = [];

export const buildLiftSimulationUI = ({ floors, lifts }) => {
  const liftSimulationWrapper = document.querySelector(
    "#lift-simulation-wrapper"
  );

  for (let i = 0; i < floors; i++) {
    const floorDiv = document.createElement("div");
    floorDiv.classList.add("floor");
    floorDiv.setAttribute("data-floorIndex", i);
    liftSimulationWrapper.appendChild(floorDiv);

    const buttonsDiv = document.createElement("div");
    const upButton = document.createElement("button");
    const downButton = document.createElement("button");
    upButton.innerText = "UP";
    upButton.setAttribute("data-upButtonIndex", i);
    downButton.innerText = "DOWN";
    downButton.setAttribute("data-downButtonIndex", i);
    buttonsDiv.classList.add("buttons");
    upButton.classList.add("up-button");
    downButton.classList.add("down-button");

    buttonsDiv.appendChild(upButton);
    buttonsDiv.appendChild(downButton);
    floorDiv.appendChild(buttonsDiv);
  }

  for (let i = 0; i < lifts; i++) {
    const currLift = new Lift(i, floors);
    LiftsArray.push(currLift);
    const liftDiv = document.createElement("div");
    liftDiv.classList.add("lift");
    liftDiv.setAttribute("data-liftIndex", i);
    liftDiv.style.top = `${currLift.top}px`;
    liftDiv.style.left = `${currLift.left}px`;
    liftSimulationWrapper.appendChild(liftDiv);
  }
};