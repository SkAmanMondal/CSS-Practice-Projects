let countElement = document.getElementById("count");
let incrementButton = document.getElementById("btn1");
let resetButton = document.getElementById("btn2");
let decrementButton = document.getElementById("btn3");
let alertElement = document.getElementById("alert");


let count = 0;

incrementButton.addEventListener("click",function(){
    count++;
    if(count > 10){
        alertElement.innerText = "Count can't be greater than 10!";
        count--;
        setTimeout(function(){
            alertElement.innerText = "";
        },1500);
    }else{
        countElement.innerText = count;
    }
})
decrementButton.addEventListener("click",function(){
    count--;
    if(count < 0){
        alertElement.innerText = "Count can't be Lesser than 0!";
        count++;
        setTimeout(function(){
            alertElement.innerText = "";
        },1500);
    }else{
        countElement.innerText = count;
    }
})
resetButton.addEventListener("click",function(){
    if(count === 0){
        alertElement.innerText = "Count is already at 0!";
        setTimeout(function(){
            alertElement.innerText = "";
        },1500);
    }else{
        count = 0;
        countElement.innerText = count;
    }
})