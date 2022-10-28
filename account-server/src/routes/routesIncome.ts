const getIncomeRoutingExpress = require("express");
const incomeRouter = getIncomeRoutingExpress.Router();
const incomeController = require("../controllers/incomeController.js");

incomeRouter.post('/', incomeController.api.insertData);

incomeRouter.get('/', incomeController.api.getAllData);

incomeRouter.delete('/', incomeController.api.deleteAllData);

incomeRouter.put("/id/:id", incomeController.api.modifyDataById);

incomeRouter.delete("/id/:id", incomeController.api.deleteDataById);

incomeRouter.get("/id/:id", incomeController.api.getDataById);

incomeRouter.get("/payyear/:payyear", incomeController.api.getYearData);

incomeRouter.get("/paymonth/:paymonth", incomeController.api.getMonthData);

incomeRouter.get("/payday/:payday", incomeController.api.getDayData);


module.exports = incomeRouter;