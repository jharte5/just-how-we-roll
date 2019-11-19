/**********
 * DATA *
 **********/
document.querySelector('#d6-roll').src='./images/start/d6.png'
document.querySelector('#double-d6-roll-1').src='./images/start/d6.png'
document.querySelector('#double-d6-roll-2').src='./images/start/d6.png'
document.querySelector('#d12-roll').src='./images/start/d12.jpeg'
document.querySelector('#d20-roll').src='./images/start/d20.jpeg'
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
const rotatePix = document.querySelector('#d6-roll')  
function changePic (){
    
}

/****************
 * MATH SECTION *
 ****************/


/*********
 * RESET *
 *********/
