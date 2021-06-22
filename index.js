import express from "express";
import { ApolloServer } from "apollo-server-express";
import { typeDefs, resolvers } from "./schema";
import  mongoose  from "mongoose";

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

mongoose.connect(
  "mongodb://admin-51:mongo555@cluster0-shard-00-00.jgi8k.mongodb.net:27017,cluster0-shard-00-01.jgi8k.mongodb.net:27017,cluster0-shard-00-02.jgi8k.mongodb.net:27017/cat-database?ssl=true&replicaSet=atlas-9uldxm-shard-0&authSource=admin&retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  }
);