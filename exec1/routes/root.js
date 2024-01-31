const express = require('express');

const router = express.Router();
const fs = require('fs');
const path = require('path');
const employeeController = require('../controller/employeeController')

router.route('/employee')
    .get(employeeController.getAllEmployees) //get all
    .post(employeeController.createEmployee)


router.route('/employee/:id')
    .get(employeeController.getEmployee) //get single employee
    .put(employeeController.updateEmployee)
    .delete(employeeController.deleteEmployee)

module.exports = router
