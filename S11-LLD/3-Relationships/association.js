// Uses - A Relationship where one class uses another class

class Person {
    constructor(name) {
        this.name = name;
    }

    openAccount(bank)   {
        console.log(`${this.name} opened an account at ${bank.name}`);
    }

}


class Bank {
    constructor(name) {
        this.name = name;
    }

    provideLoad(person) {
        console.log(`${this.name} provided a loan to ${person.name}`);
    }

}

const jay = new Person('Jay');
const sbi = new Bank('SBI');

jay.openAccount(sbi);
sbi.provideLoad(jay);

