const User = require('../models/userModel');

exports.getUsers = async (req, res) => {
  try {
    const users = await User.getAllUsers();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

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
}

exports.createUser = async (req, res) => {
  try {
    const { username, password, firstname, lastname, status, isactive } = req.body;
    const user = await User.createUser(username, password, firstname, lastname, status, isactive);
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
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
}

exports.updateUserStatusEnable = async (req, res) => {
  try {
    const { id } = req.body;
    const user = await User.updateUserStatusEnable(id);
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

exports.deleteUser = async (req, res) => {
  try {
    await User.deleteUser(req.params.id);
    res.json({ message: 'User deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};