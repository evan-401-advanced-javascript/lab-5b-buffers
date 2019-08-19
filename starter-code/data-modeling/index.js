'use strict';

const mongoose = require('mongoose');

// Require your model
const Categories = require('./models-singular/categories');

// Mongoose Server URI
const MONGOOSE_URI = 'mongodb://localhost/class05';

// Connect
mongoose.connect(MONGOOSE_URI, { useNewUrlParser: true });

const categories = new Categories();

// Test category
// const createdCategory = categories.create({
//     name: 'Mr Krabbs',
//     description: 'Business Owner'
// })
//     .then(savedCategory => {
//         console.log(savedCategory);
//         return categories.get(savedCategory._id);
//     })
//     .then(returnedCategory => console.log(returnedCategory))
//     .catch(error => console.log(error));

// categories.getByName('Mr Krabbs')
//     .then(foundName => console.log(foundName))
//     .catch(error => console.error(error));

categories.getByName('Mr Krabbs')
    .then(console.log)
    .catch(console.log);

// Disconnect
//mongoose.disconnect();