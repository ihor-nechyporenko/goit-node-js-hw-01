const { v4 } = require('uuid');

const getAll = require('./getAll');
const updateContactsList = require('./updateContactsList');

const add = async (name, email, phone) => {
    try {
        const contacts = await getAll();
        const newContact = { name, email, phone, id: v4() };
        const newContactsList = [...contacts, newContact];
        updateContactsList(newContactsList);
        
        return newContact;
    } catch (error) {
        throw error;
    }
};

module.exports = add;