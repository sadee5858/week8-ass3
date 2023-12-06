let btn = document.getElementById('btn');
 
let display = document.getElementById('display');
 
let randNum = Math.floor(Math.random() * 100);
 
// function playGame() {
 
// }
 
btn.addEventListener('click' , function () {
   let game = document.getElementById ('game').value;
   if (game == randNum) {
    display.innerHTML = `Congratulations! You are Correct.`
   }else if (game < randNum) {
    display.innerHTML = `The number is low.`
   }else if(game > randNum) {
    display.innerHTML = ` The number is high.`
   } 
})
console.log(randNum)