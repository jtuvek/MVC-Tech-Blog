// server.js
const express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const { sequelize } = require('./db/models');
const homeRoutes = require('./controllers/homeController');
const userRoutes = require('./controllers/api/userController');
const commentRoutes = require('./controllers/commentController');
const dashboardRoutes = require('./controllers/dashboardController');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Handlebars setup
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Session setup
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

app.use(session(sess));

// Routes
app.use('/', homeRoutes);
app.use('/api/users', userRoutes);
app.use('/comments', commentRoutes);
app.use('/dashboard', dashboardRoutes);

// Sync Sequelize models and start the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});
