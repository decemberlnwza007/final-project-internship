const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

router.get('/student_department/it', studentController.GetStudentByDepartments);
router.get('/student_department/mecha', studentController.GetStudentByDepartmentsMecha);

module.exports = router;