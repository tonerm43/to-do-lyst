const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Define collection and schema for list items
const Item = new Schema({
    description: {
        type: String,
    },
    complete: {
        type: Boolean,
    },
}, {
    collection: 'items',
});

module.exports = mongoose.model('Item', Item);
