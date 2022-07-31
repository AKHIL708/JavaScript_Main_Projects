let moveRight= 0;
function right(){
   let x = document.getElementById("box")
   let y =  moveRight+=5
   x.style.marginLeft = y+"px"
}

let moveLeft= 0;
function left(){
   let x = document.getElementById("box")
   let y =  moveLeft+=5
   x.style.marginRight = y+"px"
}


let moveDown= 0;
function down(){
   let x = document.getElementById("box")
   let y =  moveDown+=5
   x.style.marginTop = y+"px"
   if(x.style.marginTop <= 0){
       alert("yourout")
   }
}


function up(){
   let x = document.getElementById("box");
   let y =  moveDown-=5;
   x.style.marginTop = y+"px";
}



