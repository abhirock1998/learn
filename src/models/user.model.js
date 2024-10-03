const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  jobTitle: {
    type: String,
  },
  companyName: {
    type: String,
  },
  emailAddress: {
    type: String,
    required: true,
    unique: true,
  },
  phoneNumber: {
    type: String,
    match: /^[0-9]{10,15}$/, // validates phone number
  },
  address: {
    type: String,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
