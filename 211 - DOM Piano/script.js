let pianoKeys = document.querySelectorAll('.piano-keys .key');
let volumeSlider = document.querySelector('.volume-slider input');
let keysCheckbox = document.querySelector('.keys-checkbox input');
let allKeys = [];

let audio = new Audio('tunes/a.wav'); // by default audio src is "a" tune

let playTune = function(key){
    audio.src = `tunes/${key}.wav`; // passes audio src according to key pressed
    audio.play(); //playing tune

    let clickedKey = document.querySelector(`[data-key="${key}"]`);
    clickedKey.classList.add("active");
    setTimeout(function(){
        clickedKey.classList.remove("active");
    },250);
}
pianoKeys.forEach(function(key){
    allKeys.push(key.dataset.key);
    key.addEventListener('click',function(){
        // Calling playTune function with data-key value as an argument
        playTune(key.dataset.key);
    })
})

let checkbox = function(){
    pianoKeys.forEach(function(key){
        key.classList.toggle('hide');
    })
}
let handeleVolume = function(e){
    audio.volume = e.target.value;
}
let pressedKey = function(e){
    if(allKeys.includes(e.key)){
        playTune(e.key);
    }
}
keysCheckbox.addEventListener('input', checkbox);
volumeSlider.addEventListener('input', handeleVolume);
document.addEventListener('keydown', pressedKey);