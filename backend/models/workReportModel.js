const db = require('./../config/db');

const getWorkReport = async () => {
  try {
    const query = `SELECT * FROM work_reports`;

    const result = await db.query(query);

    return result.rows;
  } catch (error) {
    console.error(error);
  }
}

const getWorkReportByStudentIdCode = async (student_id_code) => {
  try {
    const query = `SELECT * FROM work_reports WHERE student_id_code = $1 LIMIT 1`;
    const params = [student_id_code];
    const result = await db.query(query, params);
    return result.rows[0] || null;
  } catch (error) {
    console.error("getWorkReportByStudentIdCode error:", error);
    throw error;
  }
};

const createAccommodation = async (payload) => {
  const query = `
    INSERT INTO accommodation_details (
      student_id, firstname, lastname, department, company_name,
      address_no, address_street, address_soi, subdistrict, district, province, postal_code,
      phone, mobile_phone, fax, email,
      emergency_address_no, emergency_street, emergency_soi,
      emergency_subdistrict, emergency_district, emergency_province, emergency_postal_code,
      emergency_phone, emergency_mobile_phone, emergency_fax, emergency_email,
      latitude, longitude, nearby_place
    ) VALUES (
      $1,$2,$3,$4,$5,
      $6,$7,$8,$9,$10,$11,$12,
      $13,$14,$15,$16,
      $17,$18,$19,
      $20,$21,$22,$23,
      $24,$25,$26,$27,
      $28,$29,$30
    ) RETURNING *;
  `;

  const values = [
    payload.student_id, payload.firstname, payload.lastname, payload.department, payload.company_name,
    payload.address_no, payload.address_street, payload.address_soi, payload.subdistrict, payload.district, payload.province, payload.postal_code,
    payload.phone, payload.mobile_phone, payload.fax, payload.email,
    payload.emergency_address_no, payload.emergency_street, payload.emergency_soi,
    payload.emergency_subdistrict, payload.emergency_district, payload.emergency_province, payload.emergency_postal_code,
    payload.emergency_phone, payload.emergency_mobile_phone, payload.emergency_fax, payload.emergency_email,
    payload.latitude, payload.longitude, payload.nearby_place
  ];

  const result = await db.query(query, values);
  return result.rows[0];
};

const getAllAccommodation = async () => {
  const result = await db.query(`SELECT * FROM accommodation_details ORDER BY id DESC`);
  return result.rows;
};

const getAccommodationByStudentId = async (student_id) => {
  const result = await db.query(
    `SELECT * FROM accommodation_details WHERE student_id = $1`,
    [student_id]
  );
  return result.rows[0];
};


const createWorkReport = async (data = {}) => {
  const {
    student_id_code,
    firstname,
    lastname,
    company_name,
    position_title = null,
    position_duties = null,
    work_matching_course = null,
    other_work = null,
    problem_found = null,
    solution_method = null,
    lessons_learned = null,
    work_photo_1 = null,
    work_photo_2 = null,
    mentor_firstname = null,
    mentor_lastname = null,
  } = data;

  console.log("➡️ createWorkReport() received:");
  console.log("student_id_code:", student_id_code);
  console.log("📷 insert length1:", work_photo_1?.length, "length2:", work_photo_2?.length);


  const query = `
    INSERT INTO work_reports (
      student_id_code, firstname, lastname, company_name,
      position_title, position_duties,
      work_matching_course, other_work,
      problem_found, solution_method, lessons_learned,
      work_photo_1, work_photo_2,
      mentor_firstname, mentor_lastname
    ) VALUES (
      $1,$2,$3,$4,
      $5,$6,
      $7,$8,
      $9,$10,$11,
      $12,$13,
      $14,$15
    )
    RETURNING *;
  `;

  const params = [
    student_id_code, firstname, lastname, company_name,
    position_title, position_duties,
    work_matching_course, other_work,
    problem_found, solution_method, lessons_learned,
    work_photo_1, work_photo_2,
    mentor_firstname, mentor_lastname,
  ];

  const result = await db.query(query, params);
  return result.rows[0];
};


module.exports = {
  createWorkReport,
  getWorkReport,
  getWorkReportByStudentIdCode,
  createAccommodation,
  getAccommodationByStudentId,
  getAllAccommodation
};
