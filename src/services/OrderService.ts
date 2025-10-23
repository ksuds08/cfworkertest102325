// OrderService.ts
import React from 'react';

interface Order {
    userId: string;
    products: string[];
}

class OrderService {
    private orders: Order[] = [];

    // Create a new order
    createOrder(order: Order): string {
        if (!order.userId) {
            throw new Error('User ID is missing.');
        }
        if (!order.products.length) {
            throw new Error('No products specified.');
        }
        this.orders.push(order);
        return 'Order created successfully.';
    }
}

export default new OrderService();