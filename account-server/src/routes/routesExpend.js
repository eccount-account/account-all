"use strict";
const getExpendRoutingExpress = require("express");
const expendRouter = getExpendRoutingExpress.Router();
const expendController = require("../controllers/expendController.js");
expendRouter.post('/', expendController.api.insertData);
expendRouter.get('/', expendController.api.getAllData); // 삭제?
expendRouter.delete("/id/:id", expendController.api.deleteDataById);
expendRouter.put("/id/:id", expendController.api.modifyDataById);
expendRouter.get("/id/:id", expendController.api.getDataById);
expendRouter.get("/payyear/:payyear", expendController.api.getYearData); //
expendRouter.get("/paymonth/:paymonth", expendController.api.getMonthData); //
expendRouter.get("/payday/:payday", expendController.api.getDayData); //
module.exports = expendRouter;
