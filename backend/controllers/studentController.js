const Student = require('../models/studentModel');

exports.GetStudentByDepartments = async (req, res) => {
    try {
        const student = await Student.getStudentByDepartmentsIT();

        res.json(student);
    } catch(error) {
        console.error(error);
    }
}

exports.GetStudentByDepartmentsMecha = async(req, res) => {
    try {
        const student = await Student.getStudentByDepartmentsMecha();

        res.json(student);
    } catch (error) {
        console.error(error);
    }
}