//Init canvas
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

//Define height and width for canvas area
canvas.height = window.innerHeight / 1.5;
canvas.width = window.innerWidth / 1.5;

//Update canvas area on page resize
window.addEventListener("resize", () => {
    canvas.height = window.innerHeight / 1.5;
    canvas.width = window.innerWidth / 1.5;
});