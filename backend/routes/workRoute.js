const express = require('express');
const router = express.Router();
const workController = require('../controllers/workReportController');
const upload = require('../middleware/upload')

router.post(
    "/work/report",
    upload.fields([
        { name: "work_photo_1", maxCount: 1 },
        { name: "work_photo_2", maxCount: 1 },
    ]),
    workController.postWorkReport
);
router.post('/work/get', workController.getWorkReportController);
router.get('/work/get_id/:student_id_code', workController.getWorkReportByStudentIdCodeController);

router.post('/accommodation', workController.postAccommodation);
router.get('/accommodation', workController.getAccommodationController);
router.get('/accommodation/:student_id', workController.getAccommodationByStudentIdController);

module.exports = router;