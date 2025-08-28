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
  getWorkReportByStudentIdCode
};
