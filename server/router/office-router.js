const officeRouter = require('express').Router();
const officeCtr = require('../controller/office-controller')

officeRouter.get('/',officeCtr.getAllOffice);
officeRouter.get('/:id',officeCtr.getOfficeById)
officeRouter.get('/',officeCtr.addOffice)
officeRouter.get('/:id',officeCtr.updateOffice)
officeRouter.get('/:id',officeCtr.deleteOffice)
module.exports = officeRouter;