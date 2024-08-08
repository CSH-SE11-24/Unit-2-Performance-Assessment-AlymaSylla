const prompt = require('prompt-sync')()
//awnser a set of questions that will customize your player
let player = {}

let name = prompt("Enter your name")
player.name = name

let sociallevel = prompt("Are you social or not?(yes/no)")
player.socialskills = sociallevel

let attendance = prompt("Are you late or on time to school?(late/on time)")
if (attendance === "late") {
  let amount = prompt("Enter your amount of latenesses")
  amount = parseInt(amount)
  player.late = amount
}
let game = true
while (game === true) {
  console.log("Welcome" + player.name + "You are set back on time because you either got a loaner uniform,loaner chromebook,or arrived late");

  let delayedreason = prompt("Enter,The reason why you are going to be delayed")
  
//The players reason why they were delayed affects how long they''ll be in the school
  if (delayedreason === "loaner uniform" && player.socialskills === "no") {
    console.log("You are setback of 2 minutes because you got a loaner uniform and made your way to the exit")
  } else if (delayedreason === "loaner uniform" && player.socialskills === "yes") {
    console.log("You are setback of 8 minutes becuase you got a loaner uniform and decided to chat it up with Mr Smartt")
  }
  if (delayedreason === "loaner chromebook") {
    console.log("You are delayed of 10 minutes because you got a chromebook,and forgot to sign out of the loaner so Mr P made you go to the back of the line until you got situated ")
  }
  if (delayedreason === "arrived late" && player.late > 5) {
    console.log("You are set back of 12 minutes because you got a late pass,and DG gives phones based on amount of latenesses and you have" + player.late + "latenesses")
  } if (delayedreason === "arrived late" && player.late < 5) {
    console.log("You are delayed of 6 minutes becuase you got a late pass,and DG gives out phones based on amount of latenesses and you have" + player.late + "latenesses")
  }
  
  console.log(" Fast Foward,You get a phone call from your mom,she says you have to get home by 5 because shes heading out and you have to watch your sibling")
  let arrivalTime = 5
  player.destination = "home"
  console.log(arrivalTime)
  console.log(player.destination)

let user=prompt("Interact with your mom by 1) say okay 2)get rude")
  
  if (user === "say okay") {
    console.log("She replies alright see you soon")
  }
  else if (user === "get rude") {
    console.log("She curses you out a dozen times and says she'll deal with you when you come home ")
  }
  

  console.log("You arrive to the six train station,you have until" + arrivalTime + "to get "+player.destination+"TIP USE YOUR TIME WISELY because its raining outside.Here is your inventory/backpack")
  let inventory = {
    headphones: "airpods",
    device: "phone",
    metrocardpass: 1,
    money: '$5',
  }
  console.log(inventory)

  let character = {
    name: "alyma",
    personality: "kind",
    grade: 11,
  }

  console.log("Whilst your about to enter the train" + character.name + "runs into you,and asks for a swipe on your metro card to get home and promises she'll open the door for you")

  console.log(character)
  let decision=prompt("Buy a ride or not")
  if(decision==="Buy a ride")
    inventory.money-=3
  console.log("Your current balance is now"+inventory.money+"and you sucesfully entered the manhattan and brooklyn way")
 } if(player.socialskills="no")
{console.log("you ignored her and now you have an enemy, you succefully entered the train to enter  manhattan and brooklyn way ")
}
let tunes=prompt("Would you like to listen to some tunes with your"+inventory.headphones+"and"+inventory.device)
if(tunes==="yes"){
  console.log("the conductor made an annocument that the train is going express and you missed your" + sixTrainStops[8] + "Now your at" + sixTrainStops[9])
}let bike=prompt("As you left the station a crackhead attacks so you run until you reach a citi bike(ride a citi bike)")
if(bike==="ride a citi bike"){
  console.log("Congrats!you beat the crackhead and made it home before 5 to babysit")
}
else{
  console.log("You made it to your destination on time,GAme won!")
let playAgain=prompt("would you like to play again?(yes/no)")
  if(playAgain==="no"){
    game=true
  }  
}
    const sixTrainStops=["Whitlock","Hunts Point","Longwood","149","143","Cypress","Brook","138","125"];
   main()