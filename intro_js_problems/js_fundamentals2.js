// function titleize(arr, cb) {
//   let titles = arr.map(el => `Mx. ${el} Jingleheimer Schmidt`);
//   cb(titles);
// }
//
// titleize(['Mary', 'Brian', 'Leo'], (names) => {
//   names.forEach(name => console.log(name));
// });

function Elephant(name, height, tricks) {
  this.name = name;
  this.height = height;
  this.tricks = tricks;
}

Elephant.prototype.trumpet = function () {
  console.log(`${this.name} the elephant goes 'phrRRRR!!!!!'`);
};

Elephant.prototype.grow = function () {
  this.height += 12;
};

Elephant.prototype.addTrick = function(trick) {
  this.tricks.push(trick);
};

Elephant.prototype.play = function () {
  let trickNum = Math.floor(Math.random() * this.tricks.length);
  let trick = this.tricks[trickNum];

  console.log(`${this.name} is ${trick}`);
};

let ellie = new Elephant("Ellie", 185, ["giving human friends a ride", "playing hide and seek"]);
let charlie = new Elephant("Charlie", 200, ["painting pictures", "spraying water for a slip and slide"]);
let kate = new Elephant("Kate", 234, ["writing letters", "stealing peanuts"]);
let micah = new Elephant("Micah", 143, ["trotting", "playing tic tac toe", "doing elephant ballet"]);

let herd = [ellie, charlie, kate, micah];

// ellie.trumpet();
//
// console.log(ellie.height);
// ellie.grow();
// console.log(ellie.height);
//
// console.log(ellie.tricks);
// ellie.addTrick('jumping');
// console.log(ellie.tricks);
//
// ellie.play();

Elephant.paradeHelper = function (elephant) {
  console.log(`${elephant.name} is trotting by!`);
};

// herd.forEach(el => Elephant.paradeHelper(el));

function dinerBreakfast
