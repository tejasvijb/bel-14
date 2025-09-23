const processOrder = (order) => {
    if (order.isValid()) {
        if(order.getItems.size() > 0) {
            for (item of order.getItems()) {
                if (item.isAvailable()) {
                    item.process()
                } else {
                    item.removeFromCart()
                }
            }
            order.confirm()
        } else {
            order.cancel()
        }
    }
}

// Handling items
const processItems = (items) => {
    for (item of items) {
        if (item.isAvailable()) {
            item.process()
        } else {
            item.removeFromCart()
        }
    }
}

// Handling Order
const processOrderKISS = (order) => {
    if (!order.isValid()) {
        return;
    }

    if (order.getItems.size() === 0) {
        order.cancel();
        return;
    }
    processItems(order.getItems());
    order.confirm();
}



