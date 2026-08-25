const mongoose = require("mongoose");

// Making a schema
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
  },
  jobTitle: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  gender: {
    type: String,
  },
},{timestamps : true}
);
// Making a modal to use schema
const User = mongoose.model("user", userSchema);

module.exports = User; 