var startButton = document.getElementById("start-button"); 
var questions = document.getElementById("questions-container1"); 
var question2 = document.getElementById("questions-container2")
var timerId = document.getElementById("timer"); 
var elaspedTime = 0 

startButton.addEventListener("click", startGame); 

function startGame() {
    document.getElementById("quiz-start").classList.add("hide"); 
    //startButton.classList.add("hide"); 
    questions.classList.remove("hide"); 
    setInterval(myTimer, 1000); 
}
function nextQuestion() { 
    question2.classList.remove("hide"); 
}

function myTimer() { 
    elaspedTime++
    timerId.innerHTML="Timer:"+elaspedTime
}