const cluePauseTime = 333;
const nextClueWaitTime = 1000;

//Global Variables
//Global constants
var clueHoldTime = 1000;
var pattern = [];
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;
var guessCounter = 0;
var mistakeCounter = 3;
var drum;
var time;
var seconds = 0;

function randomPattern() {
  let num = 0;
  for (let i=0; i<8; i++) {
    num = Math.floor(Math.random() * 5)+1;
    pattern[i]=num;
  }
}

function startGame(){
    //initialize game variables
    progress = 0;
    gamePlaying = true;
    randomPattern();
    mistakeCounter = 3;
    time = 25;
    seconds = 0;
  
    // swap the Start and Stop buttons
    document.getElementById("startBtn").classList.add("hidden");
    document.getElementById("stopBtn").classList.remove("hidden");
    document.getElementById("strikes").innerHTML = "Chances left: " + mistakeCounter;  
    countdownTimer()
    document.getElementById("timer").innerHTML = time + ' Seconds Left';
    playClueSequence();
}

function stopGame(){
    gamePlaying = false;
  
    // swap the Start and Stop buttons
    document.getElementById("startBtn").classList.remove("hidden");
    document.getElementById("stopBtn").classList.add("hidden");
    clearInterval()
}

// Sound Synthesis Functions


const freqMap = {
  1: 261.6,
  2: [112,200,300],
  3: 329.6,
  4: 392,
  5: 466.2
}

var drum = freqMap[2];
var counter = 0;
var index = 0;

function startDrum(index) {
    if (index == 3) {
      index = 0
    }
    console.log(index)
    context.resume()
    o.frequency.value = drum[index]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying=true
    setTimeout(function(){stopTone()},500)
    index++

}


function playDrum() {
  var counter = 0;
  var drumInterval = setInterval(function(){
    startDrum(counter)

    counter++;
    if(counter === 3) {
        clearInterval(drumInterval);
    }
}, 200);
  
}


function playTone(btn,len){   
  if (btn == 2) {
      playDrum()
    }
  else {
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
  }
}

function startTone(btn){
  if(!tonePlaying){
    if (btn == 2) {
      playDrum()
    }
    else { 
      o.frequency.value = freqMap[btn]
      g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
      context.resume()
      tonePlaying = true
    }
}
}
function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    clueHoldTime = clueHoldTime/1.03;
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  guessCounter = 0;
  context.resume();
  let delay = nextClueWaitTime; 
  for(let i=0;i<=progress;i++){ 
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]);
    delay += clueHoldTime; 
    delay += cluePauseTime;
  }
}
  
function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
  }
  
function winGame(){
  stopGame();
  alert("Game Over. You won!");
  }

document.getElementById("button1").onclick = function() {guess('1')};
document.getElementById("button2").onclick = function() {guess('2')};
document.getElementById("button3").onclick = function() {guess('3')};
document.getElementById("button4").onclick = function() {guess('4')};
document.getElementById("button5").onclick = function() {guess('5')};
  
function guess(btn){
  console.log("user guessed: " + btn);
  
  if (!gamePlaying) {
    return;
  }
  
  if (pattern[guessCounter] == btn) {
    if (progress == guessCounter) {
      if (progress == pattern.length-1){
        winGame();
      }
      else {
        progress++;
        playClueSequence();
        seconds = 0      }
    }
    else {
      guessCounter++;
      seconds = 0
    }
    
  }
  else {
    if (mistakeCounter>1){
      mistakeCounter--;
      document.getElementById("strikes").innerHTML = "Chances left: "+mistakeCounter;
      playClueSequence();
      seconds = 0
      
    }
    else {
      loseGame();
    }
  }
}
function countdownTimer () {
// Update the count down every 1 second
var x = setInterval(function() {
  time = 25 - progress*2 - seconds;
  seconds++
  // Display the result in the element with id="demo"
  document.getElementById("timer").innerHTML = time + ' Seconds Left';

  if (gamePlaying == false) {
    clearInterval(x)
  }  
  if (time < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "You lost, you ran out of time!";
    loseGame()
  }
}, 1000);
}



   
