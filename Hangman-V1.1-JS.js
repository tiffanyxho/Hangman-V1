// AFTER: ALLOW USER TO GUESS 1 LETTER AT A TIME
// DECIDE ON A SCORING SYSTEM (HOW DOES THE PLAYER LOSE?)

// declare/initialize global variables
let wordsList = easyWordsArr();   // list of possible words to be guessed
let randWord = '';      // word to be guessed
let randNum;            // random number generated to get random word in list
let correctGuesses = 0;     // how many correct guesses (score)
let guessesLeft = 10;       // how many guesses player has left
let notInWord = "";         // used to show users incorrect guesses
randWord = newWord(wordsList);

// sets partOfWord to have the same number of underscores as the word to be guessed (randWord)
let partOfWord = '';
for (let i = 0; i < randWord.length; i++){
    partOfWord += '_';
}
document.getElementById("wordToGuess").innerHTML = partOfWord;

// When right arrow pressed on title screen, changes from title to instructions
document.getElementById("titleToIns").addEventListener("click", function(){
    document.getElementById("title").style.display = "none";
    document.getElementById("instructions").style.display = "initial";
});

// When right arrow pressed on instructions screen, changes from instructions to game
document.getElementById("insToGame").addEventListener("click", function(){
    document.getElementById("instructions").style.display = "none";
    document.getElementById("gameboard").style.display = "initial";
});

// When left arrow pressed on instructions screen, changes from instructions to title
document.getElementById("insToTitle").addEventListener("click", function(){
    document.getElementById("instructions").style.display = "none";
    document.getElementById("title").style.display = "initial";
});

// checks when user pushes a key, updateGame function is where all the actions of the game occurs
window.addEventListener("keypress", function updateGame (e) {
    // used to see if letter is in word
    let letterInWord = false;

    /* checks if key pressed is in the word, if it is change underscores where letter is in word to the letter & 
    change letterInWord boolean to true*/
    if (randWord.includes(e.key)){
        for (let i = 0; i < randWord.length; i++){
            if (randWord.charAt(i) == e.key){
                partOfWord = setCharAt(partOfWord, i, e.key);
            }
        }
        letterInWord = true;
        console.log(partOfWord);
        document.getElementById("wordToGuess").innerHTML = partOfWord;
    }

    // checks if letter guessed is in the word or if the letter has already been guessed, if both are true, then do nothing
    // otherwise, add the incorrectly guessed letter to the list of incorrect letters
    if (letterInWord === false && !notInWord.includes(e.key)){
        notInWord += e.key + " ";
        guessesLeft--;
    }

    // Stop event listener for keypress if there are no more guesses
    if (guessesLeft === 0) {
        console.log("you have no more guesses :(");
        document.getElementById("endText").innerHTML = "You have no more guesses :(";
        window.removeEventListener("keypress", updateGame);
    }
    
    // if the player guesses all letters correctly, then...
    if (!partOfWord.includes("_")){
        console.log("You guessed it! The word is " + randWord + "!");
        
        correctGuesses++;   // increment score
        removeWordFromList(wordsList);  // remove word guessed
        
        // check if all words have been guessed yet
        if (wordsList.length == 0){
            document.getElementById("endText").innerHTML = "Congrats! You passed the first round :)";   // victory message
        }else{
            randWord = newWord(wordsList);  // get new word
            partOfWord = replaceWithUnderscores(randWord);    // replaces all characters in partOfWord to underscores with length of the new randWord
            document.getElementById("wordToGuess").innerHTML = partOfWord;  // changes HTML to new word
            notInWord = "";     // reset the incorrect letters guessed to none
        }
    }

    // set HTML to update score & incorrect letters guessed by player
    document.getElementById('score').innerHTML = 'Score: ' + correctGuesses;
    document.getElementById("lettersNotInWord").innerHTML = notInWord;
}, false);

// returns a string with underscores, the number of underscores is the length of word
function replaceWithUnderscores(word){
    var newWord = "";
    for (let i = 0; i < word.length; i++){
        newWord += "_";
    }
    return newWord;
}

// changes a character in given str at index to a new char, chr
function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substr(0,index) + chr + str.substr(index+1);
}

// randomly generates number between 0 and list.length-1 and returns the word at the index of random number in list
function newWord(list){
    // generate a random number between 0 and the length of wordsList to get a random word in the array
    randNum = Math.floor(Math.random() * list.length);
    let randomWord = list[randNum];
    
    // print random key word to guess
    console.log('The key word is ' + randomWord);
    return randomWord;
}

// Removes the word at randNum in array list --> should probably change to have a parameter called index for index position of word
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

// Array of easy words to guess
function easyWordsArr(){
    return ['rest', 'beast', 'cat', 'dude'];
}

// Prints each element in arr
function printArr(arr){
    arr.forEach(function(string){
        console.log(string);
    });
}