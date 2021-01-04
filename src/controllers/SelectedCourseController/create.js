const SelectedCourse = require("./common");

async function createSelectedCourse(ctx) {
  let res = {};
  await SelectedCourse.create({
    selected_id: ctx.request.body.selected_id,
    Selection_state: ctx.request.body.Selection_state,
    course_fk: ctx.request.body.course_fk,
    course_score: ctx.request.body.course_score,
    userInfoUserid: ctx.request.body.userInfoUserid,
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
  createSelectedCourse
}