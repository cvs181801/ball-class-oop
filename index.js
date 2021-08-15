

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

// now try the ES5 way ~~~

function Ball(color) {
    this.color = color;
}

const yellowBall = new Ball("yellow");
console.log(yellowBall.color);

const redBall = new Ball("red");
console.log(redBall.color);

