# Introduction

This technical test will be to build a basic GraphQL server that can serve remote data and carry out some CRUD against a remote database.

The purpose of this server is to allow a cat browsing mobile web app to fetch and manipulate data from a remote database.

The server is completely non-branded, and so you are free to re-use as an example of work you have done for any other roles.

# Instructions

1. Identify a free database service, utilising any database of your liking. e.g. either a relational type Postgres or a non-relational type database, MongoDB.
2. Complete the Resolvers and Schemas with your remote database.
3. Deploy and host this server on a free service.

# Acceptance Criteria

1. To be able to visit the url and access GraphQL playground.
2. To be able to perform the queries for `fetchCats` and mutations `likeCat` and `unlikeCat`.
3. Cat data structure should match the following:

```
{
  "id": 1,
  "name": "Bessie",
  "age": 1,
  "description": "My beautiful queen Lucyloo has just given birth to a gorgeous litter of 6. Kittens will be ready to leave just in time for Xmas when they will be 13 weeks old.",
  "image_url": "https://cdn.ivodigital.com/catsapp/test-cat-1.jpg",
  "background_color": "#FAF4F0",
  "owner": {
    "name": "Deborah",
    "phone": "07711223344",
    "email": "deborah@email.com",
    "address": "Keltan House, 115 Mare St, London, E8 4RT"
  }
}
```
