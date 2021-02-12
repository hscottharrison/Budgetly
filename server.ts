const express = require('express');
const { graphqlHTTP } = require('express-qraphql');
const { buildSchema } = require('graphql');
// const schema = require('./schema');

const app = express();
var schema = buildSchema(`
  type Query {
    hello: String
  }
`);
 
var root = { hello: () => 'Hello world!' };

app.use('/graphql', graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
}));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
