const fs = require('fs/promises');

const getAll = require('./getAll');
const contactsPath = require('./contactsPath');
const updateContactsList = require('./updateContactsList');

const update = async (id, updateData) => {
    try {
        const contacts = await getAll();
        const index = contacts.findIndex(contact => contact.id === id);

        if (index === -1) {
            throw new Error(`Contact with id=${id} not found`);
        };

        contacts[index] = { ...contacts[index], ...updateData };
        updateContactsList(contacts);

        return contacts[index];
    } catch (error) {
        throw error;
    }
};

module.exports = update;