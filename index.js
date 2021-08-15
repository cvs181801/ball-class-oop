

// class Ball {
//     constructor(color = "regular") {
//         // this.height = height;
//         // this.width = width;
//         this.color = color;
//         //this.bounceLevel = bounceLevel;
//     }
// }

// const tennis = new Ball("yellow");
// console.log(tennis.color);

// const regular = new Ball();
// console.log(regular.color);

// const football = new Ball("brown");
// console.log(football.color);

// const baseball = new Ball("white");
// console.log(baseball.color);

// now try the ES5 way (with some template literals)~~~

function Ball(color = "regular") {
    this.color = color;
}

Ball.prototype.bounce = function() {
    return `The ${this.color} ball bounces!`;
}

const yellowBall = new Ball("yellow");
console.log(yellowBall.color);

const redBall = new Ball("red");
console.log(redBall.color);

const regularBall = new Ball();
console.log(regularBall.color);

console.log(yellowBall.bounce()); //the method that exists in relation to the function constructor