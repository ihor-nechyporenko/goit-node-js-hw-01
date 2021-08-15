const getAll = require('./getAll');

const getById = async (id) => {
    try {
        const contacts = await getAll();
        const findContact = contacts.find(contact => contact.id.toString() === id);
        if (!findContact) {
            throw new Error(`Contact with id=${id} not found`)
        };
        return findContact;
    } catch (error) {
        throw error;
    }
};

module.exports = getById;