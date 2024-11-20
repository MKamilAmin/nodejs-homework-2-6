const express = require("express");
const {
    getAllContacts,
    getContactById,
    addContact,
    updateContact,
    removeContact,
} = require("../../service/contactService");

const router = express.Router();

router.get("/", async (req, res, next) => {
    try {
        const contacts = await getAllContacts();
        res.status(200).json(contacts);
    } catch (error) {
        next(error);
    }
});

router.get("/:contactId", async (req, res, next) => {
    try {
        const id = req.params.contactId;
        const contacts = await getContactById(id);
        res.status(200).json(contacts);
    } catch (error) {
        next(error);
    }
});

router.get("/:contactId", async (req, res, next) => {
    try {
        const id = req.params.contactId;
        let contacts = await removeContact(id);
        const filtredContacts = contacts.filter((contact) => contact.id !== id);
        contacts = [...filtredContacts];
        res.status(200).json({ message: "Contact deleted" });
    } catch (error) {
        next(error);
    }
});

module.exports = router;
