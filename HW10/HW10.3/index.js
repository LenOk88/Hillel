const contacts = [
    {
        id: 1,
        name: "Serhii",
        phone: "+380999999999",
        email: "serhii@email.com",
    },
    {
        id: 2,
        name: "Olena",
        phone: "+380977777777",
        email: "olena@email.com",
    },
];

function Contact({ id, name, phone, email }) {
    this.id = id;
    this.name = name;
    this.phone = phone;
    this.email = email;
}

function Book(contacts) {
    this.contacts = contacts;
}

Book.prototype.find = function (name) {
    return this.contacts.find(contact => contact.name === name);
};

Book.prototype.add = function (contact) {
    this.contacts.push(contact);
};

Book.prototype.remove = function (id) {
    this.contacts = this.contacts.filter(contact => contact.id !== id);
};

Book.prototype.update = function (id, newDetails) {
    const contact = this.contacts.find(contact => contact.id === id);
    if (contact) {
        contact.name = newDetails.name || contact.name;
        contact.phone = newDetails.phone || contact.phone;
        contact.email = newDetails.email || contact.email;
    }
};

const mappedContacts = contacts.map(el => new Contact(el));
const book = new Book(mappedContacts);

// console.log(book.find("Serhii"));
// book.add(new Contact({ id: 3, name: "Ivan", phone: "+380988888888", email: "ivan@email.com" }));
// console.log(book.contacts);
// book.remove(2);
// console.log(book.contacts);
// book.update(1, { phone: "+380955555555" });

console.log(book);