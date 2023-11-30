const express = require('express');
// import { createHandler } from 'graphql-http/lib/use/express';
const graphql_http= require("graphql-http/lib/use/express");
const schema = require("./schema/schema")
const app = express();

app.all('/graphql', graphql_http.createHandler({schema:schema}));
app.listen(4000, () => {
    console.log('now listening for requests on port 4000');
});