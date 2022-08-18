const express = require("express");
const graphql = require("graphql");
const {graphqlHTTP} = require("express-graphql");
const currenciesData = require("./MOCK_DATA.json");

const app = express();
const PORT = 6969;

const RootQuery = "query"
const Mutation = "mutation"

const schema = new graphql.GrapgQLSchema({query: RootQuery, mutation: Mutation});

app.use('/graphql', graphqlHTTP({
    schema,
    graphql: true
}));

app.listen(PORT, () => {
    console.log('server started');
})