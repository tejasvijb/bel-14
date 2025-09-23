class Address {
    constructor(street, city) {
        this.street = street;
        this.city = city;
    }
    
    getCity() {
        return this.city;
    }
}

class Customer {
    constructor(name, permanentAddress, currentAddress) {
        this.name = name;
        this.address = permanentAddress; // Permanent Address
        this.currentAddress = currentAddress;
    }
    
    getAddress() {
        return this.currentAddress;
        
    }

    getPermanentAddress() {
       return this.address;
    }
}

class Order {
    constructor(customer) {
        this.customer = customer; // Customer object
    }

    printShippingCity() {
        console.log(this.customer.address.city);            // Law of Demeter violation

        console.log(this.customer.getAddress().getCity());  // Law of Demeter violation

    }
}

