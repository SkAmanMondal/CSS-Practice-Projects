let btn = document.querySelector("button");
let box = document.getElementById("box");
let background = document.querySelector("#main");
let text = document.getElementById("text")
teams = [
    {
        name: "CSK",
        primary: "yellow",
        secondary: "blue",
    },
    {
        name: "MI",
        primary: "Blue",
        secondary: "Gold",
    },
    {
        name: "KKR",
        primary: "Purple",
        secondary: "Gold",
    },
    {
        name: "RCB",
        primary: "red",
        secondary: "black",
    },
    {
        name: "SRH",
        primary: "orange",
        secondary: "black",
    }
]

btn.addEventListener("click", () => {
    let randomIndex = Math.floor(Math.random() * teams.length);
    let team = teams[randomIndex];

    box.style.backgroundColor = team.primary;

    background.style.backgroundColor = team.secondary;

    text.innerHTML = team.name;

});