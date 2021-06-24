'use strict';

// ES5 version
var catModel = require('../models/cat');

var resolvers = {
  Query: {
    fetchCats: function fetchCats(root, arg) {
      // this is where you can fetch from a remote database and return the data
      return catModel.find({});
    }
  },
  Mutation: {
    unlikeCat: function unlikeCat(root, arg) {
      // here is where you make a request to the remote database to make some change, then return a response
      // return {
      //   success: false,
      //   error: 'Unable to connect to remote database',
      //   data: null
      // }

      fetchCats: (function (_ref) {
        var id = _ref.id;

        if (!fetchCats[id]) {
          throw new Error('Unable to connect to remote database');
        }
        return catModel.find({ id: id });
        return success;
      });
    },
    likeCat: function likeCat(root, arg) {
      // here is where you make a request to the remote database to make some change, then return a response

      return {
        success: false,
        error: 'Unable to connect',
        data: catModel.find({ id: id })
      };
    }
  }
};

module.exports = resolvers;