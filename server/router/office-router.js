const officeRouter = require('express').Router();
const officeCtr = require('../controller/office-controller')

officeRouter.get('/',officeCtr.getAllOffice);
officeRouter.get('/:id',officeCtr.getOfficeById)
officeRouter.post('/',officeCtr.addOffice)
officeRouter.put('/:id',officeCtr.updateOffice)
officeRouter.delete('/:id',officeCtr.deleteOffice)
module.exports = officeRouter;


