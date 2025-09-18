// Using Object Literal 
// const car = {
//     make: "Toyota",
//     model: "Fortuner", 
//     year: 2023,
//     start: function(){
//         console.log(`${this.make} ${this.model} is starting`);
//     }
// }

// car.start();

/* Any problems? 
1. Doesn't have any structure 
2. No encapsulation / Access modifiers
3. Code duplication ==> not scalable
*/

// Using Constructor function
// function Car(make, model, year) {
//     this.make = make;
//     this.model = model;
//     this.year = year;

//     this.start = function(){
//         console.log(`${this.make} ${this.model} is starting`);
//     }
// }

// const MarutiVictoris = new Car("Maruti", "Victoris", 2025);
// MarutiVictoris.make = "Toyota"
// MarutiVictoris.start();

// const MarutiBrezza = new Car("Maruti", "Brezza", 2022);
// MarutiBrezza.start()


class Car {
  #make;


  constructor(make, model, year) {
    this.#make = make;
    this.model = model;
    this.year = year;
  }

  #injectFuel = () => {
    console.log(`${this.#make} ${this.model} is injecting fuel`);

  }

  start = function () {
    this.#injectFuel();
    console.log(`${this.#make} ${this.model} ${this.year} is starting`);
  }
}




const tata = new Car("Tata", "Nexon", 2020);

tata.year = 2023;
tata.start();

// // tata.#make = "Maruti";
// tata.#injectFuel = () => {
//     console.log("System has been hacked");
// }
// tata.start();


