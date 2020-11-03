/* jshint indent: 2 */

module.exports = function (sequelize, Sequelize) {
  const SelectedCourse = sequelize.define(
    'selected_course',
    {
      selected_id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      user_id: {
        type: Sequelize.INTEGER(11),
        allowNull: false
      },
      selection_state: {
        type: Sequelize.STRING(45),
        allowNull: true
      },
      course_fk: {
        type: Sequelize.STRING(45),
        allowNull: true,
        // references: {
        //   model: {
        //     tableName: 'course_info',
        //   },
        //   key: 'course_id'
        // }
      },
      course_score: {
        type: Sequelize.INTEGER(11),
        allowNull: true
      },
    },
    {
      sequelize,
      tableName: 'selected_course'
    });


  return SelectedCourse;
};