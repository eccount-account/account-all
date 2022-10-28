"use strict";
const expendGetController = require("./commonAPI.js");
const expendGetApi = new expendGetController("expend");
module.exports = {
    api: {
        insertData: (req, res) => { expendGetApi.insertData(req, res); },
        getAllData: (req, res) => { expendGetApi.getAllData(req, res); },
        deleteAllData: (req, res) => { expendGetApi.deleteAllData(req, res); },
        modifyDataById: (req, res) => { expendGetApi.modifyDataById(req, res); },
        deleteDataById: (req, res) => { expendGetApi.deleteDataById(req, res); },
        getDataById: (req, res) => { expendGetApi.getDataById(req, res); },
        getYearData: (req, res) => { expendGetApi.getYearData(req, res); },
        getMonthData: (req, res) => { expendGetApi.getMonthData(req, res); },
        getDayData: (req, res) => { expendGetApi.getDayData(req, res); }
    }
};
