const User = require('../models/userModel');

exports.getUsers = async (req, res) => {
  try {
    const users = await User.getAllUsers();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getUser = async (req, res) => {
  try {
    const user = await User.getUserById(req.params.id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const { user, token } = await User.loginUser(username, password);
    res.json({ success: true, user, token });
  } catch (err) {
    res.status(401).json({ success: false, message: err.message });
  }
};

exports.createUser = async (req, res) => {
  try {
    const { username, password, firstname, lastname, status, isactive, student_id } = req.body;
    const user = await User.createUser(username, password, firstname, lastname, status, isactive, student_id);
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.showAllStudent = async (req, res) => {
  try {
    const user = await User.showAllStudent();
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

exports.updateUserController = async (req, res) => {
  try {
    const { id, username, firstname, lastname } = req.body;

    if (!id || !username || !firstname || !lastname) {
      return res.status(400).json({ message: 'กรุณากรอกข้อมูลให้ครบ' });
    }

    const updatedUser = await User.updateUser(id, username, firstname, lastname);

    if (!updatedUser) {
      return res.status(404).json({ message: 'ไม่พบผู้ใช้งานนี้' });
    }

    return res.status(200).json({
      message: 'อัปเดตข้อมูลสำเร็จ',
      data: updatedUser
    });

  } catch (error) {
    console.error('Error updating user:', error);
    return res.status(500).json({ message: 'เกิดข้อผิดพลาดในเซิร์ฟเวอร์' });
  }
};


exports.updateUserStatusDisable = async (req, res) => {
  try {
    const { id } = req.body;
    const user = await User.updateUserStatusDisable(id);
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateUserStatusEnable = async (req, res) => {
  try {
    const { id } = req.body;
    const user = await User.updateUserStatusEnable(id);
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    await User.deleteUser(req.params.id);
    res.json({ message: 'User deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createStudentWorkReportController = async (req, res) => {
  try {
    const result = await User.createStudentWorkReport(req.body);
    res.json({ success: true, result });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

const toNumOrNull = (v) => (v === undefined || v === null || v === '' ? null : Number(v));

const mapFrontendToDB = (b) => ({
  student_code: b.studentId ?? b.student_code ?? null,
  academic_year_th: b.educationYear ?? b.academic_year_th ?? null,

  firstname_th: b.firstname ?? b.firstname_th ?? null,
  lastname_th: b.lastname ?? b.lastname_th ?? null,
  firstname_en: b.firstnameEn ?? b.firstname_en ?? null,
  lastname_en: b.lastnameEn ?? b.lastname_en ?? null,

  major: b.fieldOfStudy ?? b.major ?? null,
  department: b.department ?? null,
  class_year: b.classYear ?? b.class_year ?? null,
  last_term_gpa: b.lastTermGPA ?? b.last_term_gpa ?? null,
  cumulative_gpa: b.cumulativeGPA ?? b.cumulative_gpa ?? null,

  citizen_id: b.citizenId ?? b.citizen_id ?? null,
  idcard_issued_at: b.issuedAt ?? b.idcard_issued_at ?? null,
  idcard_issued_date: b.issueDate ?? b.idcard_issued_date ?? null,
  idcard_expiry_date: b.expireDate ?? b.idcard_expiry_date ?? null,

  ethnicity: b.ethnicity ?? null,
  nationality: b.nationality ?? null,
  religion: b.religion ?? null,

  congenital_disease: b.underlyingDisease ?? b.congenital_disease ?? null,
  regular_medication: b.regularMedication ?? b.regular_medication ?? null,

  phone: b.phone ?? null,
  mobile: b.mobile ?? null,
  fax: b.fax ?? null,
  email: b.email ?? null,

  school_name: b.academic ?? b.school_name ?? 'วิทยาลัยเทคนิคสมุทรสาคร',

  internship_start: b.internship_start ?? b.workStart ?? null,
  internship_end: b.internship_end ?? b.workEnd ?? null,
});


exports.postStudent = async (req, res) => {
  try {
    const mode = (req.query.mode || 'insert').toLowerCase();

    const toIntOrNull = (v) => {
      if (v === undefined || v === null || v === '') return null;
      const n = Number(v);
      return Number.isFinite(n) ? parseInt(n, 10) : null;
    };
    const toNumOrNullStrict = (v) => {
      if (v === undefined || v === null || v === '') return null;
      const n = Number(v);
      return Number.isFinite(n) ? n : null;
    };


    const data = mapFrontendToDB(req.body);

    data.academic_year_th = toIntOrNull(data.academic_year_th);
    data.class_year = toIntOrNull(data.class_year);
    if (data.last_term_gpa !== undefined) data.last_term_gpa = toNumOrNullStrict(data.last_term_gpa);
    if (data.cumulative_gpa !== undefined) data.cumulative_gpa = toNumOrNullStrict(data.cumulative_gpa);

    const need = ['student_code', 'firstname_th', 'lastname_th'];
    const miss = need.filter(k => !data[k]);
    if (miss.length) {
      return res.status(400).json({ success: false, error: 'กรอกข้อมูลไม่ครบ', missing: miss });
    }

    let result;
    if (mode === 'upsert-cid') {
      result = await User.createStudentUpsertByCID(data);
    } else if (mode === 'upsert-code') {
      result = await User.createStudentUpsertByCode(data);
    } else {
      result = await User.createStudentInsert(data);
    }

    res.status(201).json({
      success: true,
      mode,
      inserted: result.inserted !== undefined ? result.inserted : true,
      data: result
    });
  } catch (err) {
    console.error('postStudent error:', err);
    if (err.code === '23505') {
      return res.status(409).json({ success: false, error: 'ข้อมูลซ้ำ (unique constraint)', detail: err.detail || err.message });
    }
    if (err.code === '22P02') {
      return res.status(400).json({ success: false, error: 'รูปแบบข้อมูลไม่ถูกต้อง (ชนิดเลข/วันที่)', detail: err.detail || err.message });
    }
    res.status(500).json({ success: false, error: err.message });
  }
};
