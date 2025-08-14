const db = require('../config/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const getAllUsers = async () => {
  const result = await db.query('SELECT * FROM users ORDER BY id ASC');
  return result.rows;
};

const loginUser = async (username, password) => {
  const result = await db.query('SELECT * FROM users WHERE username = $1', [username]);
  if (result.rows.length === 0) throw new Error('ไม่พบผู้ใช้งานนี้');

  const user = result.rows[0];
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error('รหัสผ่านไม่ถูกต้อง');
  if (!user.isactive) throw new Error('บัญชีนี้ถูกปิดการใช้งาน');

  const token = jwt.sign({ id: user.id }, 'secretkey', { expiresIn: '1d' });
  return { user, token };
};

const getUserById = async (id) => {
  const result = await db.query('SELECT * FROM users WHERE id = $1', [id]);
  return result.rows[0];
};

const createUser = async (username, password, firstname, lastname, status, isactive, student_id) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const result = await db.query(
    'INSERT INTO users (username, password, firstname, lastname, status, isactive, student_id) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
    [username, hashedPassword, firstname, lastname, status, isactive, student_id]
  );
  return result.rows[0];
};

const showAllStudent = async () => {
  try {
    const result = await db.query('SELECT * FROM students');
    
    return result.rows;
  } catch (err) {
    console.error(err)
  }
}

const updateUser = async (id, username, firstname, lastname) => {
  try {
    const result = await db.query(
      `UPDATE users 
       SET username = $1, firstname = $2, lastname = $3
       WHERE id = $4
       RETURNING *`,
      [username, firstname, lastname, id]
    );

    return result.rows[0];
  } catch (error) {
    console.error('Error updating user:', error);
    throw error;
  }
};


const updateUserStatusDisable = async (id) => {
  const result = await db.query('UPDATE users SET isactive = 0 WHERE id = $1 RETURNING *', [id]);
  return result.rows[0];
};

const updateUserStatusEnable = async (id) => {
  const result = await db.query('UPDATE users SET isactive = 1 WHERE id = $1 RETURNING *', [id]);
  return result.rows[0];
};

const deleteUser = async (id) => {
  await db.query('DELETE FROM users WHERE id = $1', [id]);
};


const num = (v) => {
  if (v === undefined || v === null || v === '') return null;
  const n = Number(v);
  return Number.isFinite(n) ? n : null;
};

const baseCols = [
  'student_code', 'academic_year_th',
  'firstname_th', 'lastname_th',
  'firstname_en', 'lastname_en',
  'major', 'department', 'class_year',
  'last_term_gpa', 'cumulative_gpa',
  'citizen_id', 'idcard_issued_at', 'idcard_issued_date', 'idcard_expiry_date',
  'ethnicity', 'nationality', 'religion',
  'congenital_disease', 'regular_medication',
  'phone', 'mobile', 'fax', 'email',
  'school_name', 'internship_start', 'internship_end'
];

const buildParams = (data) => {
  const {
    student_code,
    academic_year_th,
    firstname_th,
    lastname_th,
    firstname_en = null,
    lastname_en = null,
    major = null,
    department = null,
    class_year = null,
    last_term_gpa = null,
    cumulative_gpa = null,
    citizen_id = null,
    idcard_issued_at = null,
    idcard_issued_date = null,
    idcard_expiry_date = null,
    ethnicity = null,
    nationality = null,
    religion = null,
    congenital_disease = null,
    regular_medication = null,
    phone = null,
    mobile = null,
    fax = null,
    email = null,
    school_name = 'วิทยาลัยเทคนิคสมุทรสาคร',
    internship_start = null,
    internship_end = null
  } = data;

  return [
    student_code, num(academic_year_th),
    firstname_th, lastname_th,
    firstname_en, lastname_en,
    major, department, num(class_year),
    num(last_term_gpa), num(cumulative_gpa),
    citizen_id, idcard_issued_at, idcard_issued_date, idcard_expiry_date,
    ethnicity, nationality, religion,
    congenital_disease, regular_medication,
    phone, mobile, fax, email,
    school_name, internship_start, internship_end
  ];
};

const createStudentInsert = async (data) => {
  const params = buildParams(data);
  const placeholders = baseCols.map((_, i) => `$${i + 1}`).join(',');

  const sql = `
    INSERT INTO students (${baseCols.join(',')})
    VALUES (${placeholders})
    RETURNING (xmax = 0) AS inserted, *;
  `;

  const res = await db.query(sql, params);
  return res.rows[0];
};

