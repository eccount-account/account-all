const express = require("express");
const app = express();

// const connection = require("./config/db.js");// 20221027
const connection = require('./models/model.js');
connection.connect();

const router = require("./routes/routesRoot");


app.use(express.json());
app.use('/', router);

const { createProxyMiddleware } = require("http-proxy-middleware");

app.use(
    createProxyMiddleware("/", {
        target: "http://localhost:8080/",
        changeOrigin: true,
    })
);

app.listen(3000, () => {
    console.log("listening on 3000…");
});