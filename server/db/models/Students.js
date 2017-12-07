const db = require('../index');
const Sequelize = require('sequelize');

const Students = db.define('students', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    },
    gpa: {
      type: Sequelize.FLOAT(1, 1),
      validate: {
        min: 0.0,
        max: 4.0
      }

    }
  }
});

module.exports = Students;
