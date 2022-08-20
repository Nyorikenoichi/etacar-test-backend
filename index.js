const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const  schema = require("./schemas/index");
const cors = require("cors");

const app = express();
const PORT = 6969;

app.use(cors());

app.use("/graphql", graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(process.env.PORT || PORT, () => {
    console.log("server started");
})