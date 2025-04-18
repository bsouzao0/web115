document.getElementById('fizzbuzz4').addEventListener('submit', function(event) {
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

    // FizzBuzz 4

    const divisors = [
        parseInt(document.getElementById('num1').value),
        parseInt(document.getElementById('num2').value),
        parseInt(document.getElementById('num3').value)
    ];

    const words = [ 
        document.getElementById('word1').value,
        document.getElementById('word2').value,
        document.getElementById('word3').value
    ];

    var limit = parseInt(document.getElementById('limit').value);
    var defaultWord = document.getElementById('default').value || '';
    var output = '';

    function division(number, divisor) {
        return number % divisor === 0;
    }

    for (let i = 1; i <= limit; i++) {
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
            output += `${i}. ${storeText.trim()}<br>`;
            } else {
            output += `${i}. ${defaultWord ? `${defaultWord}` :''}<br>`;
            }
        }
        document.getElementById('fizz-output').innerHTML = output;
    });

    // Reset
document.getElementById("reset").addEventListener("click", function() {
    document.getElementById("greeting").textContent = "Let's Play!";
    document.getElementById("fizz-output").innerHTML = '';

});