const display = document.getElementById("display");

function appendToDisplay(input){
    if(display.value === "Error"){
        display.value = ""
    }
    display.value += input;
}

function Clear(){
    display.value = ""
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error"
    }
}