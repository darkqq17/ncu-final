const Sequelize = require('sequelize');
const db = require('../../database');

const DepartmentInfo = require('../../models/department_info')(db, Sequelize);

module.exports = DepartmentInfo;