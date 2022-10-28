"use strict";
class api {
    constructor(table) {
        this.table = table;
    }
    insertData(req, res, table) {
        var _a;
        table = this.table;
        if (!((_a = req.body) === null || _a === void 0 ? void 0 : _a.content)) {
            res.sendStatus(400);
            return;
        }
        const dataColumn = Object.keys(req.body.content);
        const inputValues = Object.values(req.body.content);
        connection.query(`insert into ${table} \
            (${dataColumn.join(", ")}) \
            values (?) `, [inputValues], (err, rows) => {
            if (err) {
                throw err;
            }
            res.sendStatus(200);
        });
    }
    getAllData(req, res, table) {
        table = this.table;
        connection.query(`select * from ${table} `, (err, rows) => {
            if (err) {
                throw err;
            }
            res.send(rows);
        });
    }
    deleteAllData(req, res, table) {
        table = this.table;
        connection.query(`delete * from ${table} `, (err, rows) => {
            if (err) {
                throw err;
            }
            res.send(rows);
        });
    }
    modifyDataById(req, res, table) {
        var _a;
        table = this.table;
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
        connection.query(`update ${table} set ${updateValues} where id = ?`, [req.params.id], (err, rows) => {
            if (err) {
                throw err;
            }
            res.send(rows);
        });
    }
    deleteDataById(req, res, table) {
        table = this.table;
        connection.query(`delete * from ${table} where id = ? `, [req.params.id], (err, rows) => {
            if (err) {
                throw err;
            }
            res.send(rows);
        });
    }
    getDataById(req, res, table) {
        table = this.table;
        connection.query(`select * from ${table} where id = ? `, [req.params.id], (err, rows) => {
            if (err) {
                throw err;
            }
            res.send(rows);
        });
    }
    getYearData(req, res, table) {
        table = this.table;
        connection.query(`select * from ${table} where payYear = ? `, [req.params.payyear], (err, rows) => {
            if (err) {
                throw err;
            }
            res.send(rows);
        });
    }
    getMonthData(req, res, table) {
        var _a;
        table = this.table;
        if (!((_a = req.body) === null || _a === void 0 ? void 0 : _a.payMonth)) {
            res.sendStatus(400);
            return;
        }
        connection.query(`select * from ${table} where payMonth = ? `, [req.params.paymonth], (err, rows) => {
            if (err) {
                throw err;
            }
            res.send(rows);
        });
    }
    getDayData(req, res, table) {
        table = this.table;
        connection.query(`select * from ${table} where payDay = ? `, [req.params.payday], (err, rows) => {
            if (err) {
                throw err;
            }
            res.send(rows);
        });
    }
}
module.exports = api;
