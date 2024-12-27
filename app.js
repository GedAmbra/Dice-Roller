const button = document.getElementById("btn");
const number1 = document.getElementById("number1");
const number2 = document.getElementById("number2");
const number3 = document.getElementById("number3");
const numToal = document.getElementById("numTotal");

function diceRoll() 
{
  let roll1 = Math.floor(Math.random() * 6) + 1;
  number1.innerHTML = roll1;

  let roll2 = Math.floor(Math.random() * 6) + 1;
  number2.innerHTML = roll2;

  let roll3 = Math.floor(Math.random() * 6) + 1;
  number3.innerHTML = roll3;

  let rollTotal = roll1 + roll2 + roll3;
  numToal.innerHTML = rollTotal;
}

button.onclick = diceRoll;
