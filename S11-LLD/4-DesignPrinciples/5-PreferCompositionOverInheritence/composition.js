class QuackBehavior {
    quack() {
        console.log('Quack!');
    }
}

class SqueakBehavior {
    squeak() {
        console.log('Squeak!');
    }
}

class FlyBehavior {     
    fly() { 
        console.log('I am flying!');
    }
}


class Duck {
    constructor(name) {
        this.name = name;
    }

    displayName() {
        console.log(`I am a duck named ${this.name}`);
    }
}


class LakeDuck extends Duck {
    constructor(name, flyBehavior) {
        super(name);
        this.flyBehavior = flyBehavior;
    }

    fly() {
        this.flyBehavior.fly();
    }
}

class RubberDuck extends Duck {
    constructor(name, squeakBehavior) {
        super(name);
        this.squeakBehavior = squeakBehavior;
    }

    squeak() {
        this.squeakBehavior.squeak();
    }
}
