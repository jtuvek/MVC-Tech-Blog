// db/models/Comment.js
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../connection');

class Comment extends Model {}

Comment.init(
  {
    text: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    // Add any other fields you need, such as userId and postId for associations
  },
  {
    sequelize,
    modelName: 'comment',
  }
);

module.exports = Comment;
