class User {
    constructor(fullname, email, password) {
        this.fullname = fullname;
        this.email = email;
        this.password = password;
    }

    publish(loginEmail, loginPassword) {
        if (this.email === loginEmail && this.password === loginPassword) {
            console.log(`${this.fullname}: Login successful!`);
        } else {
            console.log(`${this.fullname}: Login failed!`);
        }
    }
}

const user = new User('John', 'john@gmail.com', '1234');
user.publish('john@gmail.com', '1234')