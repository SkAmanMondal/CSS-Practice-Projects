let btn = document.querySelector("button");
let h1 = document.querySelector("h1");
let p = document.querySelector(".bottom p");
let loader = document.querySelector(".inner");

btn.addEventListener("click",function(){
    let count = 0;
    btn.disabled = true;
    btn.style.pointerEvents = "none";
    btn.style.opacity = "0.5";

    let randomTime = Math.floor(Math.random()*100);

    p.innerHTML = `File Downloaded in ${randomTime/10}sec`;
    btn.innerHTML = "Downloading...";
    let exit = setInterval(function(){
        count++;
        h1.innerHTML = `${count}%`;
        loader.style.width = `${count}%`;
    },randomTime);
    setTimeout(function(){
            clearInterval(exit);
            btn.disabled = false;
            btn.style.opacity = "1";
            p.innerHTML = "Download Successful";
            btn.style.pointerEvents = "auto";
            btn.innerHTML = "Download Again!";

        
    },randomTime*100);

}) 