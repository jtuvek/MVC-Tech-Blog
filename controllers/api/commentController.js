// controllers/api/commentController.js
const express = require('express');
const { Comment } = require('../../db/models');
const router = express.Router();
const withAuth = require('../../config/middleware/withAuth');

// Comment creation endpoint (protected)
router.post('/:post_id', withAuth, async (req, res) => {
  try {
    const { text } = req.body;
    const { post_id } = req.params;
    const user_id = req.session.user_id;

    const comment = await Comment.create({ text, user_id, post_id });

    res.status(200).json(comment);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

module.exports = router;
