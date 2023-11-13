// db/models/Post.js
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../connection');

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
    // Add any other fields you need, such as userId for the association
  },
  {
    sequelize,
    modelName: 'post',
  }
);

module.exports = Post;
