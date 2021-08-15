

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

//grab elements from the DOM
const ball = document.querySelector(".ball");
const buttonNeutral = document.querySelector(".container__btn--neutral");
const buttonCool = document.querySelector(".container__btn--cool");
const buttonBright = document.querySelector(".container__btn--bright");
const buttonDark = document.querySelector(".container__btn--dark");
const buttonWarm = document.querySelector(".container__btn--warm");
//test area 

console.log(ball);

//make a way to create diff color ball themes
function Ball(color = "regular", backgroundColor) {
    this.color = color;
    this.backgroundColor = backgroundColor;
}

// Ball.prototype.bounce = function() {
//     return `The ${this.color} ball bounces!`;
//}

//make some ball themes of diff colors

const neutralBall = new Ball();
console.log(neutralBall.color);

const coolBall = new Ball("aqua", "white");
console.log(coolBall.color);

const brightBall = new Ball("red", "yellow");
console.log(brightBall.color);

const darkBall = new Ball("grey", "black");
console.log(darkBall.color);

const warmBall = new Ball("peru", "peachpuff");
console.log(warmBall.color);

//console.log(yellowBall.bounce()); //the method that exists in relation to the function constructor

function changeToCool() {
    ball.style.backgroundColor = `${coolBall.color}`;
    body.style.backgroundColor = `${coolBall.backgroundColor}`;
}

function changeToBright() {
    ball.style.backgroundColor = `${brightBall.color}`;
    body.style.backgroundColor = `${brightBall.backgroundColor}`;
}

function changeToDark() {
    ball.style.backgroundColor = `${darkBall.color}`;
    body.style.backgroundColor = `${darkBall.backgroundColor}`;
}

function changeToWarm() {
    ball.style.backgroundColor = `${warmBall.color}`;
    body.style.backgroundColor = `${warmBall.backgroundColor}`;
}


button.addEventListener("click", function(e) {
    e.preventDefault();
    console.log("e listener worked");
    return changeColor();
})

