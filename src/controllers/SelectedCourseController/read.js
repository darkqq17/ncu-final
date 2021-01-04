const SelectedCourse = require("./common");
const UserInfo = require("../UserController/common");

async function userselected(ctx) {
  try {
    UserInfo.hasMany(SelectedCourse,
        {
          // foreignkey: 'user_id',
          as: 'SelectedCourse'
        })
    SelectedCourse.belongsTo(UserInfo,
        {
          as: 'UserSelected'
        })
  } catch {

  }
  const UserSelected = await UserInfo.findAll(
      {
        subQuery: false,
        // raw: true,
        attributes: [
          'user_id', 'user_realname', 'UserDepartmentId'
        ],
        include: [
          {
            model: SelectedCourse,
            required: false,
            as: 'SelectedCourse',
            attributes: ['selected_id', 'selection_state', 'course_fk', 'course_score']
          }
        ]
      }
  )

  ctx.body = UserSelected
      ? {
        status: "success",
        data: UserSelected
      }
      : {
        status: "failed",
        data: null
      }
}

module.exports = {
  userselected
};
