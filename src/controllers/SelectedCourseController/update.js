const SelectedCourse = require("./common");

async function updateSelectedCourse(ctx) {
  let res = {};
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
        };
      });

  ctx.body = res
}

module.exports = {
  updateSelectedCourse
}