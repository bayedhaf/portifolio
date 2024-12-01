
const fn= document.getElementById("fname");
fn.addEventListener("click",ffname);
function ffname(){

    alert(" Fill the your name?");
    

}
const ln= document.getElementById("lname");
ln.addEventListener("click",llname);
function llname(){

    alert(" Fill  your last name?");
    

}
const EM= document.getElementById("email-address");
EM.addEventListener("click",emalil);
function emalil(){

    alert(" Fill your E-Mail?");
    

}
const pass= document.getElementById("password");
pass.addEventListener("click",passs);
function passs(){

    alert("Password must contain letter,number and special symbol?");
    

}

function validateForm(){
    let L=document.forms["myform"]["llname"].value;
    let F=document.forms["myform"]["flname"].value;
   
    let P=document.forms["myform"]["ppassword"].value;
    let M=document.forms["myform"]["Eemail"].value;


    if(L=="") {
        
        alert("You have must to fill your name<br>unsuccessfull");
        return false;
    }
    else if( F==""){
        alert("You have must to fill your father name<br>unsuccessfull");
        return false;}
    else if( P==""){
        alert("You have must to fill your password<br>unsuccessfull");
        return false; }
    else if( M==""){
        alert("You have must to fill your email address<br>unsuccessfull");
        return false;}
    
    
}
