const Sequelize = require('sequelize');

const sequelize = new Sequelize('toDo_schema', 'root', 'password', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
