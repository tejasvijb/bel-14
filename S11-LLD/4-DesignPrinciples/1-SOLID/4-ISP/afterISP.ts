interface CreditCardPaymentProcessor {
  processCreditCard(amount: number): void;
}

interface DebitCardPaymentProcessor {
  processDebitCard(amount: number): void;
}

interface PayPalPaymentProcessor {
  processPayPal(amount: number): void;
}

interface BankTransferPaymentProcessor {
  processBankTransfer(amount: number): void;
}


class OnlineStoreISP implements CreditCardPaymentProcessor {
  processCreditCard(amount: number): void {
    console.log(`Processing credit card payment of $${amount}`);
  }
} 