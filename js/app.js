class Dino {
  constructor(hunger,sleep, exercise){
  this.hunger=hunger
  this.sleep = sleep
  this.exercise = exercise
  }

  sayHello(){
    console.log("Hello! I am a dino!")
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
  age: 0,
  hunger: 0,
  bordem: 0,
  setAge(){
    const intervalID = setInterval(() => {
      const ageElement = document.querySelector('#age')
      this.age++
      ageElement.innerText = `Age: ${this.age}`
    }, 60000)


    if (this.age === 2) {
      alert("Dino trabsfirn !")
      // add occupacy to dino pic
    }


    if (this.age> 6) {
      clearInterval(intervalID)
      document.querySelector('#start').disabled = false
    }
  },


   dinobored() {
     const intervalIDA = setInterval(() => {
       const bordemElement = document.querySelector('#bordem')
       bordemElement.innerText = `Bordem: ${this.bordem}`
       this.bordem++
     }, 2000)
   },


   dinoHunger() {
     const intervalIDA = setInterval(() => {
       const hungerElement = document.querySelector('#hunger')
       hungerElement.innerText = `Hunger: ${this.hunger}`
       this.hunger++
     }, 2000)
   },


   feedDino(){
    const hungerElement = document.querySelector('#hunger')
     hungerElement.innerText = `Hunger: ${this.hunger}`
     this.hunger--
   },


   exerciseDino(){
    const bordemElement = document.querySelector('#bordem')
     bordemElement.innerText = `Bordem: ${this.bordem}`
     this.bordem--
   },


  startLife(){
      this.setAge()
      this.dinobored()
      this.dinoHunger()
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


const exercise = document.querySelector('#exercisebtn')
  // console.log(life started)
exercise.addEventListener('click', (event) => {
  event.target.clicked = true
  game.exerciseDino()
})
