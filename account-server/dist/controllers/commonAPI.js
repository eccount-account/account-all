"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controller = void 0;
const getModel = require("../models/model.js");
// import { modelConnection } from "../models/model.js";
const connection = getModel;
class Controller {
    constructor(table) {
        this.connection = connection;
        this.table = table;
    }
    insertData(req, res) {
        var _a;
        if (!((_a = req.body) === null || _a === void 0 ? void 0 : _a.content)) {
            res.sendStatus(400);
            return;
        }
        const dataColumn = Object.keys(req.body.content);
        const inputValues = Object.values(req.body.content);
        // try {
        //     getModel.insertToDB(table, dataColumn, inputValues);
        // } catch {
        // }
        connection.query(`insert into ${this.table} \
            (${dataColumn.join(", ")}) \
            values (?) `, [inputValues], (err, rows) => {
            if (err) {
                throw err;
            }
            res.sendStatus(200);
        });
    }
    getAllData(req, res) {
        console.log(this.table);
        connection.query(`select * from ${this.table} `, (err, rows) => {
            if (err) {
                throw err;
            }
            res.send(rows);
        });
    }
    deleteAllData(req, res) {
        connection.query(`delete * from ${this.table} `, (err, rows) => {
            if (err) {
                throw err;
            }
            res.send(rows);
        });
    }
    modifyDataById(req, res) {
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
        connection.query(`update ${this.table} set ${updateValues} where id = ?`, [req.params.id], (err, rows) => {
            if (err) {
                throw err;
            }
            res.send(rows);
        });
    }
    deleteDataById(req, res) {
        connection.query(`delete * from ${this.table} where id = ? `, [req.params.id], (err, rows) => {
            if (err) {
                throw err;
            }
            res.send(rows);
        });
    }
    getDataById(req, res) {
        connection.query(`select * from ${this.table} where id = ? `, [req.params.id], (err, rows) => {
            if (err) {
                throw err;
            }
            res.send(rows);
        });
    }
    getYearData(req, res) {
        connection.query(`select * from ${this.table} where payYear = ? `, [req.params.payyear], (err, rows) => {
            if (err) {
                throw err;
            }
            res.send(rows);
        });
    }
    getMonthData(req, res) {
        var _a;
        if (!((_a = req.body) === null || _a === void 0 ? void 0 : _a.payMonth)) {
            res.sendStatus(400);
            return;
        }
        connection.query(`select * from ${this.table} where payMonth = ? `, [req.params.paymonth], (err, rows) => {
            if (err) {
                throw err;
            }
            res.send(rows);
        });
    }
    getDayData(req, res) {
        connection.query(`select * from ${this.table} where payDay = ? `, [req.params.payday], (err, rows) => {
            if (err) {
                throw err;
            }
            res.send(rows);
        });
    }
}
exports.Controller = Controller;