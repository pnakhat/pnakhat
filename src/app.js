const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
const MOCK_USER = { username: 'admin', password: 'password123' };
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === MOCK_USER.username && password === MOCK_USER.password) {
    return res.status(200).json({ message: 'Login successful', token: 'mock-jwt-token' });
  } else {
    return res.status(401).json({ message: 'Invalid username or password' });
  }
});
module.exports = app;
