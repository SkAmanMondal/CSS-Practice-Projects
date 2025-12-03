let para = document.querySelector("p");
let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let originalText = para.innerText;
let interval = null;

para.addEventListener("mouseenter", () => {
    let iteration = 0;
    para.style.opacity = '1';
    // Clear previous interval if already running
    clearInterval(interval);

    interval = setInterval(() => {
        para.innerText = originalText.split("").map((char, idx) => {
                if (idx < iteration) {
                    return originalText[idx];
                }
                return chars[Math.floor(Math.random() * chars.length)];
            }).join("");

        iteration += 0.5;

        // Stop when done
        if (iteration >= originalText.length) {
            clearInterval(interval);
        }
    }, 30);
});

let spotlight = document.querySelector('.box');
document.addEventListener("mousemove",function(e){
    document.body.style.setProperty("--x",e.clientX + 'px');
    document.body.style.setProperty("--y",e.clientY + 'px');

})
