document.getElementById('fizzbuzz1').addEventListener('submit', function(event) {
    event.preventDefault();

    // Inputs
    var firstName = document.getElementById('first-name').value;
    var middleInitial = document.getElementById('middle-initial').value;
    var lastName = document.getElementById('last-name').value;

    // Greeting message
    var fullName = firstName + " " + (middleInitial ? " " + middleInitial + ". " : "") + " " + lastName;
    var welcome = "Welcome to Brave Owl, " + fullName + "!";

    // Greeting Updated
    document.getElementById('greeting').textContent = welcome;

    // Prompt for a number
    var countLimit = prompt("How high do you want to count, " + firstName + "?");

    // FizzBuzz 2
    const firstDivisor = 3;
    const secondDivisor = 5;

    var output = '';

    for (let i = 1; i<= countLimit; i++) {
        if (division(i, firstDivisor) && division (i, secondDivisor)) {
            output += i + 'This number is divisible by  ' + firstDivisor + 'and ' + secondDivisor + '<br>';
        } else if (division(i, firstDivisor)) {
            output += i + 'This number is divisible by  ' + firstDivisor + '<br>';
        } else if (division (i, secondDivisor)) {
            output += i + 'This number is divisible by  ' + secondDivisor + '<br>';
        } else {
            output += i + 'It is not divisible by  ' + firstDivisor + 'or ' + secondDivisor + '<br>';
        }
    }  
    document.getElementById('fizz-output').innerHTML = output; 
});
    // Reset
document.getElementById("reset").addEventListener("click", function() {
    document.getElementById("greeting").textContent = "Welcome to Brave Owl!";
    document.getElementById("fizz-output").innerHTML = '';
});