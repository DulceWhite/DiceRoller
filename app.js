// Roll the Dice

//source https://icodemag.com/3d-rolling-dice-css-javascript/

const cube = document.querySelector(`.cube`);
const rollBtn = document.querySelector(`.rollBtn`);

let currentClass = '';

// This function will generate a random number between 1 and 6 (or other value set to it)

function getRandomInt(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

// addEventListener for button

function rollDice(){
    // generate random number between 1 and 6 
    let randNum = getRandomInt(1,7);
   
    //generate a class with the random number between 1-6 called showClass
    let showClass = 'show-'+ randNum;
    // if there is a class already selected, remove() it
    if (currentClass){
        cube.classList.remove(currentClass);
    }
    //add the new showclass with the generated number
    cube.classList.add(showClass);
    //set the current class to the randomly generated number
    currentClass = showClass;
    console.log(currentClass);
}

//set initial side

rollDice();
// on click event listener for btn elem

rollBtn.addEventListener(`click`, rollDice);