const Sequelize = require('sequelize');
const sequelize = new Sequelize('todos_db', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.todos = require('./todo')(sequelize, Sequelize);
db.users = require('./user')(sequelize, Sequelize);

module.exports = db;
