document.getElementById('fizzbuzz1').addEventListener('submit', function(event) {
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

    // FizzBuzz 1
    function createList() {
        const word = document.get
    }
    document.getElementById('fizz-output').innerHTML = output;
});
    // Reset
    document.getElementById("reset").addEventListener("click", function() {
        document.getElementById("greeting").textContent = "Welcome to Brave Owl!";
        document.getElementById("fizz-output");
    });