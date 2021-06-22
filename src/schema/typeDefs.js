const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    fetchCats: [Cat]!
  }

  type Mutation {
    unlikeCat: CatResponse!
    likeCat: CatResponse!
  }

  type Cat {
    id: ID!
    name: String!
    age: Int
    description: String
    image_url: String
    background_color: String
    owner: [Owner]
  }

  type Owner {
    name: String
    phone: String
    email: String
    address: String
  }

  type CatResponse {
    success: Boolean!
    error: String
    data: [Cat]
  }
`;

module.exports = typeDefs;
