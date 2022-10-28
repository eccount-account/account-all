"use strict";
const incomeGetController = require("./commonAPI.js");
const incomeGetApi = new incomeGetController("income");
const connection1 = require("../models/model.js");
module.exports = {
    api: {
        insertData: (req, res) => { incomeGetApi.insertData(req, res); },
        getAllData: (req, res) => { incomeGetApi.getAllData(req, res); },
        deleteAllData: (req, res) => { incomeGetApi.deleteAllData(req, res); },
        modifyDataById: (req, res) => { incomeGetApi.modifyDataById(req, res); },
        deleteDataById: (req, res) => { incomeGetApi.deleteDataById(req, res); },
        getDataById: (req, res) => { incomeGetApi.getDataById(req, res); },
        getYearData: (req, res) => { incomeGetApi.getYearData(req, res); },
        getMonthData: (req, res) => { incomeGetApi.getMonthData(req, res); },
        getDayData: (req, res) => { incomeGetApi.getDayData(req, res); }
    }
};
