const express = require("express");
const app = express();
const connection = require("./dir/model.js");

connection.connect();

app.use(express.json());

app.post("/api/income", (req: any, res: any) => {
    if (!req.body?.content) {
        res.sendStatus(400);
        return;
    }
    const inputValues = Object.values(req.body.content);
    connection.query(
        "insert into income \
        (payedMoney, category, memo, payYear, payMonth, payDay) \
        values (?) ",
        [inputValues],
        (err: any, rows: any) => {
            if (err) {
                throw err;
            }
            res.sendStatus(200);
        }
    );
});

app.get("/api/income", (req: any, res: any) => {
    console.log(res);
    connection.query("select * from income ", (err: any, rows: any) => {
        if (err) {
            throw err;
        }
        res.send(rows);
    });
});

app.delete("/api/income", (req: any, res: any) => {
    connection.query("delete * from income ", (err: any, rows: any) => {
        if (err) {
            throw err;
        }
        res.send(rows);
    });
});

app.put("/api/income/id/:id", (req: any, res: any) => {
    if (!req.body?.content) {
        res.sendStatus(400);
        return;
    }
    let updateValues: string = "";
    let updateArray: string[] = [];
    for (let key in req.body.content) {
        updateArray.push(`${key} = '${req.body.content[key]}' `);
    }
    updateValues = updateArray.join(" , ");
    connection.query(
        `update income set ${updateValues} where id = ?`,
        [req.params.id],
        (err: any, rows: any) => {
            if (err) {
                throw err;
            }
            res.send(rows);
        }
    );
});

app.delete("/api/income/id/:id", (req: any, res: any) => {
    connection.query(
        "delete * from income where id = ?",
        [req.params.id],
        (err: any, rows: any) => {
            if (err) {
                throw err;
            }
            res.send(rows);
        }
    );
});

app.get("/api/income/id/:id", (req: any, res: any) => {
    connection.query(
        "select * from income where id = ? ",
        [req.params.id],
        (err: any, rows: any) => {
            if (err) {
                throw err;
            }
            res.send(rows);
        }
    );
});

app.get("/api/income/payyear/:payyear", (req: any, res: any) => {
    connection.query(
        "select * from income where payYear = ? ",
        [req.params.payyear],
        (err: any, rows: any) => {
            if (err) {
                throw err;
            }
            res.send(rows);
        }
    );
});

app.get("/api/income/paymonth/:paymonth", (req: any, res: any) => {
    if (!req.body?.paymonth) {
        res.sendStatus(400);
        return;
    }
    connection.query(
        "select * from income where payMonth = ? ",
        [req.params.payMonth],
        (err: any, rows: any) => {
            if (err) {
                throw err;
            }
            res.send(rows);
        }
    );
});

app.get("/api/income/payday/:payday", (req: any, res: any) => {
    connection.query(
        "select * from income where payDay = ? ",
        [req.params.payday],
        (err: any, rows: any) => {
            if (err) {
                throw err;
            }
            res.send(rows);
        }
    );
});

app.post("/api/expend", (req: any, res: any) => {
    if (!req.body?.content) {
        res.sendStatus(400);
        return;
    }
    const inputValues = Object.values(req.body.content);
    connection.query(
        "insert into expend \
        (payedMoney, payment, category, memo, payYear, payMonth, payDay) \
        values (?)",
        [inputValues],
        (err: any, rows: any) => {
            if (err) {
                throw err;
            }
            res.sendStatus(200);
        }
    );
});

app.get("/api/expend", (req: any, res: any) => {
    connection.query("select * from expend ", (err: any, rows: any) => {
        if (err) {
            throw err;
        }
        res.send(rows);
    });
});

app.delete("/api/expend/id/:id", (req: any, res: any) => {
    connection.query(
        "delete * from expend where id = ?",
        [req.params.id],
        (err: any, rows: any) => {
            if (err) {
                throw err;
            }
            res.send(rows);
        }
    );
});

app.put("/api/expend/id/:id", (req: any, res: any) => {
    if (!req.body?.content) {
        res.sendStatus(400);
        return;
    }
    let updateValues: string = "";
    let updateArray: string[] = [];
    for (let key in req.body.content) {
        updateArray.push(`${key} = '${req.body.content[key]}' `);
    }
    updateValues = updateArray.join(" , ");
    connection.query(
        `update expend set ${updateValues} where id = ?`,
        [req.params.id],
        (err: any, rows: any) => {
            if (err) {
                throw err;
            }
            res.send(rows);
        }
    );
});

app.get("/api/expend/id/:id", (req: any, res: any) => {
    connection.query(
        "select * from expend where id = ?",
        [req.params.id],
        (err: any, rows: any) => {
            if (err) {
                throw err;
            }
            res.send(rows);
        }
    );
});

app.delete("/api/expend/id/:id", (req: any, res: any) => {
    connection.query(
        "delete * from expend where id = ? ",
        [req.params.id],
        (err: any, rows: any) => {
            if (err) {
                throw err;
            }
            res.send(rows);
        }
    );
});

app.get("/api/expend/payyear/:payyear", (req: any, res: any) => {
    connection.query(
        "select * from expend where payYear = ? ",
        [req.params.payyear],
        (err: any, rows: any) => {
            if (err) {
                throw err;
            }
            res.send(rows);
        }
    );
});

app.get("/api/paymonth/:paymonth", (req: any, res: any) => {
    connection.query(
        "select * from expend where payMonth = ? ",
        [req.params.paymonth],
        (err: any, rows: any) => {
            if (err) {
                throw err;
            }
            res.send(rows);
        }
    );
});

app.get("/api/expend/payday/:payday", (req: any, res: any) => {
    connection.query(
        "select * from expend where payDay = ? ",
        [req.params.payday],
        (err: any, rows: any) => {
            if (err) {
                throw err;
            }
            res.send(rows);
        }
    );
});

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
