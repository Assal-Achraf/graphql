const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose')
const dotenv = require('dotenv');

// Load environment variables from .env file
const a = dotenv.config();

const app = express();

const port = process.env.PORT || 3000;
const mongodb_username = process.env.MONGODB_USERNAME;
const mongodb_password = process.env.MONGODB_PASSWORD;

const mongodb_cluster = process.env.MONGODB_CLUSTER;
const mongo_conection_string = `mongodb+srv://${mongodb_username}:${mongodb_password}@${mongodb_cluster}.vfm6iyg.mongodb.net/?retryWrites=true&w=majority`;
console.log(a);
console.log(mongo_conection_string)
mongoose.connect(mongo_conection_string)
mongoose.connection.once('open', () => {
    console.log('conneted to database');
});

// bind express with graphql
app.use('/graphql', graphqlHTTP.graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(port, () => {
    console.log('now listening for requests on port 4000');
});