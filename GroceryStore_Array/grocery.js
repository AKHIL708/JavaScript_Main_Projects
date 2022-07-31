let lists = []
function Add(){
    let input = document.getElementById("input").value;
    let x = lists.push(input)
    if(input ==""){
    alert("add lits plz")
    }else{
      document.getElementById("demo").innerHTML = lists.join(" ")
    }
    function y(){
        setTimeout(() => {
     document.getElementById("input").value = ""        
        }, 10);
    }
    y()
}
// let fruits = ["apple","banana","mango","avocado","mosambi","grapes"]
function Remove(){
    let inputVal = document.getElementById("removeList").value ; 
    // demo on upper array Fruits 
    // let x = fruits.findIndex((e)=>{
    //     return e == inputVal
    // })
    
    // fruits.splice(x,1)
    // console.log(fruits.join(" "))
    let x  = lists.findIndex((e)=>{
     return   e == inputVal
    })
    lists.splice(x,1)
    document.getElementById("demo").innerHTML = lists.join(" ")
    console.log(lists.join(" "))
}