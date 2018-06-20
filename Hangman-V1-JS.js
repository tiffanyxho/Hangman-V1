// checks when user pushes enter key & also checks if you guessed the right word, displays whether you got right word or not
var checkEnter = window.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        // set user guess using guessWord function
        var userWordGuessed = guessWord();

        // checks if user's word guessed is equal to random word using checkGuess function
        var guessRight = checkGuess(randWord, userWordGuessed);
    }
}, false);


// initialize wordList to list of words returned by array;
var wordsList = newArr();
let randNum = Math.floor(Math.random() * wordsList.length);
var randWord = wordsList[randNum];
console.log('The key word is ' + randWord);

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