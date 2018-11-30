const mongoose = require('mongoose'),
      { Schema } = mongoose;

const NoteSchema = new Schema({
    title: String,
    note: String
})

module.exports = mongoose.model('note', NoteSchema);