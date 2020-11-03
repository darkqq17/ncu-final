const Sequelize = require('sequelize');
const db = require("../../database");

const DepartmentRule = require("../../models/department_rules")(db, Sequelize); 

module.exports = DepartmentRule;