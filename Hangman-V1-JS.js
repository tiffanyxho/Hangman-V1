//document.addEventListener('DOMContentLoaded',main);
// test
// initialize empty list called wordList
var wordsList = [];

//window.onload = init;

// Load the words from the dictionary text file to wordsList
function init() {
    // words in test file: rises, bear, listed
    var wordsFile = "https://raw.githubusercontent.com/tiffanyxho/Hangman-V1/master/Hangman-V1-TestWordsList.txt";
    $.get(wordsFile, function(data) {
      wordsList = data.split('\n');
    });
}

function guessWord(){
    var text = document.getElementById('guessWord').value;
    console.log(text);
}

window.onload = function main (){
    init();
    wordsList.forEach(function(element) {
        console.log('hello');
        console.log(element);
    });
}