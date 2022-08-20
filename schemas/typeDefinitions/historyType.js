const { GraphQLObjectType, GraphQLString, GraphQLFloat } = require("graphql/index");

const HistoryType = new GraphQLObjectType({
    name: "History",
    fields: () => ({
        time: { type: GraphQLFloat },
        priceUsd: { type: GraphQLString },
    })
})

module.exports = HistoryType;