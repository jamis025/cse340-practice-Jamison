const facultyController = require('../controllers/facultyController'); 

const express = require('express');
const router = express.Router();

router.get('/faculty', facultyController.getFacultyList);

router.get('/faculty/:faculty', facultyController.getFacultyDetails);

module.exports = router;