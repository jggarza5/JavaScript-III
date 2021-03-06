/*
  Object oriented design is commonly used in video games.  For this part of the assignment
  you will be implementing several classes with their correct inheritance heirarchy.

  In this file you will be creating three classes: GameObject, CharacterStats, Humanoid.  
  At the bottom of this file are 3 objects that all inherit from Humanoid.  Use the objects at the bottom of the page to test your classes.
  
  Each class has unique properites and methods that are defined in their block comments below:
*/
  
/*
  === GameObject ===
  * createdAt
  * dimensions
  * destroy() // prototype method -> returns the string 'Object was removed from the game.'
*/

function GameObject (attributes) {
  this.createdAt = new Date(),
  this.dimensions = {
    length: attributes.dimensions.length,
    width: attributes.dimensions.width,
    height: attributes.dimensions.height
  }
}

GameObject.prototype.destroy = function() {
  return "Object was removed from the game.";
};

/*
  === CharacterStats ===
  * hp
  * name
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

function CharacterStats (characterAttributes) {
  GameObject.call(this, characterAttributes);
  this.hp = characterAttributes.hp;
  this.name = characterAttributes.name
}

CharacterStats.prototype = Object.create(GameObject.prototype);


CharacterStats.prototype.takeDamage = function() {
  return `${this.name} took damage.`
}

CharacterStats.prototype.destroy = GameObject.prototype.destroy;
/*
  === Humanoid ===
  * faction
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/
 
function Humanoid (humanoidAttributes) {
  CharacterStats.call(this, humanoidAttributes);
  this.faction = humanoidAttributes.faction,
  this.weapons = humanoidAttributes.weapons,
  this.language = humanoidAttributes.language
}

Humanoid.prototype = Object.create(CharacterStats.prototype);


Humanoid.prototype.greet = function() {
  return `${this.name} offers a greeting in ${this.language}.`;
}

Humanoid.prototype.destroy = CharacterStats.prototype.destroy;

Humanoid.prototype.takeDamage = CharacterStats.prototype.takeDamage;

/*
  * Inheritance chain: Humanoid -> CharacterStats -> GameObject
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

//Test you work by uncommenting these 3 objects and the list of console logs below:


  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    hp: 5,
    name: 'Bruce',
    faction: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Toungue',
  });

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    hp: 15,
    name: 'Sir Mustachio',
    faction: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Toungue',
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    hp: 10,
    name: 'Lilith',
    faction: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });

  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.hp); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.faction); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.


  // Stretch task: 
  // * Create Villian and Hero classes that inherit from the Humanoid class.  
  // * Give the Hero and Villians different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villian and one a hero and fight it out with methods!


// Hero
function Hero (heroAttributes) {
  Humanoid.call(this, heroAttributes);

}

Hero.prototype = Object.create(Humanoid.prototype);

Hero.prototype.attack = function() {
  return `${this.name} deals 2 points of damage with ${this.weapons}!`
}

// Villian 
function Villian (villanAttributes) {
  Humanoid.call(this, villanAttributes);
}

Villian.prototype = Object.create(Humanoid.prototype);

Villian.prototype.attack = function() {
  return `${this.name} deals 3 points of damage with ${this.weapons}!`
}

Villian.prototype.dies = function() {
  return this.name + ' has died!'
}

// Hero and Villian Objects

const King = new Hero({
  createdAt: new Date(),
  dimensions: {
    length: 3,
    width: 3,
    height: 4,
  },
  hp: 20,
  name: 'Arthur',
  faction: 'Kights of the Round Table',
  weapons: [
    'Excaliber',
  ],
  language: 'Old English',
});


const Dragon = new Villian({
  createdAt: new Date(),
  dimensions: {
    length: 30,
    width: 30,
    height: 40
  },
  hp: 40,
  name: 'Leviathan',
  faction: 'Dragons have no factions',
  weapons: [
    'Fire Breath',
  ],
  language: 'Dragon Language',
});


console.log(King.attack());
console.log(Dragon.takeDamage());
console.log(King.attack());
console.log(Dragon.takeDamage());
console.log(King.attack());
console.log(Dragon.takeDamage());
console.log(King.attack());
console.log(Dragon.takeDamage());
console.log(King.attack());
console.log(Dragon.takeDamage());
console.log(Dragon.attack());
console.log(King.takeDamage());
console.log(Dragon.attack());
console.log(King.takeDamage());
console.log(Dragon.attack());
console.log(King.takeDamage());
console.log(King.attack());
console.log(Dragon.dies());
console.log(Dragon.destroy());