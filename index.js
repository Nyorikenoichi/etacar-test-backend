const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const  schema = require("./schemas/index");
const cors = require("cors");

const app = express();
const PORT = 6969;

const corsOptions = { origin: ["https://nyori-crypto-tracker.netlify.app/"] };

app.use(cors(corsOptions));

app.use("/graphql", graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(process.env.PORT || PORT, () => {
    console.log("server started");
})