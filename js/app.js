class Dino {
  constructor(name,hunger,sleep, exercise){
  this.name= name
  this.hunger=hunger
  this.sleep = sleep
  this.exercise = exercise
  }

  sayHello(){
    console.log("Hello! I am a dino!")
  }
}



alert("Wowzer! A tomagotchi egg is hatching" );

let namePrompt= prompt(' A Dinosaur!', 'Name your Dinosaur');

const newDino = new Dino(namePrompt,10,10,10)

const sleepbtn = document.querySelector("#sleepbtn")
sleepbtn.addEventListener("click", off)
const body = document.querySelector("body")
body.addEventListener("dblclick", on)

function off() {
  console.log("off clicked")
  document.getElementById("overlay").style.display = "block";
  alert("Dino is going to sleep,  double click anywhere on the screen to turn the lights back on")
  //while loop function on is true increase sleep points xx per xx seconds
}


function on() {
  console.log("on clicked");
  document.getElementById("overlay").style.display = "none";
  //while loop function on is true increase sleep points xx per xx seconds
}

// function feed() {
//   document.getElementById("feeding")style.display ="";
// if loop if button clicked increase food by xx

//function exercise()
// get getElementById("exercising")style.display = "";
