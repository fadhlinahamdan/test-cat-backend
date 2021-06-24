// ES6 version
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { typeDefs, resolvers } from "../src/schema";
import mongoose from 'mongoose';

// ES5 version
// const express = require('express');
// const ApolloServer = require('apollo-server-express');
// const { typeDefs, resolvers } = require('./src/schema');
// const mongoose = require('mongoose');
// const MongoClient = require('mongodb');

async function startApolloServer() {
  const app = express();
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    debug: true,
    tracing: true,
    introspection: true,
    playground: true,
  });
  await server.start();

  server.applyMiddleware({ app });

  app.use((req, res) => {
    res.status(200);
    res.send("This is a graphQL Backend!");
    res.end();
  });

  await new Promise((resolve) => app.listen({ port: process.env.PORT || 5000 }, resolve));
  console.log(`🚀 Server ready at http://localhost:5000${server.graphqlPath}`);
  return { server, app };
}

try {
  startApolloServer();
} catch (error) {
  console.log("An Error Occured!", error);
}

console.log("Start this section")

// const uri = "mongodb+srv://user:testcat@cluster0.vu4ve.mongodb.net/Test?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(async err => {
//   console.log("starting to fetch")
//   const collection = await client.db("test").collection("Cat").find({} );
//   client.close();
//   console.log("closed");
//   console.log("error?", err);
// });

mongoose.connect(
  "mongodb+srv://user:testcat@cluster0.vu4ve.mongodb.net/Test?retryWrites=true&w=majority",  
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  }
);
