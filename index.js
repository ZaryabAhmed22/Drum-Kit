let buttons = document.getElementsByClassName("drum");
// console.log(buttons);

for (let i = 0; i <= buttons.length; i++) {
  //Checking whether the button exists or not, to avoid type error
  if (buttons[i]) {
    buttons[i].addEventListener("click", handleClick);
  }
}

function handleClick() {
  //changing style of clicked button
  //this.style.color = "#fff";

  let button = this.innerHTML;

  soundPlayer(button);
  buttonAnimation(button);
}

//-- Key board event

//keyboard events are listened at whole document
document.addEventListener("keydown", function (e) {
  let key = e.key;

  soundPlayer(key);
  buttonAnimation(key);
});

function soundPlayer(value) {
  switch (value) {
    case "w":
      let crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "a":
      let kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    case "s":
      let snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "d":
      let tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "j":
      let tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "k":
      let tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "l":
      let tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    default:
      console.log(value);
  }
}

//-- Button Animation
function buttonAnimation(value) {
  buttonPressed = document.querySelector(`.${value}`);
  buttonPressed.classList.add("pressed");

  setTimeout(() => {
    buttonPressed.classList.remove("pressed");
  }, 200);
}
