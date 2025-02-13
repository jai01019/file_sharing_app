const mongoose = require('mongoose');

// Define the schema for "Person"
const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
});

// Create and export the model
const Person = mongoose.model('Person', personSchema);
module.exports = Person;
