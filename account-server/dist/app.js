"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_proxy_middleware_1 = require("http-proxy-middleware");
const routesIncome_js_1 = require("./routes/routesIncome.js");
const routesExpend_js_1 = require("./routes/routesExpend.js");
const routesMonthTotal_js_1 = require("./routes/routesMonthTotal.js");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/api/income', routesIncome_js_1.incomeRouter);
app.use('/api/expend', routesExpend_js_1.expendRouter);
app.use('/api/monthtotal', routesMonthTotal_js_1.monthTotalRouter);
app.use((0, http_proxy_middleware_1.createProxyMiddleware)("/", {
    target: "http://localhost:8080/",
    changeOrigin: true,
}));
app.listen(3000, () => {
    console.log("listening on 3000…");
});
