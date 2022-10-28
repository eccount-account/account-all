"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.api = void 0;
const getModel = require("../models/model.js");
const connection = getModel;
exports.api = {
    getAllData: (req, res) => {
        var _a;
        if (!((_a = req.body) === null || _a === void 0 ? void 0 : _a.content)) {
            res.sendStatus(400);
            return;
        }
        let payYear = "payYear";
        let payMonth = "payMonth";
        for (let key in req.body.content) {
            if (key == payYear) {
                payYear = req.body.content[key];
            }
            else if (key == payMonth) {
                payMonth = req.body.content[key];
            }
        }
        connection.query(`(select id, payedMoney, payYear, payMonth, payDay, payTime, '수입' as classify, category, memo
                from income
                where payYear = ${payYear}
                and payMonth =  ${payMonth}
                UNION
                select id, payedMoney, payYear, payMonth, payDay, payTime, '지출' as classify, category, memo
                from expend
                where payYear = ${payYear}
                and payMonth = ${payMonth}
                order by payDay, payTime asc
            );`, (err, rows) => {
            if (err) {
                throw err;
            }
            res.send(rows);
        });
    }
};
