'use strict';

// Where is our schema defined?
// How do we get it in here so we can run methods on it?

const schema = require('./categories-schema');

class Categories {

  constructor() {
  }

  get(_id) {
    // Call the appropriate mongoose method to get
    // one or more records
    // If 1, return it as a plain object
    // If 2, return it as an object like this:
    // { count: ##, results: [{}, {}] }
    if(_id) { // Evan - if id is defined
      return schema.findOne({_id});
    }
    return schema.find({});
  }

  getByName(name) {
    if(name) {
      return schema.findOne({name});
    }
    return Promise.reject(new Error('Invalid Name'));
  }

  create(record) {
    // Call the appropriate mongoose method to create a new record
    let newRecord = new schema(record);
    return newRecord.save();
  }

  update(_id, record) {
    // Call the appropriate mongoose method to update a record
   //return schema.finfById
  }

  delete(_id) {
    // Call the appropriate mongoose method to delete a record
  }

}

module.exports = Categories;
