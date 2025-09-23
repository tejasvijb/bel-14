class OrderProcessingService {
    createOrder(orderData) {
        // Logic to create an order
        console.log("order created:", orderData);
    }

    processPayment(orderId, paymentDetails) {   
        // Logic to process payment
        // Check for CC / DC/ UPI/ CASH
        console.log(`payment processed for order ${orderId} with details:`, paymentDetails);
    }

    sendConfirmationEmail(orderId, email) {
        // Logic to send confirmation email
        // Starting your smtp server / 3P System
        // fetch some email template
        // fetch customer information
        // Stictch the template and constomer information
        // send the email

        console.log(`confirmation email sent for order ${orderId} to email:`, email);
    }


}

// Violation of Single Responsibility Principle