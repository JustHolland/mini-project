alert("Wowzer! A tamagotchi egg is hatching" );

let namePrompt= prompt(' A Dinosaur!', 'Name your Dinosaur');

function on() {
  document.getElementById("overlay").style.display = "block";
  alert("Dino is going to sleep,  click anywhere to turn the lights back on")
  
  //bonus add some time off animation to show dino sleeping
}

function off() {
  document.getElementById("overlay").style.display = "none";
}
