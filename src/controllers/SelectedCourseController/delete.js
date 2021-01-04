const SelectedCourse = require("./common");

async function deleteSelectedCourse(ctx) {
    let res = {};
    await SelectedCourse.destroy({
        where: {
            selected_id: ctx.request.body.selected_id,
            userInfoUserid: ctx.request.body.userInfoUserid
        }
    })
        .then((resp) => {
            res = {
                status: "success",
                data: resp
            }
        })
        .catch((err) => {
            res = {
                status: "fail",
                data: err
            }
        });

    ctx.body = res

}

module.exports = {
    deleteSelectedCourse
}