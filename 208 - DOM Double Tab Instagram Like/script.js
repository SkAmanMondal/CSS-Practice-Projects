let img = document.querySelector('img');
let love = document.querySelector('i');

img.addEventListener('dblclick', function(){
    love.style.opacity = '1';
    love.style.transform = 'translate(-50%,-50%) scale(1.5) rotate(0deg)';
    setTimeout(function(){
        love.style.transform = 'translate(-50%,-600%) scale(0.5) rotate(50deg)';
    },800);
    setTimeout(function(){
        love.style.opacity = '0';
    },1200);
    setTimeout(function(){
        love.style.transform = 'translate(-50%,-50%) scale(0) rotate(-25deg)';
    },1300);
});