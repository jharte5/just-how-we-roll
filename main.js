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

    sixes.push(roll)
    const mean = oneDieMean(sixes)
    const bigMean = document.querySelector('#d6-rolls-mean')
    bigMean.innerText = mean

    const median = oneDieMedian(sixes)
    const bigMedian = document.querySelector('#d6-rolls-median')
    bigMedian.innerText = median

    const mode = oneDieMode(sixes)
    const bigMode = document.querySelector('#d6-rolls-mode')
    bigMode.innerText = mode
}
document.querySelector('#d6-roll').addEventListener('click', rollOne )

function rollTwo () {
    let roll = getRandomNumber(6)
    let rollAgain = getRandomNumber(6)
    document.querySelector('#double-d6-roll-1').src=`./images/d6/${roll}.png`
    document.querySelector('#double-d6-roll-2').src=`./images/d6/${rollAgain}.png`

    doubleSixes.push(roll + rollAgain)
    const mean = twoDieMean(doubleSixes)
    const bigMean = document.querySelector('#double-d6-rolls-mean')
    bigMean.innerText = mean

    const median = twoDieMedian(doubleSixes)
    const bigMedian = document.querySelector('#double-d6-rolls-median')
    bigMedian.innerText = median

    const mode = twoDieMode(doubleSixes)
    const bigMode = document.querySelector('#double-d6-rolls-mode')
    bigMode.innerText = mode

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
function oneDieMean (sixes) {
    let total = 0, i;
    for (i = 0; i < sixes.length; i += 1) {
        total += sixes[i];
    }
    return total / sixes.length;

}

function oneDieMedian (sixes) {
    let median = 0
    let numsLen = sixes.length;
    sixes.sort();

    if (
        numsLen % 2 === 0 
    ) {
        
        median = (sixes[numsLen / 2 - 1] + sixes[numsLen / 2]) / 2;
    } else { 
        
        median = sixes[(numsLen - 1) / 2];
    }
    return median;
}
function oneDieMode (sixes) {
    let modes = []
    let count = []
    let number = 0
    let maxIndex = 0;
    for (i = 0; i < sixes.length; i += 1) {
        number = sixes[i];
        count[number] = (count[number] || 0) + 1;
        if (count[number] > maxIndex) {
            maxIndex = count[number];
        }
    }
    for (i in count)
        if (count.hasOwnProperty(i)) {
            if (count[i] === maxIndex) {
                modes.push(Number(i));
            }
        }
    return modes;
}
function twoDieMean (doubleSixes) {
    let total = 0, i;
    for (i = 0; i < doubleSixes.length; i += 1) {
        total += doubleSixes[i];
    }
    return total / doubleSixes.length;

}

function twoDieMedian (doubleSixes) {
    let median = 0
    let numsLen = doubleSixes.length;
    doubleSixes.sort();

    if (
        numsLen % 2 === 0 
    ) {
        
        median = (doubleSixes[numsLen / 2 - 1] + doubleSixes[numsLen / 2]) / 2;
    } else { 
        
        median = doubleSixes[(numsLen - 1) / 2];
    }
    return median;

}

function twoDieMode (doubleSixes) {
    let modes = []
    let count = []
    let number = 0
    let maxIndex = 0;
    for (i = 0; i < doubleSixes.length; i += 1) {
        number = doubleSixes[i];
        count[number] = (count[number] || 0) + 1;
        if (count[number] > maxIndex) {
            maxIndex = count[number];
        }
    }
    for (i in count)
        if (count.hasOwnProperty(i)) {
            if (count[i] === maxIndex) {
                modes.push(Number(i));
            }
        }
    return modes;

}


/*********
 * RESET *
 *********/
