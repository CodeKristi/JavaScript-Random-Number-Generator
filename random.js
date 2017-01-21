
var input = prompt('Please type a starting number.');
var bottomNumber = parseInt(input);
var userNumber = prompt('Please type an ending number.');
var topNumber = parseInt(userNumber);
var randomNumber = Math.floor( Math.random() * (topNumber - bottomNumber + 1)) + bottomnumber;
var message = "<p>" + randomNumber + " is a number between " + bottomNumber + " and " topNumber + ".</p>";
document.write(message);
