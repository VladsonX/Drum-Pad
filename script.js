let allPads = document.querySelectorAll(".drumpad__pad");
for (let i = 0; i < allPads.length; i++) {
  allPads[i].addEventListener("click", function () {
    let buttonPressed = this.innerText;
    playSound(buttonPressed);
  });
}

document.addEventListener("keydown", function (e) {
  playSound(e.key)
});

function playSound(symbol) {
  // setShadow();
  let chosenPad;
  let sound;
  switch (symbol) {
    case "1":
      chosenPad = document.getElementById("kick");
      sound = new Audio("sounds/" + chosenPad.id + ".WAV");
      sound.currentTime = 0;
      sound.play();
      chosenPad.classList.add("clicked");
      setTimeout(() => {
        chosenPad.classList.remove("clicked");
      }, 200);
      break;
    case "2":
      chosenPad = document.getElementById("snare");
      sound = new Audio("sounds/" + chosenPad.id + ".WAV");
      sound.play();
      chosenPad.classList.add("clicked");
      setTimeout(() => {
        chosenPad.classList.remove("clicked");
      }, 200);
      break;
    case "3":
      chosenPad = document.getElementById("clap");
      sound = new Audio("sounds/" + chosenPad.id + ".WAV");
      sound.play();
      chosenPad.classList.add("clicked");
      setTimeout(() => {
        chosenPad.classList.remove("clicked");
      }, 200);
      break;
    case "4":
      chosenPad = document.getElementById("hi-hat");
      sound = new Audio("sounds/" + chosenPad.id + ".WAV");
      sound.play();
      chosenPad.classList.add("clicked");
      setTimeout(() => {
        chosenPad.classList.remove("clicked");
      }, 200);
      break;
    case "5":
      chosenPad = document.getElementById("double-hi-hat");
      sound = new Audio("sounds/" + chosenPad.id + ".WAV");
      sound.play();
      chosenPad.classList.add("clicked");
      setTimeout(() => {
        chosenPad.classList.remove("clicked");
      }, 200);
      break;
    case "6":
      chosenPad = document.getElementById("open-hat");
      sound = new Audio("sounds/" + chosenPad.id + ".WAV");
      sound.play();
      chosenPad.classList.add("clicked");
      setTimeout(() => {
        chosenPad.classList.remove("clicked");
      }, 200);
      break;
    case "7":
      chosenPad = document.getElementById("rim");
      sound = new Audio("sounds/" + chosenPad.id + ".WAV");
      sound.play();
      chosenPad.classList.add("clicked");
      setTimeout(() => {
        chosenPad.classList.remove("clicked");
      }, 200);
      break;
    case "8":
      chosenPad = document.getElementById("crash");
      sound = new Audio("sounds/" + chosenPad.id + ".WAV");
      sound.play();
      chosenPad.classList.add("clicked");
      setTimeout(() => {
        chosenPad.classList.remove("clicked");
      }, 200);
      break;
    case "q":
      chosenPad = document.getElementById("tom-1");
      sound = new Audio("sounds/" + chosenPad.id + ".WAV");
      sound.play();
      chosenPad.classList.add("clicked");
      setTimeout(() => {
        chosenPad.classList.remove("clicked");
      }, 200);
      break;
    case "w":
      chosenPad = document.getElementById("tom-2");
      sound = new Audio("sounds/" + chosenPad.id + ".WAV");
      sound.play();
      chosenPad.classList.add("clicked");
      setTimeout(() => {
        chosenPad.classList.remove("clicked");
      }, 200);
      break;
    case "e":
      chosenPad = document.getElementById("tom-3");
      sound = new Audio("sounds/" + chosenPad.id + ".WAV");
      sound.play();
      chosenPad.classList.add("clicked");
      setTimeout(() => {
        chosenPad.classList.remove("clicked");
      }, 200);
      break;
    case "r":
      chosenPad = document.getElementById("tom-4");
      sound = new Audio("sounds/" + chosenPad.id + ".WAV");
      sound.play();
      chosenPad.classList.add("clicked");
      setTimeout(() => {
        chosenPad.classList.remove("clicked");
      }, 200);
      break;

    default:
      break;
  }
}

// function setShadow() {
//   let shadow = "box-shadow:  0px 0px 150px 50px #c46127";
//     document.querySelector(".drumpad").style = shadow;
//   let noShadow = "box-shadow: none";
//     setTimeout(() => {
//       document.querySelector(".drumpad").style = noShadow;
//     }, 300);
// }

