function runGame() {

    const target = Math.floor(Math.random() * 100) + 1;
    let guessNumber = 0;
    let guessString = "";
    let correct = false;
    let numTries = 0;
    do {
        guessString = prompt("Enter Your guess number between 1 to 100!");
        numTries += 1;
        if (guessString === null) {
            return;
        }
        guessNumber = +guessString; //or guessNumber = Number(guessString);
        correct = checkGuess(guessNumber, target);
    }
    while (!correct)
    alert("Yeah! Your guess is correct after " + numTries + " times tried!");
}
//set up checkGuess function
function checkGuess(guessNumber, target) {
    let correct = false;
    if (isNaN(guessNumber)) {
        alert("It is not a number!")

    } else if ((guessNumber < 1) || (guessNumber > 100)) {
        alert("Your number is out of range!")

    } else if (guessNumber > target) {
        alert("Your number is larger than the target!")
    } else if (guessNumber < target) {
        alert("Your number is smaller than the target!")
    } else {
        correct = true;
    }
    return correct;

}