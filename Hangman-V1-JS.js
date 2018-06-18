// initialize empty list called wordList
//var wordsList = [];

// Load the words from the dictionary text file to wordsList
function init() {
    // words in test file: test, testing, tester, tests
    var wordsFile = "https://raw.githubusercontent.com/tiffanyxho/Hangman-V1/master/Hangman-V1-TestWordsList.txt";
    //var wordList;
    $.get(wordsFile, function(data) {
        var wordList = data.split('\n');
        wordList.forEach(function(element){
            console.log(element);
        });
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

function guessWord(){
    var text = document.getElementById('guessWord').value;
    console.log(text);
}

window.onload = function main (){
    var wordsList = init();
    console.log(wordsList);
}