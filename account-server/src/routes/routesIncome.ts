
const incomeRouter = require("./routesRoot.js");
const incomeController = require("../controllers/incomeController.js");
const incomeUrl = "/api/income";

incomeRouter.post(incomeUrl, incomeController.api.insertData);

incomeRouter.get("/api/income", incomeController.api.getAllData);

incomeRouter.delete(incomeUrl, incomeController.api.deleteAllData);

incomeRouter.put(`${incomeUrl}/id/:id`, incomeController.api.modifyDataById);

incomeRouter.delete(`${incomeUrl}/id/:id`, incomeController.api.deleteDataById);

incomeRouter.get(`${incomeUrl}/id/:id`, incomeController.api.getDataById);

incomeRouter.get(`${incomeUrl}/payyear/:payyear`, incomeController.api.getYearData);

incomeRouter.get(`${incomeUrl}/paymonth/:paymonth`, incomeController.api.getMonthData);

incomeRouter.get(`${incomeUrl}/payday/:payday`, incomeController.api.getDayData);


module.exports = incomeRouter;