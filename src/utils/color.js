const colors = ['red', 'blue', 'black', 'white'];

function pickRandomColor() {
    return colors[Math.floor(Math.random() * (colors.length - 1))];
}