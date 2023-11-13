// config/auth.js
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const { sequelize } = require('../db/connection');

const sess = {
  secret: process.env.SESSION_SECRET,
  cookie: {
    maxAge: 86400000, // 1 day
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

module.exports = sess;
