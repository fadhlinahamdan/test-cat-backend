"use strict";

var _templateObject = _taggedTemplateLiteral(["\n  type Query {\n    fetchCats: [Cat]!\n  }\n\n  type Mutation {\n    unlikeCat(Cat.id: ID!): CatResponse!\n    likeCat(Cat.id: ID!): CatResponse!\n  }\n\n  type Cat {\n    id: ID!\n    name: String!\n    age: Int\n    description: String\n    image_url: String\n    background_color: String\n    owner: [Owner]\n  }\n\n  type Owner {\n    name: String\n    phone: String\n    email: String\n    address: String\n  }\n\n  type CatResponse {\n    success: Boolean!\n    error: String\n    data: [Cat]\n  }\n"], ["\n  type Query {\n    fetchCats: [Cat]!\n  }\n\n  type Mutation {\n    unlikeCat(Cat.id: ID!): CatResponse!\n    likeCat(Cat.id: ID!): CatResponse!\n  }\n\n  type Cat {\n    id: ID!\n    name: String!\n    age: Int\n    description: String\n    image_url: String\n    background_color: String\n    owner: [Owner]\n  }\n\n  type Owner {\n    name: String\n    phone: String\n    email: String\n    address: String\n  }\n\n  type CatResponse {\n    success: Boolean!\n    error: String\n    data: [Cat]\n  }\n"]);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// ES5 Version
var _require = require("apollo-server-express"),
    gql = _require.gql;

var typeDefs = gql(_templateObject);

module.exports = typeDefs;