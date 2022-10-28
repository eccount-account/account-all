"use strict";
const mysql = require("mysql");
const modelInfo = {
    host: "localhost",
    user: "root",
    password: "1q2w3e4r",
    database: "accountbook",
};
const connectionCreated = mysql.createConnection({
    host: modelInfo.host,
    user: modelInfo.user,
    password: modelInfo.password,
    database: modelInfo.database,
});
module.exports = connectionCreated;
