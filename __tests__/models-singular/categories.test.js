const Categories = require('../../models-singular/categories');

let categories = new Categories();

const supergoose = require('../supergoose.js');

describe('Categories Model', () => {
  it('can create(() a new category', () => {
    const testCategory =  {
      name: 'cars',
      description: 'types of cars'
    };

    return categories.create(testCategory)
      .then(savedCategory => {
        Object.keys(testCategory).forEach(key => {
          expect(savedCategory[key]).toEqual(testCategory[key]);
        });
      })
      .catch(error => console.log(error));
  });

  it('can get() a category', () => {
    const testCategory =  {
      name: 'cars',
      description: 'types of cars'
    };

    return categories.create(testCategory)
      .then(savedCategory => {
        return categories.get(savedCategory._id);
      })
      .then(resolvedCategory => {
        Object.keys(testCategory).forEach(key => {
          expect(resolvedCategory[key]).toEqual(testCategory[key]);
        });
      })
      .catch(error => console.log(error));
  });

  it('can update() a category', () => {
    const testCategory =  {
      name: 'cars',
      description: 'types of cars'
    };

    return categories.update(testCategory)
      .then(savedCategory => {
        return categories.get(savedCategory._id);
      })
      .then(resolvedCategory => {
        Object.keys(testCategory).forEach(key => {
          expect(resolvedCategory[key]).toEqual(testCategory[key]);
        });
      })
      .catch(error => console.log(error));
  });

  it('can delete() a category', () => {
    const testCategory =  {
      name: 'cars',
      description: 'types of cars'
    };

    return categories.delete(testCategory)
      .then(savedCategory => {
        return categories.get(savedCategory._id);
      })
      .then(resolvedCategory => {
        Object.keys(testCategory).forEach(key => {
          expect(resolvedCategory[key]).toEqual(testCategory[key]);
        });
      })
      .catch(error => console.log(error));
  });
  
});