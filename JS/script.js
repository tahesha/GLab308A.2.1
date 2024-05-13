//Create the Adventurer Object. I started by defining the aventurer object with basic properties such as name, health, and inventory.
const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"]
};

//Access Inventory Items
console.log(adventurer.inventory[0]);


//Loop Through Inventory
adventurer.inventory.forEach(item => {
    console.log(item);
});

//Add Companion
const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion: {
        name: "Leo",
        type: "Cat"
    }
};

const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion: {
        name: "Leo",
        type: "Cat",
        companion: {
            name: "Frank",
            type: "Flea",
            belongings: ["small hat", "sunglasses"]
        }
    }
};