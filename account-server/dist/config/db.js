"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const mysql = require("mysql");
const mysql_1 = __importDefault(require("mysql"));
const modelInfo = {
    host: "localhost",
    user: "root",
    password: "1q2w3e4r",
    database: "accountbook",
};
// export const connectionCreated = mysql.createConnection({
//     host: modelInfo.host,
//     user: modelInfo.user,
//     password: modelInfo.password,
//     database: modelInfo.database,
// });
const connectionCreated = mysql_1.default.createConnection({
    host: modelInfo.host,
    user: modelInfo.user,
    password: modelInfo.password,
    database: modelInfo.database,
});
module.exports = connectionCreated;
