// controllers/homeController.js
const express = require('express');
const { Post, User, Comment } = require('../db/models');
const router = express.Router();

// Home page route
router.get('/', async (req, res) => {
  try {
    const posts = await Post.findAll({
      include: [{ model: User }, { model: Comment, include: [User] }],
      order: [['createdAt', 'DESC']],
    });

    const formattedPosts = posts.map(post => post.get({ plain: true }));

    res.render('home', {
      posts: formattedPosts,
      user: req.session.user_id ? { username: req.session.username } : null,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

module.exports = router;
