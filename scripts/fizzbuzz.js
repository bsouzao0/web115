document.getElementById('fizzbuzz').addEventListener('submit', function(event) {
    event.preventDefault();

    // Inputs
    var firstName = document.getElementById('first-name').value;
    var middleInitial = document.getElementById('middle-initial').value;
    var lastName = document.getElementById('last-name').value;

    // Greeting message
    var fullName = firstName + " " + middleInitial + ". " + lastName;
    var welcome = "Welcome to Brave Owl, " + fullName + "!";

    // Greeting Updated
    document.getElementById('greeting').textContent = welcome;

    // Prompt for a number
    var countLimit = prompt("How high do you want to count, " + firstName + "?");

    // FizzBuzz
    var output = '';
    for (let i = 1; i<= countLimit; i++) {
        if (i % 2 === 0) {
            output += i + '. Brave Owl - The number is even <br>';
        } else {
            output += i + '. Brave Owl - The number is odd <br>';
        }
    }
    document.getElementById('fizz-output').innerHTML = output;
});
    // Reset
    document.getElementById("reset").addEventListener("click", function() {
        // Clear the output area
        const outputBox = document.getElementById("fizz-output");
        outputBox.innerHTML = "";
    
        // Reset form fields
        document.getElementById('fizzbuzz').reset();
    
        // Reset the greeting
        document.getElementById('greeting').textContent = "Welcome to Brave Owl";
    });