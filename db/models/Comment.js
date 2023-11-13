// db/models/Comment.js
const { Model, DataTypes } = require('sequelize');
const sequelize = require('./index');

class Comment extends Model {}

Comment.init(
  {
    text: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    // Add a foreign key for the association with the User model (comment creator)
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user', // 'user' is the table name of the User model
        key: 'id',
      },
    },
    // Add a foreign key for the association with the Post model (commented post)
    postId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'post', // 'post' is the table name of the Post model
        key: 'id',
      },
    },
  },
  {
    sequelize,
    modelName: 'Comment',
  }
);

module.exports = Comment;
