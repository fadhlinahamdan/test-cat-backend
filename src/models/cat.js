// ES6 version
import mongoose, { Schema } from 'mongoose';
import { composeWithMongoose } from 'graphql-compose-mongoose';

// ES5 version
// const mongoose, { Schema } = require('mongoose');
// const composeWithMongoose = require('graphql-compose-mongoose');

const CatSchema = new mongoose.Schema(
    {
      id: Number,
      name: String,
      age: Number,
      description: String,
      image_url: String,
      background_color: String,
      is_liked: Boolean,
      owner: [{ name: String, phone: String, email: String, address: String }],
    },
    {
      collection: "Cat",
    }
  );
  
  const Cat = mongoose.model("Cat", CatSchema);
  
  module.exports = Cat;
  



