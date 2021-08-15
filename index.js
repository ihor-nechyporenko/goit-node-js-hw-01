const { program } = require('commander');

// const contactsOperations = require('./contacts');
const contactsOperations = require('./db');

program
  .option('-a, --action <type>', 'choose action')
  .option('-i, --id <type>', 'user id')
  .option('-n, --name <type>', 'user name')
  .option('-e, --email <type>', 'user email')
  .option('-p, --phone <type>', 'user phone');

program.parse(process.argv);

const argv = program.opts();

function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
      case 'list':
          (async () => {
              const contactsList = await contactsOperations.getAll();
              console.log(contactsList);
          })();
      break;

      case 'get':
        (async () => {
            try {
                const findContact = await contactsOperations.getById(id);
                console.log(findContact);
            } catch (error) {
                throw error;
            }
        })();
      break;

      case 'add':
          (async () => {
              const addContact = await contactsOperations.add(name, email, phone);
              console.log(addContact);
          })();
      break;

      case 'remove':
        (async () => {
            try {
                const removeContact = await contactsOperations.remove(id);
                console.log(removeContact);
            } catch (error) {
                throw error;
            }
        })();
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

invokeAction(argv);