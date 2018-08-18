var win = 0;
var loss = 0;
var chance = 10;
var total_guess = "";

// Creates an array with all alphabets.
var computerChoices = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

// This function is run whenever the user presses a key.
document.onkeyup = function (event) {

    // Randomly chooses a choice from the options array. This is the Computer's guess.
    var computerGuess = computerChoices.charAt(Math.floor(Math.random() * computerChoices.length));
    console.log(computerGuess);

    // Determines which key was pressed.
    var userGuess = event.key;
    total_guess = total_guess +"\'" + userGuess+"\'  ";
    document.getElementById('lbl4').innerHTML = total_guess;

    if (userGuess === computerGuess) {
        win++;
        document.getElementById('lbl1').innerHTML = win;
        total_guess = "";
        document.getElementById('lbl3').innerHTML = chance;
    }
    else {
        chance--;
        document.getElementById('lbl3').innerHTML = chance;

        if(chance===0)
        {
            loss++;
            document.getElementById('lbl2').innerHTML = loss;
            total_guess = "";
            chance = 10;
        }
    }
};