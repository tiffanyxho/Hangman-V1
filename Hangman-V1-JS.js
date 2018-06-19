window.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        guessWord();
    }
}, false);

// initialize empty list called wordList
var wordsList = ['wooooo'];
var tester;

// allows user to 
function guessWord(){
    var text = document.getElementById('guessWord').value;
    console.log(text);
}

// main function
window.onload = function main (){
    init();
    test = init();
    console.log(wordsList);
    tester = init();
    console.log(tester);
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