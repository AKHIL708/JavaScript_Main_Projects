const buttons = document.querySelectorAll("button");

let options = ["Rock", "Paper", "Sisscors"];
buttons.forEach((e) => {
  let x = options[Math.floor(Math.random() * options.length)];
  e.addEventListener("click", () => {
    const compValue = document.getElementById("Comp").value = x;
    const YourValue = (document.getElementById("input").value = e.innerText);
    if (YourValue == "Rock" && compValue == "Paper") {
      document.getElementById("result").innerHTML = "you lose😟";

    }else if(YourValue == "Rock" && compValue == "Sisscors"){
      document.getElementById("result").innerHTML = "you win😉🎉";

    }else if(YourValue == "Paper" && compValue == "Rock"){
        document.getElementById("result").innerHTML = "you win😉🎉";

    }else if(YourValue == "Paper" && compValue == "Sisscors"){
        document.getElementById("result").innerHTML = "you lose😟";

    }else if(YourValue == "Sisscors" && compValue == "Rock"){
        document.getElementById("result").innerHTML = "you lose😟";
    }else if (YourValue == "Sisscors" && compValue == "Paper"){
        document.getElementById("result").innerHTML = "you win😉🎉";
    }else if (YourValue == compValue){
        document.getElementById("result").innerHTML = "Match Draw 🙄";
    }
  });
});
function Reload(){
    document.getElementById("input").value = "";
    document.getElementById("Comp").value = "";
    location.reload()
}
