const express = require("express");

// ***
const contacts = require("../../models/contacts");
// ***

const router = express.Router(); // "сторінка записної книжки"

router.get("/", async (req, res, next) => {
  const result = await contacts.listContacts();
  res.json(result);
});

router.get("/:contactId", async (req, res, next) => {
  // const result = await contacts.getContactById();
  res.json({ message: "template message" });
});

router.post("/", async (req, res, next) => {
  // const result = await contacts.removeContact();
  res.json({ message: "template message" });
});

router.delete("/:contactId", async (req, res, next) => {
  // const result = await contacts.removeContact();
  res.json({ message: "template message" });
});

router.put("/:contactId", async (req, res, next) => {
  // const result = await contacts.addContact();
  res.json({ message: "template message" });
});

module.exports = router;
