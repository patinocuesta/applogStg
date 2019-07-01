const express = require('express');
const router = express.Router();
const ctrlLogs = require('../controllers/logs');

/* Logs pages */
//Define location routes and map them to controller functions
router.get('/', ctrlLogs.homePage);
router.get('/error', ctrlLogs.errorPage);

router.get('/logs', ctrlLogs.logsList);
router.get('/logs/:logid', ctrlLogs.showSingleLog);

router.get('/add', ctrlLogs.addLog);
router.post('/add', ctrlLogs.doAddLog);

router.get('/delete', ctrlLogs.logDeleteList);
router.delete('/delete/:logid', ctrlLogs.doDeleteLog);

module.exports = router;
