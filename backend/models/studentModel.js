const db = require('../config/db');

const getStudentByDepartmentsIT = async () => {
    try {
        const result = await db.query(
            "SELECT * FROM students WHERE department = 'IT'"
        );
        return result.rows;
    } catch (err) {
        console.error(err);
        throw err;
    }
};

const getStudentByDepartmentsMecha = async () => {
    try {
        const result = await db.query(
            "SELECT * FROM students WHERE department = 'Mecha'"
        );
        return result.rows;
    } catch (err) {
        console.error(err);
        throw err;
    }
}

module.exports = { getStudentByDepartmentsIT, getStudentByDepartmentsMecha };