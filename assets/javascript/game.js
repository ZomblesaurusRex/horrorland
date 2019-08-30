//create an array of words
var words = ["poltergeist", "graveyard", "screams", "headless horseman", "creature", "monster", "goblin", "bogeyman", "grave", "intestines", "brimstone", "phantom", "worms", "clowns", "werewolf", "horror", "zombie", "doom"];
//create object for bse stats
var stats = {
    lives: 3,
    guesses: 10,
    score: 0,
}
//function for picking random words
var word = words[Math.floor(Math.random() * words.length)];
//this shows an underscore for each letter in the word chosen
var answerArr = [];
for (var i = 0; i < word.length; i++) {
    answerArr[i] = " _ ";
}
//keep track of the wrong letters
var wrong = [];

//keep track of lives
//how many guesses are left
//keep track of score

//if lives = 0 game over
if (stats.lives === 0) {
    alert("Game Over!");
}



document.onkeyup = function (event) {

    var letter = event.key.toLowerCase();
    //function for onkeyup triggering functions for right or wrong choice
    if (letter === "") {
        car.honk();
        reWriteStats();
    }
    //function for adjusting score 

    //function for you win at score = 10

    //function for removing lives

    //pseudo function for game over at 0 lives

    function wrongChoice() {
        if
    //show the onkeyup character in wrong answer section
    if
    //-1 in the guesses left section
    else if
    //IF guesses left is 0, -1 life
        //if lives is 0, Game over
    
    else
    //cycle to random new word
    
};
    //keep track of the right letters when they get pressed
    function rightChoice() {
        //if on keyup is a character in the hidden word, 
        //reveal the letter
        //do not affect guesses left

        //IF a right choice completes a word
        //+1 to the score
        //choose new random word
        //clear guessed letters

        //IF score gets to 10
        //YOU WIN
    } 