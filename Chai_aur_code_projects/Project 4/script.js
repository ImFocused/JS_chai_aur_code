const randomno = parseInt(Math.random()*100)+1;
console.log(randomno);

const userinput =  document.querySelector('#guessField');
const submit = document.querySelector('#subt');
const guessslot = document.querySelector('.guesses');
const guessrem = document.querySelector('.lastResult');
const loworhigh = document.querySelector('.lowOrHi');
const startoverparent = document.querySelector('.resultParas');

let prevguessarr = [];
let guesscount = 0;
let playgame = true;  // for checking the eligibilty to play the game
let guessremaining = 10;

const startoverPara = document.createElement('p');

if(playgame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess = parseInt(userinput.value);
        console.log(guess);
        validateguess(guess);
    })


}


function validateguess(guess){
    if(isNaN(guess)){
        alert("Please enter a valid number");
        userinput.value = " ";
    }else if(guess <1){
        alert("Please enter a number greater than 0");
        userinput.value = " ";
    }else if(guess>100){
        alert("Please enter a number less than 100");
        userinput.value = " ";
    }else{
        check(guess);
        prevguessarr.push(guess);
        guesscount++;

        userinput.value = " ";
        console.log(prevguessarr);
        guessslot.innerHTML = `${prevguessarr}`;
        guessrem.innerHTML = `${10-guesscount}`;
        if(guesscount === 10){
            playgame = false;
            loworhigh.innerHTML = `Game Over! The number was ${randomno}`;
            userinput.setAttribute("disabled", "");
            submit.setAttribute("disabled", "");
            startOver();
            

        }
        
            

    }

}

function check(guess){
    if(guess === randomno){
        loworhigh.innerHTML = "Congratulations! You guessed it right!";
        userinput.setAttribute("disabled", "");
        submit.setAttribute("disabled", "");
        playgame = false;
        startOver();
        
    }else if(guess < randomno){
        loworhigh.innerHTML = "Your guess is too low!";
    }
    else if(guess > randomno){
        loworhigh.innerHTML = "Your guess is too high!";
    }
}
function startOver() {

    startoverPara.innerHTML = `<button id="start_new">Start New Game</button>`;
    startoverparent.appendChild(startoverPara);


    const startnewgame = document.querySelector('#start_new');
    startnewgame.addEventListener('click', function() {
        resetgame();
        startoverparent.removeChild(startoverPara);
    });

}

function resetgame(){
    userinput.value = " ";
    guessslot.innerHTML = " ";
    loworhigh.innerHTML = " ";
    guesscount = 0;
    prevguessarr = [];
    playgame = true;
    guessrem.innerHTML = `${10-guesscount}`;
    userinput.removeAttribute("disabled");
    submit.removeAttribute("disabled");

}