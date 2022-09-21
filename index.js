let buttons = document.querySelectorAll(".drum");

for (var i = 0; i <= buttons.length; i++) {
  buttons[i].addEventListener("click", handleClick);
}

function handleClick() {
  //changing style of clicked button
  this.style.color = "#fff";
  let playAudio = new Audio("sounds/tom-1.mp3");
  playAudio.play();
}
