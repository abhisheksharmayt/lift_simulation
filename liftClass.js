const liftWidth = 50;
const liftMargin = 10;
const liftHeight = 70;
const liftSpacing = 10;
const buttonBoxWidth = 70;

export class Lift {
  constructor(index, totalFloors) {
    this.floor = 0;
    this.index = index; 
    this.isLiftInUse = false;
    this.direction = "up";
    this.top = totalFloors * (liftHeight + liftSpacing);
    this.left = index * (liftWidth + liftMargin) + buttonBoxWidth;
  }

  getFloorStatus() {
    return this.floor;
  }

  raiseLiftTo(floor) {
    this.floor += floor;
    this.top -= liftHeight + liftSpacing;
  }

  lowerLiftTo(floor) {
    this.floor -= floor;
    this.top += liftHeight + liftSpacing;
  }
}
