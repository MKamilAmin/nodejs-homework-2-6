const mongoose = require("mongoose");
const { Schema } = mongoose;
const contactsSchema = new Schema({
    name: {
        type: String,
        required: [true, "Set name for contact"],
    },
    email: {
        type: String,
        match: [/.+@.+\..+/, "Please use a valid email address"],
    },
    phone: {
        type: String,
    },
    favorite: {
        type: Boolean,
        default: false,
    },
});
const Contact = mongoose.model("Contact", contactsSchema);
module.exports = Contact;
