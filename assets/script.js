var timeEl = document.querySelector(".time");

var secondsLeft = 25;

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left till game is finished.";

    if (secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      sendMessage();
    }
  }, 1000);
}

// Function to create and append colorsplosion imageset
function sendMessage() {
  timeEl.textContent = "GAME OVER ";
}

function clearContainer() {
  document.getElementById("MyDiv").innerHTML = "";
}

function printResults() {
  var body = document.body;

  var h1El = document.createElement("h1");
  var h2El = document.createElement("h2");
  var h3El = document.createElement("h3");
  var h4El = document.createElement("h4");

  h1El.textContent = "Commonly used data types DO Not include: ";
  h2El.textContent = "1. strings ";
  h3El.textContent = "2. booleans";
  h4El.textContent = "3. alerts";

  body.appendChild(h1El);
  body.appendChild(h2El);
  body.appendChild(h3El);
  body.appendChild(h4El);
}

var startButton = document.querySelector("#button");

startButton.addEventListener("click", () => {
  clearContainer();
  printResults();
});
