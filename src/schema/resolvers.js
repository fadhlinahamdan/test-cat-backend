const catModel = require('../models/cat');

const resolvers = {
  Query: {
    fetchCats: (root, arg) => {
      // this is where you can fetch from a remote database and return the data
      // return [{
      //   // id: 1,
      //   // name: 'Betsy'
      // }]
      return catModel.find({});
    }
  },
  Mutation: {
    unlikeCat: (root, arg) => {
      // here is where you make a request to the remote database to make some change, then return a response
      // return {
      //   success: false,
      //   error: 'Unable to connect to remote database',
      //   data: null
      // }

      fetchCats: ({id}) => {
          if (!fetchCats[id]) {
            throw new Error('Unable to connect to remote database');
          }
          return catModel.find({id});
          return success;
      }

    },
    likeCat: (root, arg) => {
      // here is where you make a request to the remote database to make some change, then return a response
      // return {
      //   success: false,
      //   error: 'Unable to connect to remote database',
      //   data: null
      // }
      
      return catModel.find({});

    }
  }
}

module.exports = resolvers