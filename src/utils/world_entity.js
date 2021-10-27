const world_entities = [];

function spawnEntities(number, type) {
    for (let index = 0; index < number; index++) {
        world_entities.push(new type());
    }
}

function spawnEntity(type) {
    let entity = new type();

    world_entities.push(entity);

    return entity;
}