'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _graphqlComposeMongoose = require('graphql-compose-mongoose');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ES5 version
// const mongoose, { Schema } = require('mongoose');
// const composeWithMongoose = require('graphql-compose-mongoose');

// ES6 version
var CatSchema = new _mongoose2.default.Schema({
  id: Number,
  name: String,
  age: Number,
  description: String,
  image_url: String,
  background_color: String,
  is_liked: Boolean,
  owner: [{ name: String, phone: String, email: String, address: String }]
}, {
  collection: "Cat"
});

var Cat = _mongoose2.default.model("Cat", CatSchema);

module.exports = Cat;