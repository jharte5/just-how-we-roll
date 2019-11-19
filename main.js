/**********
 * DATA *
 **********/
document.querySelector('#d6-roll').src='./images/start/d6.png'
document.querySelector('#double-d6-roll-1').src='./images/start/d6.png'
document.querySelector('#double-d6-roll-2').src='./images/start/d6.png'
document.querySelector('#d12-roll').src='./images/start/d12.jpeg'
document.querySelector('#d20-roll').src='./images/start/d20.jpg'
const sixes = [];
const doubleSixes = [];
const twelves = [];
const twenties = [];


/*************************
 * RANDOM ROLL GENERATOR *
 *************************/


function getRandomNumber(max) {
    const rand = Math.random();
    const range = rand * max;
    const result = Math.ceil(range);
    
    return result;
}


/*******************
 * YOUR CODE BELOW *
 *******************/


/*******************
 * EVENT LISTENERS *
 *******************/
function rollOne () {
    let roll =  getRandomNumber(6) 
    document.querySelector('#d6-roll').src=`./images/d6/${roll}.png`
}
document.querySelector('#d6-roll').addEventListener('click', rollOne )

function rollTwo () {
    let roll = getRandomNumber(6)
    let rollAgain = getRandomNumber(6)
    document.querySelector('#double-d6-roll-1').src=`./images/d6/${roll}.png`
    document.querySelector('#double-d6-roll-2').src=`./images/d6/${rollAgain}.png`
}
document.querySelector('#double-d6-roll-1').addEventListener('click', rollTwo )
document.querySelector('#double-d6-roll-2').addEventListener('click', rollTwo )

function rollTwelve () {
    let roll = getRandomNumber(12)
    document.querySelector('#d12-roll').src=`./images/numbers/${roll}.png`

}
document.querySelector('#d12-roll').addEventListener('click', rollTwelve)

function rollTwenty () {
    let roll = getRandomNumber(20)
    document.querySelector('#d20-roll').src=`./images/numbers/${roll}.png`
}
document.querySelector('#d20-roll').addEventListener('click', rollTwenty)
/****************
 * MATH SECTION *
 ****************/


/*********
 * RESET *
 *********/
