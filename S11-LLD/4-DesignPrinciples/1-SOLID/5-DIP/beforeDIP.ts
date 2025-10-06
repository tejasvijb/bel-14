// interface Engine {
//   start(): void;
// }

// // Low level module
// class PetrolEngine implements Engine {
//   start() {
//     console.log('Petrol engine started');
//   }
// }


// High level module
// class NewCar {
//   private engine: Engine;

//   constructor() {
//     this.engine = new PetrolEngine();
//   }

//   drive() {
//     this.engine.start();
//     console.log('Car is driving');
//   }
// }

// const maruti = new NewCar();
// maruti.drive();

// // violation of Dependency Inversion Principle