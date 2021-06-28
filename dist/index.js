"use strict";

// ES5 version
// const express = require('express');
// const ApolloServer = require('apollo-server-express');
// const { typeDefs, resolvers } = require('../dist/schema');
// const mongoose = require('mongoose');
// const MongoClient = require('mongodb');

var startApolloServer = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var app, server;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            app = (0, _express2.default)();
            server = new _apolloServerExpress.ApolloServer({
              typeDefs: _schema.typeDefs,
              resolvers: _schema.resolvers,
              debug: true,
              tracing: true,
              introspection: true,
              playground: true
            });
            _context.next = 4;
            return server.start();

          case 4:

            server.applyMiddleware({ app: app });

            app.use(function (req, res) {
              res.status(200);
              res.send("This is a graphQL Backend!");
              res.end();
            });

            _context.next = 8;
            return new Promise(function (resolve) {
              return app.listen({ port: process.env.PORT || 5000 }, resolve);
            });

          case 8:
            console.log("\uD83D\uDE80 Server ready at http://localhost:5000" + server.graphqlPath);
            return _context.abrupt("return", { server: server, app: app });

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function startApolloServer() {
    return _ref.apply(this, arguments);
  };
}();

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _apolloServerExpress = require("apollo-server-express");

var _schema = require("../src/schema");

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } // ES6 version


try {
  startApolloServer();
} catch (error) {
  console.log("An Error Occured!", error);
}

console.log("Start this section");

// const uri = "mongodb+srv://user:testcat@cluster0.vu4ve.mongodb.net/Test?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(async err => {
//   console.log("starting to fetch")
//   const collection = await client.db("test").collection("Cat").find({} );
//   client.close();
//   console.log("closed");
//   console.log("error?", err);
// });

_mongoose2.default.connect("mongodb+srv://user:testcat@cluster0.vu4ve.mongodb.net/Test?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});