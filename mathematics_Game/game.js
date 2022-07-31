const symbols = ["+","-","*"]
let symbol = document.getElementById("symbol").innerHTML = symbols[Math.floor(Math.random()* symbols.length)];
let num = 12

window.addEventListener('load',()=>{
    let RandomNumOne = Math.round(Math.random(Math.floor) * num)
    let RandomNumTwo = Math.round(Math.random(Math.floor) * num)
   document.getElementById("numOne").value = RandomNumOne
   document.getElementById("numTwo").value = RandomNumTwo
})


function Check(){
   let level = document.getElementById("levelValue").value;
   if(level == "Easy"){
     num = 12
   }else if(level == "Intermediate"){
     num = 30
   }else if (level == "Hard"){
     num = 50
   }else{
    num = 20
   }

    let NumOne =  document.getElementById("numOne").value 
    let NumTwo =  document.getElementById("numTwo").value
    let one = parseInt(NumOne)
    let two = parseInt(NumTwo)
    let userValue =  document.getElementById("result").value;

   let resultColor = document.getElementById("demo");
   let bodyColor = document.getElementById("sectionOfClass");


  if(symbol == "+" && userValue == one + two){
      document.getElementById("demo").innerHTML = `true ${userValue} 😊`
      resultColor.className = "greenColor" 
      bodyColor.className = "BodyGreen"
  }else if(symbol == "-" && userValue == one-two){
    document.getElementById("demo").innerHTML = `true ${userValue} 😊`
    resultColor.className = "greenColor" 
    bodyColor.className = "BodyGreen"
  }else if(symbol == "*" && userValue == one * two){
    document.getElementById("demo").innerHTML =`true ${userValue} 😊` 
    resultColor.className = "greenColor" 
    bodyColor.className = "BodyGreen"
  }else {
    let x= document.getElementById("demo").innerHTML =`false ${userValue}  😠`
    resultColor.className = "redColor" 
    bodyColor.className = "BodyRed"
    
  }

  setTimeout(() => {
    document.getElementById("result").value = ""
    let RandomNumOne = Math.round(Math.random(Math.floor) * num)
    let RandomNumTwo = Math.round(Math.random(Math.floor) * num)
   document.getElementById("numOne").value = RandomNumOne
   document.getElementById("numTwo").value = RandomNumTwo
  //  location.reload()//  apply only this function and remove 56,57,58,59 lines to get the best experience but the levels part wont work
  }, 1000);


        }

function easy(){
  let easy = document.getElementById("easy").innerText
  document.getElementById("levelValue").value = easy
}
function intermediate(){
  let intermediate = document.getElementById("intermediate").innerText
  document.getElementById("levelValue").value = intermediate
}
function hard(){
  let hard = document.getElementById("hard").innerText
  document.getElementById("levelValue").value = hard
}