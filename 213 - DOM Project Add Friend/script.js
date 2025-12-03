// ------------------- Way - 1 -------------------
// let elements = document.querySelectorAll('.elem');
// elements.forEach(function(elem){
//     // console.log(elem.childNodes[1].textContent) // This is use to access the text content of a child node
//     elem.childNodes[3].addEventListener('click', function(){
//         if(elem.childNodes[3].textContent == "Remove Friend"){
//             elem.childNodes[3].textContent = "Add Friend";
//             elem.childNodes[3].style.background = "rgb(29, 237, 29)";
//         }else{
//             elem.childNodes[3].textContent = "Remove Friend";
//             elem.childNodes[3].style.background = "gray";
//         }
//     });
// });

// -------------------- Way - 2 ---------------------
let allbuttons = document.querySelectorAll('.elem button');
allbuttons.forEach(function(elem){
    elem.addEventListener('click',function(){
        if(elem.textContent == "Remove Friend"){
            elem.textContent = "Add Friend";
            elem.style.background = "rgb(29, 237, 29)";
        }else{
            elem.textContent = "Remove Friend";
            elem.style.background = "gray";
        }
    })
});