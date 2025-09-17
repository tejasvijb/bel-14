class Animal {
    #name;
    constructor(name, sound) {
        this.#name = name;
        this.sound = sound;
    }

    speak() {
      console.log(`${this.#name} says ${this.sound}`);
    }

    getName() {
      return this.#name;
    }
    
    setName(name){
        if (typeof name === 'string' && name.length> 0) {
            this.#name = name;
        } else {
            throw new Error("Invalid Name");
        }
    }   
    
}

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

class Human extends Mammal{
    constructor(name, sound, type, canThink) {
        super(name, sound, type);
        this.canThnk = canThink;
    }

    talk() {
        super.super.speak();
        console.log("We are taking");
    }


}



// let cat = new Mammal("Cat", "meow", "domestic");

// cat.breathe()
// cat.speak();

// let tiger = new Mammal(cat.getName(), "Roar", "Wild");


let jay = new Human("JC", "talks", "domestic");

jay.talk();