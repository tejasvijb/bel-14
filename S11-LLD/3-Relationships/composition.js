// Has-A (Strong Ownership) - A Relationship where one class is composed of another class

class Heart {
    beat() {
        console.log('Heart is beating');
    }
}



class Human {
    #heart;  // Private field
    
    constructor(name) { 
        this.name = name;
        const babyHeart = new Heart(); 
        
        this.#heart = babyHeart;  // Human has a Heart    
    }

    live() {
        console.log(`${this.name} is alive`);
        this.#heart.beat();
    }

}

const jay = new Human('Jay');
jay.live();