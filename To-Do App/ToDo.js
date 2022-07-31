
function Add(){
    let Datas = []
    let Inputfname = document.getElementById("fname").value; 
    Datas.push(Inputfname) 
 
   setTimeout(() => {
    document.getElementById("fname").value = ""
   }, 10);
  
  
  let para = document.createElement("p")

  para.innerHTML = Datas
  para.className= "para"
  document.body.appendChild(para)

  let btn = document.createElement("button")
  btn.innerHTML = 'delete ❌'
  btn.className = "button"
  btn.onclick = Delete
  document.body.appendChild(btn)

  if(Inputfname == ""){
      para.style.display = "none"
      btn.style.display = "none"
      alert("To-Do Can't Be Blank 😊")
}

function Delete(){
   para.style.display = "none"
   btn.style.display = "none"
}
}









