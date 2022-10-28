
const expendRouter = require("./routesRoot");
const expendController = require("../controllers/expendController");
const expendUrl = "/api/expend";

expendRouter.post(expendUrl, expendController.api.insertData);

expendRouter.get(expendUrl, expendController.api.getAllData);

expendRouter.delete(`${expendUrl}/id/:id`, expendController.api.deleteDataById);

expendRouter.put(`${expendUrl}/id/:id`, expendController.api.modifyDataById);

expendRouter.get(`${expendUrl}/id/:id`, expendController.api.getDataById);

expendRouter.get(`${expendUrl}/payyear/:payyear`, expendController.api.getYearData);

expendRouter.get(`${expendUrl}/paymonth/:paymonth`, expendController.api.getMonthData);

expendRouter.get(`${expendUrl}/payday/:payday`, expendController.api.getDayData);



module.exports = expendRouter;