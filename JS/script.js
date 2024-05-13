//Part 1: Set up the adventurer object with properties, companions, and a dice roll method.
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

//Add a method (roll)
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
    },
    roll(mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log('${this.name} rolled a ${result}.');
    }
};

//Test the roll method.
adventurer.roll(); //Example output: Robin rolled a 14.


//Part 2
//Create the character class
class Character {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.inventory = [];
    }

    roll(mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`);
    }
}


//Re-create Robin using the 'character' class
const robin = new Character("Robin");
robin.inventory = ["sword", "potion", "artifact"];
robin.companion = new Character("Leo");
robin.companion.type = "Cat";
robin.companion.companion = new Character("Frank");
robin.companion.companion.type = "Flea";
robin.companion.companion.inventory = ["small hat", "sunglasses"];

//Test the roll method
robin.roll(); // Example output: Robin rolled a 14.
robin.companion.roll(); // Example output: Leo rolled a 12.
robin.companion.companion.roll(); // Example output: Frank rolled a 17.
