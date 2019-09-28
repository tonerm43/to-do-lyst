const express = require('express');
const Item = require('./item.model');

const itemRoutes = express.Router();

// Save task
itemRoutes.route('/add').post((req, res) => {
    const item = new Item(req.body);
    item.save()
        .then(() => {
            res.status(200).json({ business: 'business in added successfully' });
        })
        .catch(() => {
            res.status(400).send('unable to save to database');
        });
});

// Get all tasks
itemRoutes.route('/').get((req, res) => {
    Item.find((err, items) => {
        if (err) {
            res.json(err);
        } else {
            res.json(items);
        }
    });
});

//  Update task
itemRoutes.route('/update/:id').post((req, res) => {
    Item.findById(req.params.id, (err, item) => {
        if (err) {
            res.status(400).send('error', err);
        } else if (!item) {
            res.status(404).send('data is not found');
        } else {
            item.completed = !item.completed;
            item.save().then(() => {
                res.json('Update complete');
            }).catch(() => {
                res.status(400).send('unable to update the database');
            });
        }
    });
});

// Delete task
itemRoutes.route('/delete/:id').delete((req, res) => {
    Item.findByIdAndRemove({ _id: req.params.id }, (err) => {
        if (err) {
            res.json(err);
        } else {
            res.json('Successfully removed');
        }
    });
});

module.exports = itemRoutes;
