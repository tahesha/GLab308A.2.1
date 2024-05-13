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


//Part 3 
//Create the Adventurer Class
class Adventurer extends Character {
    constructor(name, role) {
        super(name);
        this.role = role;
        this.inventory.push("bedroll", "50 gold coins");
    }

    scout() {
        console.log(`${this.name} is scouting ahead...`);
        super.roll();
    }

    // Add more methods and properties specific to adventurers
}

//Define Additional Attributes for the 'Adventurer' class
class Adventurer extends Character {
    constructor(name, role) {
        super(name);
        this.role = role;
        this.inventory.push("bedroll", "50 gold coins");
    }

    scout() {
        console.log(`${this.name} is scouting ahead...`);
        super.roll();
    }

    // Additional attributes and methods specific to adventurers
    setWeapon(weapon) {
        this.weapon = weapon;
        console.log(`${this.name} equips ${weapon}.`);
    }

    usePotion() {
        if (this.inventory.includes("potion")) {
            console.log(`${this.name} uses a potion.`);
            this.health += 10; // Example: Potion restores 10 health
            this.inventory.splice(this.inventory.indexOf("potion"), 1); // Remove potion from inventory
        } else {
            console.log(`${this.name} doesn't have any potions.`);
        }
    }

    // Add more methods and properties specific to adventurers
}


//Create the 'companion' class
class Companion extends Character {
    constructor(name, type) {
        super(name);
        this.type = type;
        this.inventory.push("collar"); // All companions start with a collar
    }

    play() {
        console.log(`${this.name} is playing.`);
    }

    // Additional methods and properties specific to companions
}

//Update Character Declarations
const robin = new Adventurer("Robin", "Warrior");
robin.inventory = ["sword", "potion", "artifact"];

robin.companion = new Companion("Leo");
robin.companion.type = "Cat";
robin.companion.companion = new Companion("Frank");
robin.companion.companion.type = "Flea";
robin.companion.companion.inventory = ["small hat", "sunglasses"];

//Test new methods
robin.scout(); // Example output: Robin is scouting ahead...
robin.companion.roll(); // Example output: Leo rolled a 12.
