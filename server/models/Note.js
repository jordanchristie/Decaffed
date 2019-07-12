const mongoose = require("mongoose"),
  { Schema } = mongoose;

const NoteSchema = new Schema({
  title: {
    type: String,
    required: false
  },
  note: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  }
});

module.exports = NoteSchema;
