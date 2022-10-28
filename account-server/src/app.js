"use strict";
const express = require("express");
const app = express();
// const connection = require("./config/db.js");// 20221027
// const connection = require('./models/model.js'); 20221028
// connection.connect();
const income = require("./routes/routesIncome.js");
const expend = require("./routes/routesExpend.js");
app.use(express.json());
app.use('/api/income', income);
app.use('/api/expend', expend);
const { createProxyMiddleware } = require("http-proxy-middleware");
app.get('/', (req, res) => {
    return res.sendStatus(200);
});
app.use(createProxyMiddleware("/", {
    target: "http://localhost:8080/",
    changeOrigin: true,
}));
app.listen(3000, () => {
    console.log("listening on 3000…");
});
