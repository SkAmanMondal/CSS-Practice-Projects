let btn = document.querySelector('button');
let main = document.getElementById('main');

let arr = [
  "Debugging mode activated",
  "Async dreams and await realities",
  "Let the code flow",
  "Return true for happiness",
  "Looping through life",
  "Unhandled promise resolved",
  "Console.log your ideas",
  "Null is not undefined",
  "Committed to Git",
  "Syntax error: sleep not found"
];

btn.addEventListener('click',function(){
    let h1 = document.createElement('h1');

    h1.style.position = 'absolute';

    let x = Math.random()*85;
    let y = Math.random()*90;

    let r = Math.random()*360;

    let s = Math.random()*3;

    // let c1 = Math.floor(Math.random()*255);
    // let c2 = Math.floor(Math.random()*255);
    // let c3 = Math.floor(Math.random()*255);

    let a = Math.floor(Math.random()*arr.length);
    h1.innerHTML = arr[a];

    h1.style.top = x+'%';
    h1.style.left = y+'%';
    h1.style.rotate = r+'deg';
    h1.style.scale = s;
    // h1.style.color = `rgb(${c1},${c2},${c3})`;

    main.appendChild(h1);
})