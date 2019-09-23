const express = require('express');
// eslint-disable-next-line new-cap
const itemRoutes = express.Router();

// Require Item model in our routes module
const Item = require('./item.model');

// Defined save route
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

// Defined get data(index or listing) route
itemRoutes.route('/').get((req, res) => {
    Item.find((err, items) => {
        if (err) {
            res.json(err);
        } else {
            res.json(items);
        }
    });
});

//  Defined update route
itemRoutes.route('/update/:id').post((req, res) => {
    Item.findById(req.params.id, (err, item) => {
        if (err) {
            res.status(400).send('error', err);
        } else if (!item) {
            res.status(404).send('data is not found');
        } else {
            item.description = req.body.description;
            item.complete = req.body.complete;
            item.save().then(() => {
                res.json('Update complete');
            }).catch(() => {
                res.status(400).send('unable to update the database');
            });
        }
    });
});

// Defined delete | remove | destroy route
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
