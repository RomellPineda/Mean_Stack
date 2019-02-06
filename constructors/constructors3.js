// Reference:
// ES5 way
function Dot(x, y) {
    this.x = x;
    this.y = y;
}
Dot.prototype.showLocation = function() {
    console.log("This Dot is at x " + this.x + " and y " + this.y);
}
var dot1 = new Dot(55, 20);
dot1.showLocation();
// ES6 way
class Dot {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    showLocation() {
        // ES6 String Interpolation! Note that the string is enclosed in backticks, not quotes.
        console.log(`This Dot is at x ${this.x} and y ${this.y}`);
    }
}
const dot2 = new Dot(5, 13);
dot2.showLocation();
// End reference


class Ninja{
    constructor(name){
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }
    sayName(){
        console.log(`My name is ${this.name}`)
    }
    showStats(){
        console.log(`Name: ${this.name} | Health: ${this.health} | Speed: ${this.speed} | Strength: ${this.strength}`);
    }
    drinkSake(){
        this.health +=10;
        console.log(`Sake good!`);
    }
}

// Reference:
class Circle extends Dot {
    constructor(x, y, radius) {
        super(x, y);
        this.radius = radius;
    }
}
// End reference


class Sensei extends Ninja{
    constructor(name){
        super(name);
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }
    speakWisdom(){
        this.drinkSake();
        console.log(`I pitty the fool!`);
    }
}

// example output
const sens = new Sensei("Master Splinter");
sens.speakWisdom();
// Sake good!
// I pitty the fool!
sens.showStats();
// Name: Master Splinter | Health: 210 | Speed: 10 | Strength: 10
