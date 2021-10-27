const player = spawnEntity(Player);

spawnEntities(1, Entity);

//Game loop
setInterval(() => {

    //Clear canvas area
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    //Move player with key pressed
    for (const [key, _] of keysPressed.entries()) {
        player.move(key);
    }

    //Draw world entities
    world_entities.forEach(entity => {

        const chance = getRandomInt(0, 20);

        if (/* chance == 11 &&  */entity instanceof Entity) {
            entity.chasse(player.getPosX, player.getPosY);
        }

        entity.draw();
    });

}, 1 / 60);