import mongoose, { Schema } from 'mongoose';
import { composeWithMongoose } from 'graphql-compose-mongoose';

const CatSchema = new mongoose.Schema(
    {
      id: Number,
      name: String,
      age: Number,
      description: String,
      image_url: String,
      background_color: String,
      owner: [{ name: String, phone: String, email: String, address: String }],
    },
    {
      collection: "Cat",
    }
  );
  
  const Cat = mongoose.model("Cat", CatSchema);
  
  module.exports = Cat;
  



