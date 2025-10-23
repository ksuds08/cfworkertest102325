export interface User {
    id: string;
    username: string;
    email: string;
    password: string;
}

export interface Product {
    id: string;
    name: string;
    price: number;
}

export interface Order {
    userId: string;
    products: Product[];
}

export class UserService {
    private users: User[] = [];

    register(user: User) {
        this.users.push(user);
    }

    authenticate(username: string, password: string): User | null {
        const user = this.users.find(u => u.username === username && u.password === password);
        return user || null;
    }
}

export class OrderService {
    private orders: Order[] = [];

    createOrder(userId: string, products: Product[]): Order {
        const order: Order = { userId, products };
        this.orders.push(order);
        return order;
    }
}