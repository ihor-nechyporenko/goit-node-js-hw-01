const contactsOperations = require('./db');

async function listContacts() {
  try {
    const contacts = await contactsOperations.getAll();
    console.log(contacts);
  } catch (error) {
    console.log(error.message);
  }
};

// listContacts();

async function getContactById(contactId) {
  try {
    const contactById = await contactsOperations.getById(contactId);
    console.log(contactById);
  } catch (error) {
    console.log(error.message);
  }
};

// getContactById(10);

async function updateContact(contactId, updateData) {
  try {
    const updateContact = await contactsOperations.update(contactId, updateData);
    console.log(updateContact);
  } catch (error) {
    console.log(error.message);
  }
};

// updateContact(10, { name: 'Homer Simpson' });

async function removeContact(contactId) {
  try {
    const removeContact = await contactsOperations.remove(contactId);
    console.log(removeContact);
  } catch (error) {
    console.log(error.message);
  }
};

// removeContact(3);

async function addContact(name, email, phone) {
  try {
    const addContact = await contactsOperations.add(name, email, phone);
    console.log(addContact);
  } catch (error) {
    console.log(error.message);
  }
};

// addContact('Homer Simpson', 'homer.s@mail.com', '555-55-55');

module.exports = {
  listContacts,
  getContactById,
  updateContact,
  removeContact,
  addContact,
}


