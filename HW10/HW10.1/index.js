
function User(name, surname, age, city) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.city = city;
}

User.prototype.getInfo = function() {
    return {
        name: this.name,
        surname: this.surname,
        age: this.age,
        city: this.city
    };
};

const user = new User('Olena', 'Shevchenko', 36, 'Kharkov');

console.log(user.getInfo());