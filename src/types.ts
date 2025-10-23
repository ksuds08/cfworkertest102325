export interface User {
    id: string;
    name: string;
    email: string;
}

export interface Product {
    id: string;
    name: string;
    price: number;
}

export interface Order {
    orderId: string;
    userId: string;
    products: Product[];
}

// TODO: Implement user authentication functionality
// TODO: Create order processing functionality
