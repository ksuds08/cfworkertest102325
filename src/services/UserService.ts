// UserService.ts
import React from 'react';

interface User {
    id: string;
    name: string;
    email: string;
}

class UserService {
    private users: User[] = [];

    // Fetch all users
    getAllUsers = React.memo(() => {
        return this.users;
    });

    // Add a user with error handling
    addUser(user: User): string {
        if (!user.name || !user.email) {
            throw new Error('Username or email must be provided.');
        }
        this.users.push(user);
        return 'User added successfully.';
    }
}

export default new UserService();
