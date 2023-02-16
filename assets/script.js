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

  var q1El = document.createElement("h2");

  // create ordered list items

  var c1El = document.createElement("button");
  var c2El = document.createElement("button");
  var c3El = document.createElement("button");

  q1El.textContent = "Commonly used data types DO Not include: ";
  c1El.textContent = "1. strings";
  c2El.textContent = "2. booleans ";
  c3El.textContent = "3. alerts ";

  body.appendChild(q1El);
  body.appendChild(c1El);
  body.appendChild(c2El);
  body.appendChild(c3El);

  q1El.setAttribute(
    "style",
    "margin:auto; width:50%; font-size:25px text-align:center;"
  );
  c1El.style.backgroundColor = "orange";
  c2El.style.backgroundColor = "orange";
  c3El.style.backgroundColor = "orange";
}

var startButton = document.querySelector("#button");

startButton.addEventListener("click", () => {
  clearContainer();
  printResults();
});

(function () {
  var questions = [
    {
      question: "Commonly used data types DO Not include: ",
      choices: ["strings", "booleans", "alerts", "numbers"],
      correctAnswer: "alerts",
    },
    {
      question:
        "The condition in an if / else statement is enclosed with _______.",
      choices: ["quotes", "curly brackets", "parenthesis", "square brackets"],
      correctAnswer: "curly brackets",
    },
  ];
});
