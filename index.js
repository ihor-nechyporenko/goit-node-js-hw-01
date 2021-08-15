const { program } = require('commander');

const contactsOperations = require('./contacts');
// const contactsOperations = require('./db');

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
              await contactsOperations.listContacts();
          })();
      break;

      case 'get':
          (async () => {
              id
                  ? await contactsOperations.getContactById(id)
                  : console.log('ID is not specified');
          })();
      break;

      case 'add':
          (async () => {
              name && email && phone
                  ? await contactsOperations.addContact(name, email, phone)
                  : console.log('Please, entry full data (name, email, phone)');
          })();
      break;

      case 'remove':
          (async () => {
              id
                  ? await contactsOperations.removeContact(id)
                  : console.log('ID is not specified');
        })();
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

invokeAction(argv);