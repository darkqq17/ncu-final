const SelectedCourse = require("../SelectedCourseController/common");
const UserInfo = require("../UserController/common");



UserInfo.hasMany(SelectedCourse,
    {
        // foreignkey: 'user_id',
        as: 'SelectedCourse'
    })
SelectedCourse.belongsTo(UserInfo,
    {
        as: 'UserSelected'
    })

async function userselected(ctx) {

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
                    attributes: ['selection_state', 'course_fk', 'course_score']
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
