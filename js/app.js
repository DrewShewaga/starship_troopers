/*DO NOT REMOVE THIS LINE*/
$(document).foundation()

/*Write your code here*/

console.log("Linked");

//VARIABLE STACK
let vidPlayer = document.querySelector('.trailer'),
vidControls = document.querySelector('.vidControls'),
seekSlider = document.querySelector('#seekSlider'),
curTimeText = document.querySelector('#curTimeText'),
durTimeText = document.querySelector('#durTimeText'),
play = document.querySelector('.play'),
pause = document.querySelector('.pause'),
pBut = document.querySelector('#pausePlay'),
skipB = document.querySelector('.skipB'),
skipF = document.querySelector('.skipF'),
restart = document.querySelector('.restart'),
headImg = document.querySelector('#headBG');
var team = document.querySelector('#teamSelector');





//FUCNTIONS
function pausePlay(){

  if (vidPlayer.paused == true)
  {
  vidPlayer.play();
  play.classList.add('hide');
  pause.classList.remove('hide');
  }
  else
  {
  vidPlayer.pause();
  pause.classList.add('hide');
  play.classList.remove('hide');
  }
}


function skipForward(){
  vidPlayer.currentTime += 10;
}

function skipBackward(){
  vidPlayer.currentTime -= 10;
}

function vidSeek() {
  seekTo = vidPlayer.duration * (seekSlider.value / 100);
  vidPlayer.currentTime = seekTo;
}

function seekUpdate() {
  //slider update
  upTime = vidPlayer.currentTime * (100 / vidPlayer.duration);
  seekSlider.value = upTime;

  //timer update
  curMins = Math.floor(vidPlayer.currentTime / 60);
  curSecs = Math.floor(vidPlayer.currentTime - curMins * 60);
  durMins = Math.floor(vidPlayer.duration / 60);
  durSecs = Math.floor(vidPlayer.duration - durMins * 60);

  //add zeroes if needed
  if (curSecs < 10) {
    curSecs = "0" + curSecs;
  }
  if (durSecs < 10) {
    durSecs = "0" + durSecs;
  }

  //display time
  curTimeText.innerHTML = curMins+ ":" +curSecs + " /";
  durTimeText.innerHTML = durMins+ ":" +durSecs;
}

function restartVid() {
  vidPlayer.currentTime = 0;
}


function changeBackground(x){
  console.log(this.value);

  //Check the input value
  if (this.value == "federation") {
    var teamColor = "#826f57";
    headImg.src = "images/header_bg.svg";
  }
  else if (this.value == "klendathu") {
    var teamColor = "#937f4c";
    headImg.src = "images/header_bgKlen.svg";
  }
  else if (this.value == "choose") {
    var teamColor = "#826f57";
    headImg.src = "images/header_bgPlain.svg";
  }
  else {
    return "";
  }


  //Change the colors
  var body = document.querySelector('body');
  body.style.backgroundColor = teamColor;
}


//EVENT HANDLING
team.addEventListener('change', changeBackground);
pause.addEventListener('click', pausePlay);
play.addEventListener('click', pausePlay);
skipF.addEventListener('click', skipForward);
skipB.addEventListener('click', skipBackward);
seekSlider.addEventListener('change', vidSeek);
vidPlayer.addEventListener('timeupdate', seekUpdate);
restart.addEventListener('click', restartVid);
