const { createWorkReport, getWorkReport, getWorkReportByStudentIdCode, createAccommodation, getAccommodationByStudentId, getAllAccommodation } = require('../models/workReportModel');

exports.postWorkReport = async (req, res, next) => {
  try {
    const b = req.body || {};

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

      work_photo_1: b.work_photo_1 || null,
      work_photo_2: b.work_photo_2 || null,

      mentor_firstname: b.mentor_firstname || null,
      mentor_lastname: b.mentor_lastname || null,
    };

    console.log("📦 Payload work_photo_1 length:", payload.work_photo_1?.length);

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

exports.postAccommodation = async (req, res, next) => {
  try {
    const b = req.body || {};

    const payload = {
      student_id: b.student_id,
      firstname: b.firstname,
      lastname: b.lastname,
      department: b.department || null,
      company_name: b.company_name || null,

      address_no: b.address_no || null,
      address_street: b.address_street || null,
      address_soi: b.address_soi || null,
      subdistrict: b.subdistrict || null,
      district: b.district || null,
      province: b.province || null,
      postal_code: b.postal_code || null,

      phone: b.phone || null,
      mobile_phone: b.mobile_phone || null,
      fax: b.fax || null,
      email: b.email || null,

      emergency_address_no: b.emergency_address_no || null,
      emergency_street: b.emergency_street || null,
      emergency_soi: b.emergency_soi || null,
      emergency_subdistrict: b.emergency_subdistrict || null,
      emergency_district: b.emergency_district || null,
      emergency_province: b.emergency_province || null,
      emergency_postal_code: b.emergency_postal_code || null,

      emergency_phone: b.emergency_phone || null,
      emergency_mobile_phone: b.emergency_mobile_phone || null,
      emergency_fax: b.emergency_fax || null,
      emergency_email: b.emergency_email || null,

      latitude: b.latitude || null,
      longitude: b.longitude || null,
      nearby_place: b.nearby_place || null,
    };

    const newData = await createAccommodation(payload);
    return res.status(201).json(newData);
  } catch (err) {
    next(err);
  }
};

exports.getAccommodationController = async (req, res, next) => {
  try {
    const data = await getAllAccommodation();
    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
};

exports.getAccommodationByStudentIdController = async (req, res, next) => {
  try {
    const { student_id } = req.params;
    if (!student_id) {
      return res.status(400).json({ error: "student_id is required" });
    }

    const data = await getAccommodationByStudentId(student_id);
    if (!data) {
      return res.status(404).json({ error: "Accommodation not found" });
    }

    return res.status(200).json(data);
  } catch (err) {
    next(err);
  }
};