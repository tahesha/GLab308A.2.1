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


//Part 4: Class Uniforms
class Character {
    static MAX_HEALTH = 100;
  
    constructor(name) {
      this.name = name;
      this.health = Character.MAX_HEALTH;
      this.inventory = [];
    }
  
    static printMaxHealth() {
      console.log(`Maximum health for all characters: ${Character.MAX_HEALTH}`);
    }
  
    roll() {
      const result = Math.floor(Math.random() * 20) + 1;
      console.log(`${this.name} rolled a ${result}.`);
    }
  }
  
  class Adventurer extends Character {
    static ROLES = ["Fighter", "Healer", "Wizard"];
  
    constructor(name, role) {
      super(name);
      if (!Adventurer.ROLES.includes(role)) {
        throw new Error(`Invalid role: ${role}.`);
      }
      this.role = role;
      this.inventory.push("bedroll", "50 gold coins");
    }
  
    scout() {
      console.log(`${this.name} is scouting ahead...`);
      super.roll();
    }
  }
  
  //Part 5: Gather your party
  class Healer extends Adventurer {
    constructor(name) {
      super(name, "Healer");
      // Additional properties or methods specific to healers can be added here
    }
  }
  
  // Now, you can create instances of the Healer class directly
  const robin = new Healer("Robin");
  

  //Part 6: Developing Skills
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
  
    duel(opponent) {
      console.log(`${this.name} is dueling ${opponent.name}...`);
      while (this.health > 50 && opponent.health > 50) {
        const roll1 = this.roll();
        const roll2 = opponent.roll();
        if (roll1 > roll2) {
          opponent.health -= 1;
          console.log(`${opponent.name} loses 1 health.`);
        } else if (roll2 > roll1) {
          this.health -= 1;
          console.log(`${this.name} loses 1 health.`);
        } else {
          console.log("It's a tie!");
        }
        console.log(`${this.name}: ${this.health} health, ${opponent.name}: ${opponent.health} health`);
      }
      const winner = this.health > 50 ? this : opponent;
      console.log(`${winner.name} wins the duel!`);
    }
  }
  
  class Healer extends Adventurer {
    constructor(name) {
      super(name, "Healer");
    }
  
    heal(target) {
      console.log(`${this.name} is healing ${target.name}...`);
      target.health += 10;
      console.log(`${target.name} gains 10 health.`);
    }
  }
  
  class Wizard extends Adventurer {
    constructor(name) {
      super(name, "Wizard");
    }
  
    castSpell(target) {
      console.log(`${this.name} is casting a spell on ${target.name}...`);
      target.health -= 15;
      console.log(`${target.name} loses 15 health.`);
    }
  }
  

  //Part 7: Adventure Forth
  // Create instances of adventurers and companions
const adventurerFactory = new AdventurerFactory();

// Generate adventurers
const fighters = new AdventurerFactory("Fighter");
fighters.generate("Arion");
fighters.generate("Logan");
fighters.generate("Gimbyl");

// Generate healers
const healers = new AdventurerFactory("Healer");
healers.generate("Graysine");
healers.generate("Eiliomdyn");

// Generate wizards
const wizards = new AdventurerFactory("Wizard");
wizards.generate("Graysine");
wizards.generate("Seroulean");

// Generate companions for adventurers
adventurerFactory.findByIndex(0).companion = new Companion("Arwin", "Elf");
adventurerFactory.findByIndex(1).companion = new Companion("Galeam", "Hobbit");

// Interact with adventurers
const arion = adventurerFactory.findByName("Arion");
const logan = adventurerFactory.findByName("Logan");
const graysine = adventurerFactory.findByName("Graysine");
const galeam = adventurerFactory.findByName("Galeam");

arion.scout();
logan.duel(galeam);
graysean.heal(arion);
galeam.steal(arion);
