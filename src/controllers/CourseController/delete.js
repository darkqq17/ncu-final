const Course = require("./common");

async function deleteCourse(ctx) {
  //if (course_id && course_name) {
  let resp = {};
  await Course.destroy({
    where: {
      course_id: ctx.request.body.course_id,
      course_name: ctx.request.body.course_name
    }
  })
      .then((res) => {
        resp = {
          status: "success",
          data: res
        }
      })
      .catch((err) => {
        resp = {
          status: "fail",
          data: null
        }
      })

  ctx.body = resp;

}

module.exports = {
  deleteCourse
}