const {GraphQLObjectType, GraphQLList, GraphQLString, GraphQLSchema} = require("graphql/index");
const CurrencyType = require("./typeDefinitions/currencyType");
const HistoryType = require("./typeDefinitions/historyType");
const {fetchCurrencies, fetchHistoryById} = require("./apiCalls/conincap");


const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        getAllCurrencies: {
            type: new GraphQLList(CurrencyType),
            async resolve() {
                return await fetchCurrencies();
            }
        },
        getHistoryById: {
            type: new GraphQLList(HistoryType),
            args: { id: { type: GraphQLString }},
            async resolve(parent, args) {
                return await fetchHistoryById(args.id);
            }
        }
    }
});

module.exports = new GraphQLSchema({query: RootQuery});