const createStudentUpsertByCID = async (data) => {
  const params = buildParams(data);
  const placeholders = baseCols.map((_, i) => `$${i + 1}`).join(',');

  const sql = `
    INSERT INTO students (${baseCols.join(',')})
    VALUES (${placeholders})
    ON CONFLICT (citizen_id) DO UPDATE SET
      student_code       = EXCLUDED.student_code,
      academic_year_th   = EXCLUDED.academic_year_th,
      firstname_th       = EXCLUDED.firstname_th,
      lastname_th        = EXCLUDED.lastname_th,
      firstname_en       = EXCLUDED.firstname_en,
      lastname_en        = EXCLUDED.lastname_en,
      major              = EXCLUDED.major,
      department         = EXCLUDED.department,
      class_year         = EXCLUDED.class_year,
      last_term_gpa      = EXCLUDED.last_term_gpa,
      cumulative_gpa     = EXCLUDED.cumulative_gpa,
      idcard_issued_at   = EXCLUDED.idcard_issued_at,
      idcard_issued_date = EXCLUDED.idcard_issued_date,
      idcard_expiry_date = EXCLUDED.idcard_expiry_date,
      ethnicity          = EXCLUDED.ethnicity,
      nationality        = EXCLUDED.nationality,
      religion           = EXCLUDED.religion,
      congenital_disease = EXCLUDED.congenital_disease,
      regular_medication = EXCLUDED.regular_medication,
      phone              = EXCLUDED.phone,
      mobile             = EXCLUDED.mobile,
      fax                = EXCLUDED.fax,
      email              = EXCLUDED.email,
      school_name        = EXCLUDED.school_name,
      internship_start   = EXCLUDED.internship_start,
      internship_end     = EXCLUDED.internship_end,
      updated_at         = now()
    RETURNING (xmax = 0) AS inserted, *;
  `;

  const res = await db.query(sql, params);
  return res.rows[0];
};

const createStudentUpsertByCode = async (data) => {
  const params = buildParams(data);
  const placeholders = baseCols.map((_, i) => `$${i + 1}`).join(',');

  const sql = `
    INSERT INTO students (${baseCols.join(',')})
    VALUES (${placeholders})
    ON CONFLICT (student_code) DO UPDATE SET
      academic_year_th   = EXCLUDED.academic_year_th,
      firstname_th       = EXCLUDED.firstname_th,
      lastname_th        = EXCLUDED.lastname_th,
      firstname_en       = EXCLUDED.firstname_en,
      lastname_en        = EXCLUDED.lastname_en,
      major              = EXCLUDED.major,
      department         = EXCLUDED.department,
      class_year         = EXCLUDED.class_year,
      last_term_gpa      = EXCLUDED.last_term_gpa,
      cumulative_gpa     = EXCLUDED.cumulative_gpa,
      citizen_id         = EXCLUDED.citizen_id,
      idcard_issued_at   = EXCLUDED.idcard_issued_at,
      idcard_issued_date = EXCLUDED.idcard_issued_date,
      idcard_expiry_date = EXCLUDED.idcard_expiry_date,
      ethnicity          = EXCLUDED.ethnicity,
      nationality        = EXCLUDED.nationality,
      religion           = EXCLUDED.religion,
      congenital_disease = EXCLUDED.congenital_disease,
      regular_medication = EXCLUDED.regular_medication,
      phone              = EXCLUDED.phone,
      mobile             = EXCLUDED.mobile,
      fax                = EXCLUDED.fax,
      email              = EXCLUDED.email,
      school_name        = EXCLUDED.school_name,
      internship_start   = EXCLUDED.internship_start,
      internship_end     = EXCLUDED.internship_end,
      updated_at         = now()
    RETURNING (xmax = 0) AS inserted, *;
  `;

  const res = await db.query(sql, params);
  return res.rows[0];
};

const createStudentWorkReport = async (data) => {
  try {
    const query = `
      INSERT INTO student_work_report (
        student_id,
        first_name,
        last_name,
        company_name,
        position,
        duties,
        tasks_matching_competency,
        other_tasks,
        problems,
        solutions,
        lessons_learned,
        work_image_1,
        work_image_2,
        mentor_first_name,
        mentor_last_name
      )
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15)
    `;

    const values = [
      data.student_id,
      data.first_name,
      data.last_name,
      data.company_name,
      data.position,
      data.duties,
      data.tasks_matching_competency,
      data.other_tasks,
      data.problems,
      data.solutions,
      data.lessons_learned,
      data.work_image_1,
      data.work_image_2,
      data.mentor_first_name,
      data.mentor_last_name
    ];

    const result = await db.query(query, values);
    return result;
  } catch (error) {
    console.error("Error inserting student work report:", error);
    throw error;
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  deleteUser,
  updateUserStatusDisable,
  updateUserStatusEnable,
  loginUser,

  createStudentInsert,
  createStudentUpsertByCID,
  createStudentUpsertByCode,

  createStudentWorkReport,

  showAllStudent,

  updateUser
};
