const express = require('express'),
      User = require('../models/User'),
      app = express();

module.exports = (app) => {
    app.get('api/notes', (req, res) => {
        User.findOne({id: req.user._id}, (error, user) => {
            res.send(user.notes)
        })
    })

    app.post('api/notes', (req, res) => {
        const { title, note } = req.body;
        console.log(req.body);

        const newNote = User.findOne({id: req.user.id}, (error, user) => {
            user.notes.push({
                title,
                note
            });
            user.save();
        });
    })

    app.put('api/notes/:id', (req, res) => {
        const editedNote = User.findOneAndUpdate({id: req.user._id}, (error, user) => {

        })
    })

    app.delete('api/notes/:id', (req, res) => {
        const deletedNote = User.findOne({id: req.user._id}, (error, user) => {
            user.savedNote.id(req.params.id).remove()

            user.save();
        })
    })
}