// checks when user pushes enter key
var checkEnter = window.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        userWordGuessed = guessWord();
    }
}, false);

window.addEventListener('checkEnter', function (  ) {
    var guessRight = checkGuess('test', userWordGuessed);

    if (guessRight){
        console.log('you win!');
    }else{
        console.log('try again');
    }
}, false);

// initialize empty list called wordList
var wordsList = ['wooooo'];
var tester;

// allows user to guess a word in input box and logs the word guessed into console
function guessWord(){
    var text = document.getElementById('guessWord').value;
    console.log(text);
    return text;
}

// main function - TEST #1
/*
window.onload = function main (){
    init();
    test = init();
    console.log(wordsList);
    tester = init();
    console.log(tester);
}
*/

// main function - TEST #2
window.onload = function main(){
    // store text file with list of words in wordsFile
    var wordsFile = "https://raw.githubusercontent.com/tiffanyxho/Hangman-V1/master/Hangman-V1-TestWordsList.txt";
    
    // variable wordList will store list of words from wordsFile
    var wordList;

    // separate words in wordList into strings and store in array using split
    $.get(wordsFile, function(data) {
        wordList = data.split('\n');

        wordList.forEach(function(element) {
            console.log(element);
        });

        
    });
}

function checkGuess(randomWord, userGuess){
    if (randomWord === userGuess){
        console.log("RIGHT!!");
        return true;
    }else{
        console.log("WRONG!!");
        return false;
    }
}

// Load the words from the dictionary text file to wordsList
function init() {
    console.log('from init O:<');
    // words in test file: test, testing, tester, tests
    var wordsFile = "https://raw.githubusercontent.com/tiffanyxho/Hangman-V1/master/Hangman-V1-TestWordsList.txt";
    //var wordList;
    $.get(wordsFile, function(data) {
        var wordList = data.split('\n');
        return wordList;
    });
    // alternate option for top...  not sure which works better
    /*$(document).ready(function () {
        $.get('https://raw.githubusercontent.com/tiffanyxho/Hangman-V1/master/Hangman-V1-TestWordsList.txt',function(response){
            var returnWords = response.split("\n");
            returnWords.forEach(function(element) {
                console.log(element);
            });
            return returnWords;
        });
    });*/
}

// for some reason this prints undefined when i have !==, but doesn't print undefined when i have ===
/*
if (typeof (wordsList) === 'undefined'){
    console.log(wordList);
}
*/