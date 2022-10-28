const expendGetController = require("./mainController.js");
const expendGetApi = new expendGetController("expend");

module.exports = {
    api: {
        insertData: expendGetApi.insertData,
        
        getDataAll: expendGetApi.getDataAll,

        deleteAllData: expendGetApi.deleteAllData,

        modifyDataById: expendGetApi.modifyDataById,
        
        deleteDataById: expendGetApi.deleteDataById,
        
        getYearData: expendGetApi.getYearData,
        
        getMonthData: expendGetApi.getMonthData,
        
        getDayData: expendGetApi.getDayData,
    }
}