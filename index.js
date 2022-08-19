const express = require("express");
const {GraphQLObjectType, GraphQLSchema, GraphQLString, GraphQLList} = require("graphql");
const {graphqlHTTP} = require("express-graphql");
const currenciesData = require("./MOCK_DATA.json");

const app = express();
const PORT = 6969;

const CurrencyType = new GraphQLObjectType({
    name: "Currency",
    fields: () => ({
        id: { type: GraphQLString },
        rank: { type: GraphQLString },
        symbol: { type: GraphQLString },
        name: { type: GraphQLString },
        supply: { type: GraphQLString },
        maxSupply: { type: GraphQLString },
        marketCapUsd: { type: GraphQLString },
        volumeUsd24Hr: { type: GraphQLString },
        priceUsd: { type: GraphQLString },
        changePercent24Hr: { type: GraphQLString },
        vwap24Hr: { type: GraphQLString }
    })
})

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        getAllCurrencies: {
            type: new GraphQLList(CurrencyType),
            resolve() {
                return currenciesData;
            }
        },
        getCurrencyById: {
            type: CurrencyType,
            args: { id: { type: GraphQLString }},
            resolve(parent, args) {
                return currenciesData.find((item) => item.id === args.id);
            }
        }
    }
});

const schema = new GraphQLSchema({query: RootQuery});

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(PORT, () => {
    console.log('server started');
})