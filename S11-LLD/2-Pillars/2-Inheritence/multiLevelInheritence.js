class Animal {
  #name;
  constructor(name, sound) {
    this.#name = name;
    this.sound = sound;
  }

  speak() {
    console.log(`${this.#name} says ${this.sound} from animal`);
  }

  getName() {
    return this.#name;
  }

  setName(name) {
    if (typeof name === 'string' && name.length > 0) {
      this.#name = name;
    } else {
      throw new Error("Invalid Name");
    }
  }

}

const dog = new Animal("Dog", "Bark");
// const dogName = dog.#name; not accessible
dog.setName("German Shepherd"); // usefull for setting validation
const dogName = dog.getName();
// console.log(dogName);

class Mammal extends Animal {
  constructor(name, sound, type) {
    super(name, sound);
    this.type = type;
  }

  // Override
  speak() {
    console.log(`${this.getName()} says ${this.sound} sweetly`);
  }

  breathe() {
    console.log(`${this.getName()}  and ${this.type} is breathing... 🫁`);
  }

  makesSound() {
    console.log(`${this.getName()} says ${this.sound}`);
  }
}

const cat = new Mammal("Cat", "meow", "domestic");

cat.type = "Wild";
// cat.breathe();
// cat.speak();


class Human extends Mammal {
  constructor(name, sound, type, canThink) {
    super(name, sound, type);
    this.canThink = canThink;
  }

  talk() {
    console.log(this)
    this.speak();
  }


}



// let cat = new Mammal("Cat", "meow", "domestic");

// cat.breathe()
// cat.speak();

// let tiger = new Mammal(cat.getName(), "Roar", "Wild");


let jay = new Human("JC", "talks", "domestic");

jay.talk();