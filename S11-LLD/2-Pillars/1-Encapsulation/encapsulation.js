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

    start = function(){
        this.#injectFuel();
        console.log(`${this.#make} ${this.model} is starting`);
    }
} 


const baleno = new Car("Maruti", "Baleno", 2022);

baleno.#injectFuel();




