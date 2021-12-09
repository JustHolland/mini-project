class Dino {
  constructor(hunger,sleep,bordem){
  this.age= 0
  this.hunger=hunger
  this.sleep = sleep
  this.bordem = bordem
  }

  sayHello(){
    console.log("Hello! I am a dino! And my hunger level is " + this.hunger)
  }

}

////////game commands////////

alert("Wowzer! A tomagotchi egg is hatching" );

let namePrompt= alert(' A Dinosaur!', 'Name your Dinosaur to start begin');

const newDino = new Dino(0,0,0)



const sleepbtn = document.querySelector("#sleepbtn")
sleepbtn.addEventListener("click", off);

const body = document.querySelector("body")
body.addEventListener("dblclick", on);





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





const game = {
  setAge(){
    if(newDino.age < 8){
      const intervalID = setInterval(() => {
        const ageElement = document.querySelector('#age')
        newDino.age++
        ageElement.innerText = `Age: ${newDino.age}`
        if(newDino.age> 6) {
         clearInterval(intervalID)
         document.querySelector('#start').disabled = false
       }
      }, 1000)
    }
  },


     dinoHunger() {
       if(newDino.hunger <10 ){
         const intervalIDB = setInterval(() => {
           const hungerElement = document.querySelector('#hunger')
           hungerElement.innerText = `Hunger: ${newDino.hunger}`
           newDino.hunger++
           if(newDino.hunger >10) {
            clearInterval(intervalIDB)
            alert("Your dino is dead!")
          }
         }, 2000)
       }
     },


     dinoSleep() {
       if(newDino.sleep <10 ){
         const intervalIDc = setInterval(() => {
           const sleepElement = document.querySelector('#sleep')
           sleepElement.innerText = `Sleepiness: ${newDino.sleep}`
           newDino.sleep++
           if(newDino.sleep >10) {
            clearInterval(intervalIDc)
            alert("Your dino is dead!")
          }
        }, 9000)
       }
     },


   dinoBored() {
     if(newDino.bordem <10){
       const intervalIDA = setInterval(() => {
         const bordemElement = document.querySelector('#bordem')
         bordemElement.innerText = `Bordem: ${newDino.bordem}`
         newDino.bordem++
         if(newDino.bordem  > 10) {
        clearInterval(intervalIDA)
        alert("Your dino is dead!")
        }
      }, 4000)
     }
   },



   feedDino(){
    const hungerElement = document.querySelector('#hunger')
     hungerElement.innerText = `Hunger: ${newDino.hunger}`
     newDino.hunger--
   },

   sleepDino(){
    const sleepElement = document.querySelector('#sleep')
     sleepElement.innerText = `Sleepiness: ${newDino.sleep}`
     newDino.sleep--
   },

   exerciseDino(){
    const bordemElement = document.querySelector('#bordem')
     bordemElement.innerText = `Bordem: ${newDino.bordem}`
     newDino.bordem--
   },



  startLife(){
      game.setAge()
      game.dinoHunger()
      game.dinoSleep()
      game.dinoBored()

  },


}




////buttons

const lifeStart = document.querySelector('#start')
  // console.log(life started)
lifeStart.addEventListener('click', (event) => {
  event.target.disabled = true
  game.startLife()

})

const feed = document.querySelector('#feedbtn')
  // console.log(life started)
feed.addEventListener('click', (event) => {
  event.target.clicked = true
  game.feedDino()
})

const sleep = document.querySelector('#sleepbtn')
  // console.log(life started)
sleep.addEventListener('click', (event) => {
  event.target.clicked = true
  game.sleepDino()
})


const exercise = document.querySelector('#exercisebtn')
  // console.log(life started)
exercise.addEventListener('click', (event) => {
  event.target.clicked = true
  game.exerciseDino()
})



const feedO = document.querySelector('#feedbtn')

feedO.addEventListener('click', disableFButtons);

function disableFButtons() {
  feedO.disabled = true;
  feedO.value = "EATING...";
  window.setTimeout(function() {
    feedO.disabled = false;
    feedO.value = "FEED";
  }, 3000);
}

const sleepO = document.querySelector('#sleepbtn')

sleepO.addEventListener('click', disableSButtons);

function disableSButtons() {
  sleepO.disabled = true;
  sleepO.value = "SLEEPING...";
  window.setTimeout(function() {
    sleepO.disabled = false;
    sleepO.value = "SLEEP";
  }, 3000);
}

const exerciseO = document.querySelector('#exercisebtn')

exerciseO.addEventListener('click', disableButtons);

function disableButtons() {
  exerciseO.disabled = true;
  exerciseO.value = "PLAYING...";
  window.setTimeout(function() {
    exerciseO.disabled = false;
    exerciseO.value = "PLAY";
  }, 3000);
}
