document.getElementById('fizzbuzz3').addEventListener('submit', function(event) {
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

    // FizzBuzz 3
    const divisors = [3, 5, 7];
    const words = ["Fly", "Brave", "BANG"];
    var output = '';

    function division(number, divisor) {
        return number % divisor === 0;
    }

    for (let i = 1; i<= countLimit; i++) {
        var textOutput = '';
        var divisibleN = [];
        var storeText = '';

        for (let d = 0; d < divisors.length; d++) {
            if (division(i, divisors[d])) {
                divisibleN.push(divisors[d]);
                storeText += words[d] + " ";
            }
        }
        if (divisibleN.length > 0) {
            output += `${i}. ${storeText.trim()} - Divisible by ${divisibleN.join(", ")}<br>`;
            } else {
                output += `${i}. It is not divisible by any of the ${divisors.join(", ")}<br>`;
            }
        }

        document.getElementById('fizz-output').innerHTML = output;
    });

    // Reset
document.getElementById("reset").addEventListener("click", function() {
    document.getElementById("greeting").textContent = "Welcome to Brave Owl!";
    document.getElementById("fizz-output").innerHTML = '';


});