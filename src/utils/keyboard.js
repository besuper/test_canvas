const keysPressed = new Map();

window.addEventListener("keydown", (e) => {
    keysPressed.set(e.key, true);
});

window.addEventListener("keyup", (e) => {
    keysPressed.delete(e.key);
});