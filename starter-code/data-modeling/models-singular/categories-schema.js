'use strict';

const mongoose = require('mongoose');

// What fields and constraints do we want?
const categoriesSchema = mongoose.Schema({
    name:{ type: String, required: true,},
    description:{ type: String, required: true,},
});
categoriesSchema.post('findOne', function (document) {
    console.log('--After finding one player--');
    console.log({document});
    console.log(this);
});

categoriesSchema.post('init', function () {
    console.log('--After initializing a player--');
    console.log(this);
});

categoriesSchema.post('save', function (doc) {
    console.log('--After saving a player--');
    console.log(this);
});


// Do we need to run any lifecycle hooks/middleware?

module.exports = mongoose.model('categories ', categoriesSchema);
