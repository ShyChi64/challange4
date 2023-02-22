var startButtonEl = document.getElementById("start-button"); 
var startingUiEl = document.getElementById("starting-UI"); 
var quizUiEl = document.getElementById("quiz-UI"); 

startButtonEl.addEventListener("click", function(){
    startingUiEl.classList.add("hidden"); 
    quizUiEl.classList.remove("hidden"); 
}); 

