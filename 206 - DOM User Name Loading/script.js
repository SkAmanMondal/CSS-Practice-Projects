let btn = document.querySelector("button");
let h1 = document.querySelector("h1");


// -----------Basic setTimeout Example-------------- setTimeout = Delay
// btn.addEventListener("click", function(){
//     h1.innerHTML = "Changing User...";
//     setTimeout(function(){
//         h1.textContent = "Hello I am Sam";
//         console.log("User Changed");
//     },2000);
// })

// -----------Basic setInterval Example-------------- setInterval = Repeatedly execute after every interval of time(controlled loop)
btn.addEventListener("click",function(){
    let count = 0;
    let exit = setInterval(function(){
        h1.innerHTML = `Changing User... ${count}%`;
        count++;
        if(count > 100){
            clearInterval(exit);

            setTimeout(function(){
                h1.innerText = "Hello I am sam";
            },1000)
        }
    },100);

}) 