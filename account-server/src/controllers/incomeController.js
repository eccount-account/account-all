"use strict";
const incomeGetController = require("./mainController.js");
const incomeGetApi = new incomeGetController("income");
module.exports = {
    api: {
        insertData: incomeGetApi.insertData,
        getAllData: incomeGetApi.getAllData,
        deleteAllData: incomeGetApi.deleteAllData,
        modifyDataById: incomeGetApi.modifyDataById,
        deleteDataById: incomeGetApi.deleteDataById,
        getDataById: incomeGetApi.getDataById,
        getYearData: incomeGetApi.getYearData,
        getMonthData: incomeGetApi.getMonthData,
        getDayData: incomeGetApi.getDayData
    }
};
