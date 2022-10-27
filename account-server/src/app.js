"use strict";
const express = require("express");
const app = express();
const connection = require("./dir/model.js");
connection.connect();
app.use(express.json());
app.post("/api/income", (req, res) => {
    var _a;
    if (!((_a = req.body) === null || _a === void 0 ? void 0 : _a.content)) {
        res.sendStatus(400);
        return;
    }
    const dataColumn = Object.keys(req.body.content);
    const inputValues = Object.values(req.body.content);
    console.log(dataColumn);
    // console.log(inputValues);
    connection.query(
    // "insert into income \
    // (payedMoney, category, memo, payYear, payMonth, payDay) \
    // values (?) ",
    `insert into income \
        (${dataColumn.join(", ")}) \
        values (?) `, [inputValues], (err, rows) => {
        if (err) {
            throw err;
        }
        res.sendStatus(200);
    });
});
app.get("/api/income", (req, res) => {
    console.log(res);
    connection.query("select * from income ", (err, rows) => {
        if (err) {
            throw err;
        }
        res.send(rows);
    });
});
app.delete("/api/income", (req, res) => {
    connection.query("delete * from income ", (err, rows) => {
        if (err) {
            throw err;
        }
        res.send(rows);
    });
});
app.put("/api/income/id/:id", (req, res) => {
    var _a;
    if (!((_a = req.body) === null || _a === void 0 ? void 0 : _a.content)) {
        res.sendStatus(400);
        return;
    }
    let updateValues = "";
    let updateArray = [];
    for (let key in req.body.content) {
        updateArray.push(`${key} = '${req.body.content[key]}' `);
    }
    updateValues = updateArray.join(" , ");
    connection.query(`update income set ${updateValues} where id = ?`, [req.params.id], (err, rows) => {
        if (err) {
            throw err;
        }
        res.send(rows);
    });
});
app.delete("/api/income/id/:id", (req, res) => {
    connection.query("delete * from income where id = ?", [req.params.id], (err, rows) => {
        if (err) {
            throw err;
        }
        res.send(rows);
    });
});
app.get("/api/income/id/:id", (req, res) => {
    connection.query("select * from income where id = ? ", [req.params.id], (err, rows) => {
        if (err) {
            throw err;
        }
        res.send(rows);
    });
});
app.get("/api/income/payyear/:payyear", (req, res) => {
    connection.query("select * from income where payYear = ? ", [req.params.payyear], (err, rows) => {
        if (err) {
            throw err;
        }
        res.send(rows);
    });
});
app.get("/api/income/paymonth/:paymonth", (req, res) => {
    var _a;
    if (!((_a = req.body) === null || _a === void 0 ? void 0 : _a.paymonth)) {
        res.sendStatus(400);
        return;
    }
    connection.query("select * from income where payMonth = ? ", [req.params.payMonth], (err, rows) => {
        if (err) {
            throw err;
        }
        res.send(rows);
    });
});
app.get("/api/income/payday/:payday", (req, res) => {
    connection.query("select * from income where payDay = ? ", [req.params.payday], (err, rows) => {
        if (err) {
            throw err;
        }
        res.send(rows);
    });
});
app.post("/api/expend", (req, res) => {
    var _a;
    if (!((_a = req.body) === null || _a === void 0 ? void 0 : _a.content)) {
        res.sendStatus(400);
        return;
    }
    const dataColumn = Object.keys(req.body.content);
    const inputValues = Object.values(req.body.content);
    connection.query(
    // "insert into expend \
    // (payedMoney, payment, category, memo, payYear, payMonth, payDay) \
    // values (?)",
    "insert into expend \
        (?) \
        values (?)", [dataColumn, inputValues], (err, rows) => {
        if (err) {
            throw err;
        }
        res.sendStatus(200);
    });
});
app.get("/api/expend", (req, res) => {
    connection.query("select * from expend ", (err, rows) => {
        if (err) {
            throw err;
        }
        res.send(rows);
    });
});
app.delete("/api/expend/id/:id", (req, res) => {
    connection.query("delete * from expend where id = ?", [req.params.id], (err, rows) => {
        if (err) {
            throw err;
        }
        res.send(rows);
    });
});
app.put("/api/expend/id/:id", (req, res) => {
    var _a;
    if (!((_a = req.body) === null || _a === void 0 ? void 0 : _a.content)) {
        res.sendStatus(400);
        return;
    }
    let updateValues = "";
    let updateArray = [];
    for (let key in req.body.content) {
        updateArray.push(`${key} = '${req.body.content[key]}' `);
    }
    updateValues = updateArray.join(" , ");
    connection.query(`update expend set ${updateValues} where id = ?`, [req.params.id], (err, rows) => {
        if (err) {
            throw err;
        }
        res.send(rows);
    });
});
app.get("/api/expend/id/:id", (req, res) => {
    connection.query("select * from expend where id = ?", [req.params.id], (err, rows) => {
        if (err) {
            throw err;
        }
        res.send(rows);
    });
});
app.delete("/api/expend/id/:id", (req, res) => {
    connection.query("delete * from expend where id = ? ", [req.params.id], (err, rows) => {
        if (err) {
            throw err;
        }
        res.send(rows);
    });
});
app.get("/api/expend/payyear/:payyear", (req, res) => {
    connection.query("select * from expend where payYear = ? ", [req.params.payyear], (err, rows) => {
        if (err) {
            throw err;
        }
        res.send(rows);
    });
});
app.get("/api/expend/paymonth/:paymonth", (req, res) => {
    connection.query("select * from expend where payMonth = ? ", [req.params.paymonth], (err, rows) => {
        if (err) {
            throw err;
        }
        res.send(rows);
    });
});
app.get("/api/expend/payday/:payday", (req, res) => {
    connection.query("select * from expend where payDay = ? ", [req.params.payday], (err, rows) => {
        if (err) {
            throw err;
        }
        res.send(rows);
    });
});
const { createProxyMiddleware } = require("http-proxy-middleware");
app.use(createProxyMiddleware("/", {
    target: "http://localhost:8080/",
    changeOrigin: true,
}));
app.listen(3000, () => {
    console.log("listening on 3000…");
});
