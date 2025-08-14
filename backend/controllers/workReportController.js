const { createWorkReport, getWorkReport, getWorkReportByStudentIdCode } = require('../models/workReportModel');

exports.postWorkReport = async (req, res, next) => {
  try {
    const b = req.body || {};
    const f = req.files || {};

    const payload = {
      student_id_code: b.student_id_code,
      firstname: b.firstname,
      lastname: b.lastname,
      company_name: b.company_name,
      position_title: b.position_title || null,
      position_duties: b.position_duties || null,
      work_matching_course: b.work_matching_course || null,
      other_work: b.other_work || null,
      problem_found: b.problem_found || null,
      solution_method: b.solution_method || null,
      lessons_learned: b.lessons_learned || null,
      work_photo_1: f.work_photo_1?.[0]?.path || null,
      work_photo_2: f.work_photo_2?.[0]?.path || null,
      mentor_firstname: b.mentor_firstname || null,
      mentor_lastname: b.mentor_lastname || null,
    };

    const report = await createWorkReport(payload);
    return res.status(201).json(report);
  } catch (err) {
    next(err);
  }
};
exports.getWorkReportController = async (req, res, next) => {
  try {
    const report = await getWorkReport(req.body);
    res.status(201).json(report);
  } catch (err) {
    next(err);
  }
}

exports.getWorkReportByStudentIdCodeController = async (req, res, next) => {
  try {
    const { student_id_code } = req.params;
    if (!student_id_code) {
      return res.status(400).json({ error: "student_id_code is required" });
    }

    const report = await getWorkReportByStudentIdCode(student_id_code);
    if (!report) {
      return res.status(404).json({ error: "Report not found" });
    }

    if (report.work_photo_1) {
      report.work_photo_1 = `http://localhost:3001/${report.work_photo_1}`;
    }
    if (report.work_photo_2) {
      report.work_photo_2 = `http://localhost:3001/${report.work_photo_2}`;
    }

    return res.status(200).json(report);
  } catch (err) {
    next(err);
  }
};
