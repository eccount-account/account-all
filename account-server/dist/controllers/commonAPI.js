"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controller = void 0;
const connection = require("../models/model.js");
// import { Model as dbModel } from "../models/model.js";
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
        //     dbModel.insertToDB(this.table, dataColumn, inputValues);
        //     res.sendStatus(400);
        // } catch {
        //     res.sendStatus(200);
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
        // try { 
        //     getModel.
        // }
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
        connection.query(`delete from ${this.table} where id = ? `, [req.params.id], (err, rows) => {
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
    // getYearData (req: any, res: any) {
    //     connection.query(
    //         `select * from ${this.table} where payYear = ? `,
    //         [req.params.payyear],
    //         (err: any, rows: any) => {
    //             if (err) {
    //                 throw err;
    //             }
    //             res.send(rows);
    //         }
    //     );
    // }
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
}
exports.Controller = Controller;
