// NEXT TODO: GET THE KEYWORD OUT OF THE ARR & GENERATE A NEW KEY WORD
// AFTER: INCREMENT SCORE
// AFTER: ALLOW USER TO GUESS 1 LETTER AT A TIME
// AFTER: ALLOW USER TO GUESS MULTIPLE LETTERS AT A TIME - COUNTS AS ONLY 1 "ERROR"
// DECIDE ON A SCORING SYSTEM (HOW DOES THE PLAYER LOSE?)

// declare/initialize global variables
let wordsList = newArr();
let randWord = '';
let randNum;

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
            }
        }
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

// main function - TEST #2
/*window.onload = function main(){
    // store text file with list of words in wordsFile
    var wordsFile = "https://raw.githubusercontent.com/tiffanyxho/Hangman-V1/master/Hangman-V1-TestWordsList.txt";

    // separate words in wordList into strings and store in array using split
    $.get(wordsFile, function(data) {
        var wordList = data.split('\n');
    });
}*/

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

var wordList = [];
// Load the words from the dictionary text file to wordsList
window.onload = function init() {
    console.log('from init O:<');
    // words in test file: test, testing, tester, tests
    var wordsFile = "https://raw.githubusercontent.com/tiffanyxho/Hangman-V1/master/Hangman-V1-TestWordsList.txt";
    $.get(wordsFile, function(data) {
        //var wordList = data.split('\n');
        wordList = data.split('\n');
        //return wordList;
        
    });
    console.log(wordList);
    if (wordList.length === 0){
        console.log('im empty');
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