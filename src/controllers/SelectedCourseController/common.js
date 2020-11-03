const Sequelize = require('sequelize');
const db = require('../../database');

const SelectedCourse = require('../../models/selected_course')(db, Sequelize);

module.exports = SelectedCourse;