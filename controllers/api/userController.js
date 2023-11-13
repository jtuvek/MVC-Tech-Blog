// controllers/api/userController.js
const express = require('express');
const { User } = require('../../db/models');
const router = express.Router();

// User registration endpoint
router.post('/signup', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.create({ username, password });
    req.session.save(() => {
      req.session.user_id = user.id;
      req.session.username = user.username;
      req.session.loggedIn = true;
      res.status(200).json(user);
    });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// User login endpoint
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ where: { username } });

    if (!user || !user.checkPassword(password)) {
      res.status(401).json({ message: 'Incorrect username or password' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = user.id;
      req.session.username = user.username;
      req.session.loggedIn = true;
      res.status(200).json(user);
    });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// User logout endpoint
router.post('/logout', (req, res) => {
  req.session.destroy(() => {
    res.status(204).end();
  });
});

module.exports = router;
