const bcrypt = require('bcrypt');
const userModel = require('../models/userModel');

const login = (req, res) => {
  const { username, password } = req.body;

  userModel.findUserByUsername(username, (err, user) => {
    if (err) return res.status(500).send('เกิดข้อผิดพลาด');
    if (!user) return res.status(401).send('❌ ไม่พบผู้ใช้งาน');

    bcrypt.compare(password, user.password, (err, result) => {
      if (result) {
        req.session.user = user;
        res.send('✅ Login สำเร็จ');
      } else {
        res.status(401).send('❌ รหัสผ่านไม่ถูกต้อง');
      }
    });
  });
};

module.exports = {
  login
};
