const db = require('../config/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const getAllUsers = async () => {
    const result = await db.query('SELECT * FROM users ORDER BY id ASC');

    return result.rows;
}

const loginUser = async (username, password) => {
    const result = await db.query('SELECT * FROM users WHERE username = $1', [username]);

    if (result.rows.length === 0) {
        throw new Error('ไม่พบผู้ใช้งานนี้');
    }

    const user = result.rows[0];

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        throw new Error('รหัสผ่านไม่ถูกต้อง');
    }

    if (!user.isactive) {
        throw new Error('บัญชีนี้ถูกปิดการใช้งาน');
    }

    const token = jwt.sign({ id: user.id }, 'secretkey', { expiresIn: '1d' });

    return { user, token };
}


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


const updateUserStatusDisable = async (id) => {
  const result = await db.query(
    'UPDATE users SET isactive = 0 WHERE id = $1 RETURNING *', 
    [id]
  );
  return result.rows[0]; 
}

const updateUserStatusEnable = async (id) => {
    const result = await db.query(
        'UPDATE users SET isactive = 1 WHERE id = $1 RETURNING *',
        [id]
    );
    return result.rows[0];
}

const deleteUser = async (id) => {
    await db.query('DELETE FROM users WHERE id = $1', [id]);
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    deleteUser,
    updateUserStatusDisable,
    updateUserStatusEnable,
    loginUser
};