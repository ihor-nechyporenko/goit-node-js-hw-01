const fs = require('fs/promises');

const getAll = require('./getAll');
const contactsPath = require('./contactsPath');
const updateContactsList = require('./updateContactsList');

const remove = async (id) => {
    try {
        const contacts = await getAll();
        const index = contacts.findIndex(contact => contact.id === id);

        if (index === -1) {
            throw new Error(`Contact with id=${id} not found`);
        };

        const newContactsList = contacts.filter(contact => contact.id !== id);
        updateContactsList(newContactsList);
        
        return contacts[index];
    } catch (error) {
        throw error;
    }
};

module.exports = remove;