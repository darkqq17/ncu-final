const SelectedCourse = require("./common");

async function deleteSelectedCourse(ctx) {
    await SelectedCourse.destroy({
        where: {
            selected_id: ctx.request.body.selected_id,
            userInfoUserid: ctx.request.body.userInfoUserid
        }
    })

    ctx.body = deleteSelectedCourse ? {
        status: "success",
        data: SelectedCourse
    } : {
            status: "fail",
            data: null
        }

}

module.exports = {
    deleteSelectedCourse
}