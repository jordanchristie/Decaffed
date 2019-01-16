const express = require('express'),
      User = require('../models/Note'),
      app = express();

module.exports = (app) => {
    app.get('api/notes', (req, res) => {
    
    })

    app.post('api/notes', (req, res) => {
        const { title, note } = req.body;
        console.log(req.body);

        const newNote = User.findOne({id: req.user.id}, (err, user) => {
            user.notes.push({
                title,
                note
            });
            user.save();
        });
    })

    app.put('api/notes/:id', (req, res) => {
        const editedNote = User.findOne ({id: req.user._id}, (err, user) => {

        })
    })

    app.delete('api/notes/:id', (req, res) => {
        const deletedNote = User.findOne({id: req.user._id}, (err, user) => {
            user.savedNote.id(req.params.id).remove()

            user.save();
        })
    })
}