const mongoose = require("mongoose");
const { Schema } = mongoose;
const contactsSchema = new Schema({
    name: {
        type: String,
        required: [true, "Set name for contact"],
        minlength: 2,
        maxlength: 40,
    },
    email: {
        type: String,
        match: [/.+@.+\..+/, "Please use a valid email address"],
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    favorite: {
        type: Boolean,
        default: false,
    },
});
const Contact = mongoose.model("Contact", contactsSchema);
module.exports = Contact;
