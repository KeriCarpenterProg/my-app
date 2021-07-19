class User {
    constructor (email,name) {
        this.email = email;
        this.name = name;
    }
}

const UserOne = new User('keri@keri.com','Keri');
const UserTwo = new User('langton@gmail.com','Langton');
console.log(UserOne);
console.log(UserTwo);