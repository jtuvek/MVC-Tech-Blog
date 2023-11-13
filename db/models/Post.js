// db/models/Post.js
const { Model, DataTypes } = require('sequelize');
const sequelize = require('./index');

class Post extends Model {}

Post.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    // Add a foreign key for the association with the User model
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user', // 'user' is the table name of the User model
        key: 'id',
      },
    },
  },
  {
    sequelize,
    modelName: 'Post',
  }
);

module.exports = Post;
