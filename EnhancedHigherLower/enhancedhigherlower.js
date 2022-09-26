let valid_input = false;
let num, input;
let num_guess = 0;
let attempts = []
    

while(!valid_input) {
    input = window.prompt("Select a Max Number");

    num = Math.floor(Math.random() * input) + 1;

    if (!isNaN(num) && num > 0) {
        document.getElementById("input").innerHTML = "Guess a number between 1 and " + Math.round(input);
        valid_input = true;
    }
}

console.log(num);

function guessNumber() {

let guess = Number(document.getElementById("guess").value);

let message = document.getElementById("message");

if (attempts.includes(guess)) {
    message.innerHTML = "You guessed that already, try again";
}
else if (guess > input) {
    message.innerHTML = "This number is not in range, try again."
} 
else if(guess == num) {
    num_guess++
    attempts.push(guess)
    message.innerHTML = "You got it! It took you " + num_guess + " tries and your guesses were " + attempts ;
}
else if (guess > num) {
    message.innerHTML = "No, try a lower number";
    num_guess++
    attempts.push(guess)
}
else if (guess < num){
    message.innerHTML = "No, try a higher number";
    num_guess++
    attempts.push(guess)
}
else if (guess != num){
    message.innerHTML = "That is not a number!";
}
}


