// controllers/dashboardController.js
const express = require('express');
const { Post, User } = require('../db/models');
const router = express.Router();
const withAuth = require('../config/middleware/withAuth');

// Dashboard route (protected)
router.get('/dashboard', withAuth, async (req, res) => {
  try {
    const user = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Post }],
    });

    const formattedUser = user.get({ plain: true });

    res.render('dashboard', {
      user: formattedUser,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

module.exports = router;
