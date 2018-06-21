// AFTER: ALLOW USER TO GUESS 1 LETTER AT A TIME
// DECIDE ON A SCORING SYSTEM (HOW DOES THE PLAYER LOSE?)

// declare/initialize global variables
let wordsList = newArr();   // list of possible words to be guessed
let randWord = '';  // word to be guessed
let randNum;        // random number generated to get random word in list
let correctGuesses = 0;     // how many correct guesses (score)
let guessesLeft = 10;       // how many guesses player has left
randWord = newWord(wordsList);

let partOfWord = '';
for (let i = 0; i < randWord.length; i++){
    partOfWord += '_';
}

// checks when user pushes enter key & also checks if you guessed the right word, displays whether you got right word or not
var checkEnter = window.addEventListener('keypress', function (e) {
    //randWord = newWord(wordsList);
    console.log(e.key);

    if (randWord.includes(e.key)){
        for (let i = 0; i < randWord.length; i++){
            if (randWord.charAt(i) == e.key){
                partOfWord = setCharAt(partOfWord, i, e.key);
            }
        }
        console.log(partOfWord);
    }
    
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

// changes a character in given str at index to a new char, chr
function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substr(0,index) + chr + str.substr(index+1);
}

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