const {GraphQLObjectType, GraphQLString} = require("graphql/index");

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

module.exports = CurrencyType;