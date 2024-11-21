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

    // FizzBuzz 2
    const firstDivisor = 3;
    const secondDivisor = 5;
    var word1 = 'Fly';
    var word2 = 'Brave';

    var output = '';

    for (var i = 1; i <= 140; i++) {
        if (division(i, firstDivisor) && division (i, secondDivisor)) {
            output += i + '. ' + word1 + ' ' + word2 + '<br>';
        } else if (division(i, firstDivisor) || division (i, secondDivisor)) {
            output += i + '. ' + word2 + '<br>';
        } else {
            output += i + '. ' + word1 + '<br>';
        }
    }  
    document.getElementById('fizz-output').innerHTML = output; 
});
    // Reset
document.getElementById("reset").addEventListener("click", function() {
    document.getElementById("greeting").textContent = "Welcome to Brave Owl!";
    document.getElementById("fizz-output").innerHTML = '';
});