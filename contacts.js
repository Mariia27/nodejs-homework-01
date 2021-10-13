const fs = require("fs/promises");
const path = require("path");
const crypto = require("crypto");
const shortid = require("shortid");

// const readContacts = async () => {
//     const result = await fs.readFile(path.join(__dirname, "./db/contacts.json"), "utf8",)
//     const contacts = JSON.parse(result);
//     return contacts
// }
// /*
//  * Раскомментируй и запиши значение/
const contactsPath = path.join(__dirname, "./db/contacts.json");


// TODO: задокументировать каждую функцию
function listContacts() {
    // ...твой код
    fs.readFile(contactsPath).then((data) => console.table(JSON.parse(data)))
        .catch((error) => {
            throw error;
        });

}

function getContactById(contactId) {
    // ...твой код
    fs.readFile(contactsPath).then((data) =>
        console.table(JSON.parse(data).find(({ id }) => id === contactId))
    )
        .catch((error) => {
            throw error;
        });
}

function removeContact(contactId) {
    // ...твой код
    fs.readFile(contactsPath).then((data) => {
        console.table(JSON.parse(data).find(({ id }) => id === contactId));
        fs.writeFile(contactsPath, JSON.stringify(deleteContact));

    })
        .catch((error) => {
            throw error;
        });

}

function addContact(name, email, phone) {
    // ...твой код
    fs.readFile(contactsPath)
        .then((data) => {
            const parsedData = JSON.parse(data);
            const id = shortid.generate();
            const newContact = { id, name, email, phone };
            const addContact = parsedData.push(newContact);

            console.table(addContact);
            fs.writeFile(contactsPath, JSON.stringify(parsedData));
            return addContact;
        })
        .catch((error) => {
            throw error;
        });
}
module.exports = { listContacts, getContactById, removeContact, addContact };