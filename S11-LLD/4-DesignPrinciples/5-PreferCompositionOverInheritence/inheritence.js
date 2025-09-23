// System of Ducks

class Duck {
    constructor(name) {
        this.name = name;
    }

    displayName() {
        console.log(`I am a duck named ${this.name}`);
    }
    
    quack() {   
        console.log(`${this.name} quacks!`);
    }

    swim() {
        console.log(`${this.name} swims!`);
    }

    fly() {
        console.log(`${this.name} flies!`);
    }

}

class LakeDuck extends Duck {
    constructor(name) {
        super(name);
    }

    fly() {
        console.log(`${this.name} is flying over a lake`);
    }
}


class RubberDuck extends Duck {
    constructor(name) {
        super(name);
    }

    fly() {
        throw new Error("Rubber ducks can't fly");
    }

    quack() {
        console.log(`${this.name} squeaks!`);
    }
    swim() {
        throw new Error("Rubber ducks can't swim");
    }
    
}


