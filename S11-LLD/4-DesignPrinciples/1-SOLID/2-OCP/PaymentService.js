class PaymentService {
    processPayment(orderId, paymentDetails) {   
        if (paymentDetails.type === 'CREDIT_CARD') {    
            console.log(`Processing credit card payment for order ${orderId}`);
        } else if (paymentDetails.type === 'DEBIT_CARD') {
            console.log(`Processing debit card payment for order ${orderId}`);
        } else if (paymentDetails.type === 'UPI') {
            console.log(`Processing UPI payment for order ${orderId}`);
        } else if (paymentDetails.type === 'CASH') {
            console.log(`Processing cash payment for order ${orderId}`);
        }
    }
}

// Violation of Open-Closed Principle
// Ideally it should have been an interface
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

class InternetBankingPayment extends PaymentMethod {
    processPayment(orderId, paymentDetails) {
        console.log(`Processing internet banking payment for order ${orderId}`);
    }
}

class PaymentOCPService {
    constructor(paymentMethod) {
        this.paymentMethod = paymentMethod;
    }

    processPayment(orderId, paymentDetails) {   
        this.paymentMethod.processPayment(orderId, paymentDetails);
    }
}


const CreditCardPaymentMethod = new CreditCardPayment();
const paymentOCPService = new PaymentOCPService(CreditCardPaymentMethod);
paymentOCPService.processPayment(1, { type: 'CREDIT_CARD', cardNumber: '1234-5678-9012-3456' });

const InternetBankingPaymentMethod = new InternetBankingPayment();
const paymentOCPService2 = new PaymentOCPService(InternetBankingPaymentMethod);
paymentOCPService2.processPayment(2, { type: 'INTERNET_BANKING', accountNumber: '9876543210' });





