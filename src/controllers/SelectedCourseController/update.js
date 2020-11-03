const SelectedCourse = require("./common");

async function updateSelectedCourse(ctx) {
    SelectedCourse.update({
        selected_id: ctx.request.body.selected_id,
        Selection_state: ctx.request.body.Selection_state,
        course_fk: ctx.request.body.course_fk,
        course_score: ctx.request.body.course_score,
        userInfoUserid: ctx.request.body.userInfoUserid,
    }, {
        where: {
            selected_id: ctx.request.body.selected_id,
        }
    })

    ctx.body = updateSelectedCourse ? {
        status: "success",
        data: SelectedCourse
    } : {
            status: "fail",
            data: null
        }
}

module.exports = {
    updateSelectedCourse
}