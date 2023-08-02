// // const fs = require('fs/promises')

// const listContacts = async () => {}

// const getContactById = async (contactId) => {}

// const removeContact = async (contactId) => {}

// const addContact = async (body) => {}

// const updateContact = async (contactId, body) => {}

// module.exports = {
//   listContacts,
//   getContactById,
//   removeContact,
//   addContact,
//   updateContact,
// }

const fs = require("fs/promises");
const path = require("path");
const { nanoid } = require("nanoid");

const contactsPath = path.join(__dirname, "contacts.json");

const listContacts = async () => {
  const contacts = await fs.readFile(contactsPath);
  return JSON.parse(contacts);
};

const getContactById = async (contactId) => {
  const data = await listContacts();
  const contactById = data.find((contact) => contact.id === contactId) || null;
  return contactById;
};
const removeContact = async (contactId) => {
  const data = await listContacts();
  const index = data.findIndex((contact) => contact.id === contactId);
  if (index === -1) {
    return null;
  }
  const [result] = data.splice(index, 1);
  await fs.writeFile(contactsPath, JSON.stringify(data, null, 2));

  return result;
};

const addContact = async (name, email, phone) => {
  const data = await listContacts();
  const newContact = { name, email, phone, id: nanoid() };
  data.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(data, null, 2));
  return newContact;
};

// const updateContact = async (contactId, body) => {}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  // updateContact,
};
