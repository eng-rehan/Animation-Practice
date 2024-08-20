// rules of javascript variable declaration 
fullname = "Anwar  Hussain" 

{
    var name = "Anwar Hussain";
    const price = 130;
    let newName = "Rehan Uddin";
}




let newName = "Rehan , Amirul";

// arithmetic operators examples

let number1 = parseInt(prompt("Enter the first Number?"));
let number2 = parseInt(prompt("Enter the Second Number?"));
let operator = prompt("What you want to do with those numbers?")

let finalResult = 0;


    if(operator == "+"){
        finalResult = number1 + number2;
    }else if(operator == "-"){
        finalResult = number1 - number2;
    }else if(operator == "x" || operator == "*" ){
        finalResult = number1 * number2;
    }else if(operator == "/"){
        finalResult = number1 / number2;
    }else{
        finalResult = "Something Went Wrong!";
    }



// make output of these 
document.getElementById('main').innerHTML = finalResult;




