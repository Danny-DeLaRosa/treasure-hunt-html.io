var treasure = Math.floor(Math.random() * 9)
var bomb = Math.floor(Math.random() * 9)
if(treasure === bomb) {
  bomb = Math.floor(Math.random() *9)
}

const emoji = (number) => {
  if(number === treasure){
    document.getElementById(number).innerHTML = "⚾"
    confirm("You Win!")
  } else if(number === bomb){
    document.getElementById(number).innerHTML = "❌"
  } else {
    document.getElementById(number).innerHTML = "🧢"
  } 
}

