var regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
function  Submit(){
    
let phone = document.getElementById("phone").value ;
let email = document.getElementById("email").value ;
let age = document.getElementById("age").value;
let name = document.getElementById("Name").value;

if(name.length >= 5 && name.length <=100){
    document.getElementById("demo1").innerHTML = `name : ${name}`
}else{
    alert("name length > 5")
}

if(age >= 5 && age<= 25){
 document.getElementById("demo2").innerHTML = `age : ${age}`
}else{
    alert("age not matching")
}

if(phone.length === 10  ){
    document.getElementById("demo3").innerHTML = ` phone : ${phone}`
}else if(phone == ""){

    alert("phone number cant be  empty")
}else{
    alert("phone is not valid")
}
if(regexp.test(String(email).toLowerCase())){
    document.getElementById("demo4").innerHTML = `email : ${email}`
}else{
    alert("invalid email ")
}

 function x(){
 document.getElementById("Name").value = "";
 document.getElementById("age").value = "";
 document.getElementById("phone").value = "";
 document.getElementById("email").value = "";
 
}
x()

}
