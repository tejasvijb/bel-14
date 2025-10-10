interface Engine {
  start(): void;
}

// Low level module
class PetrolEngine implements Engine {
  start() {
    console.log('Petrol engine started');
  }
}

class DieselEngine implements Engine {
  start() {
    console.log('Diesel engine started');
  }
}

// High level module
class NewCar {
  private engine: Engine;
  // Dependency Injection
  constructor(engine: Engine) {
    this.engine = engine;
  }

  drive() {
    this.engine.start();
    console.log('Car is driving');
  }
}


const petrolEngine = new PetrolEngine();
const maruti = new NewCar(petrolEngine);
maruti.drive();

// violation of Dependency Inversion Principle

// Dependency Inversion is achieved by Dependency Injection