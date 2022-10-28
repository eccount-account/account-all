"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routesIncome_js_1 = require("./routes/routesIncome.js");
const routesExpend_js_1 = require("./routes/routesExpend.js");
// const express = require("express");
const app = (0, express_1.default)();
// const connection = require("./config/db.js");// 20221027
// const connection = require('./models/model.js'); 20221028
// connection.connect();
// const income = require("./routes/routesIncome.js");
// const expend = require("./routes/routesExpend.js");
console.log("hi~~~~~~~~~~~~~~");
app.use(express_1.default.json());
app.use('/api/income', routesIncome_js_1.incomeRouter);
app.use('/api/expend', routesExpend_js_1.expendRouter);
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
