// AFTER: ALLOW USER TO GUESS 1 LETTER AT A TIME
// DECIDE ON A SCORING SYSTEM (HOW DOES THE PLAYER LOSE?)


// declare/initialize global variables
let wordsList = newArr();
let randWord = '';
let randNum;
let correctGuesses = 0;
let guessesLeft = 10;

// checks when user pushes enter key & also checks if you guessed the right word, displays whether you got right word or not
var checkEnter = window.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        // set user guess using guessWord function
        var userWordGuessed = guessWord();

        if (wordsList.length > 0){
            // chooses a new word in the wordsList to be guessed
            randWord = newWord(wordsList);
        
            // checks if user's word guessed is equal to random word using checkGuess function
            var guessRight = checkGuess(randWord, userWordGuessed);
            // removes word from wordsList if player guessed correctly
            if (guessRight){
                removeWordFromList(wordsList);
                correctGuesses++;
                document.getElementById('score').innerHTML = 'Score: ' + correctGuesses;
            }
        }
        // victory message
        if (wordsList.length == 0){
            console.log ("Congrats! You won :)")
        }
    }
}, false);

// chooses a new word in the wordsList array to be guessed
function newWord(list){
    // generate a random number between 0 and the length of wordsList to get a random word in the array
    randNum = Math.floor(Math.random() * list.length);
    let randomWord = list[randNum];
    
    // print random key word to guess
    console.log('The key word is ' + randomWord);
    return randomWord;
}

function removeWordFromList(list){
    list.splice(randNum, 1);
}

// allows user to guess a word in input box and logs the word guessed into console
function guessWord(){
    var text = document.getElementById('guessWord').value;
    console.log(text);
    return text;
}

// checks if randomWord == userGuess & log result & return value: true/right or false/wrong
function checkGuess(randomWord, userGuess){
    if (randomWord == userGuess){
        console.log("RIGHT!!");
        return true;
    }else{
        console.log("WRONG!!");
        return false;
    }
}

function newArr(){
    return ['rest', 'beast', 'cat', 'dude'];
}

function printArr(arr){
    arr.forEach(function(string){
        console.log(string);
    });
}