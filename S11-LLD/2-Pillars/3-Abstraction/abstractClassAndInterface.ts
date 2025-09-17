interface Flyable {
    wings: number;
    takeOff(): void;
    fly(): void;
    land():void;
}

interface Drivable {
    wheels: number;
    drive():void;
    start(): void;
    stop(): void;
}

//@ts-ignore
class Car implements Drivable {
    wheels: number;
    constructor(wheels: number) {
        this.wheels= wheels;
    }
    drive(): void {
        throw new Error("Method not implemented.");
    }
    start(): void {
        throw new Error("Method not implemented.");
    }
    stop(): void {
        throw new Error("Method not implemented.");
    }
}

class Tesla implements Drivable, Flyable {
    wheels: number;
    wings: number;

    constructor(wheels: number, wings: number) {
        this.wheels= wheels;
        this.wings = wings;
    }    
    drive(): void {
        throw new Error("Method not implemented.");
    }
    start(): void {
        throw new Error("Method not implemented.");
    }
    stop(): void {
        throw new Error("Method not implemented.");
    }
   
    takeOff(): void {
        throw new Error("Method not implemented.");
    }
    fly(): void {
        throw new Error("Method not implemented.");
    }
    land(): void {
        throw new Error("Method not implemented.");
    }
}




// abstract class Vehicle {
//     make: string;
//     model: string;


//     constructor(make: string, model: string) {
//         this.make = make;
//         this.model = model;
//     }

//     abstract start(): void; 

//     stop(): void {
//         console.log(`Stopping the vehicle: ${this.make} ${this.model}`);
//     }

//     abstract fly(): void;
    
//     abstract sail(): void;
// }

// class DieselCar extends Vehicle {
//     start(): void {
//         console.log(`My Car: ${this.make} ${this.model} is starting up`);
//     }
// }



// class PetrolCar extends Vehicle {
//     start(): void {
//         console.log(`My Car: ${this.make} ${this.model} is starting up`);
//     }
// }





