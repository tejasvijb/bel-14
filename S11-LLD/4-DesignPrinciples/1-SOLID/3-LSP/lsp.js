class PaymentMethod {
    processPayment(orderId, paymentDetails) {
        throw new Error('This method should be overridden!');
    }
}

class CreditCardPayment extends PaymentMethod {
    processPayment(orderId, paymentDetails) {
        console.log(`Processing credit card payment for order ${orderId}`);
    }
}

class DebitCardPayment extends PaymentMethod {
    processPayment(orderId, paymentDetails) {
        console.log(`Processing debit card payment for order ${orderId}`);
    }
}   

class UpiPayment extends PaymentMethod {
    processPayment(orderId, paymentDetails) {
        console.log(`Processing UPI payment for order ${orderId}`);
    }
}

class CashPayment extends PaymentMethod {
    processPayment(orderId, paymentDetails) {
        console.log(`Processing cash payment for order ${orderId}`);
    }
}

class FreePayment extends PaymentMethod {
    processPayment(orderId, paymentDetails) {
        // Quick Fix: console.log(`No payment needed for order ${orderId}`);
        throw new Error('Free payment doesn\'t need details');
    }
}


class InternetBankingPayment extends PaymentMethod {
    processPayment(orderId, paymentDetails) {
        console.log(`Processing internet banking payment for order ${orderId}`);
    }
}


class OrderService {
    constructor(paymentMethod) {
        this.paymentMethod = paymentMethod;
    }

    placeOrder(orderId, paymentDetails) {
        // Other order processing logic can go here
        this.paymentMethod.processPayment(orderId, paymentDetails);
    }

}

const creditCardPayment = new CreditCardPayment();
const order1 = new OrderService(creditCardPayment);
order1.placeOrder(123,{ amount: 100, type: 'CREDIT_CARD', cardNumber: '1234-5678-9012-3456' });    


const freePayment = new FreePayment();
const order2 = new OrderService(freePayment);
order2.placeOrder(124, {});

// Vialation of Liskov Substitution Principle
// FreePayment is not a true subtype of PaymentMethod because it throws an error when processPayment is called with paymentDetails.