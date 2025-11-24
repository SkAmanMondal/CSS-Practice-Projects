let btn = document.querySelector('button');
let main = document.getElementById('main');

btn.addEventListener('click',function(){
    let box = document.createElement('div');

    box.style.height = '100px';
    box.style.width = '100px';
    box.style.border = '1px solid black';
    box.style.position = 'absolute';

    let x = Math.random()*85;
    let y = Math.random()*90;

    let r = Math.random()*360;

    let c1 = Math.floor(Math.random()*255);
    let c2 = Math.floor(Math.random()*255);
    let c3 = Math.floor(Math.random()*255);



    box.style.top = x+'%';
    box.style.left = y+'%';
    box.style.rotate = r+'deg';
    box.style.backgroundColor = `rgb(${c1},${c2},${c3})`;

    main.appendChild(box);
})