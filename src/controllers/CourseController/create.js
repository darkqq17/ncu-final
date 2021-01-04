const Course = require("./common");

async function createCourse(ctx) {
  let resp = {};
  await Course.create({
    course_id: ctx.request.body.course_id,
    course_name: ctx.request.body.course_name,
    course_information: ctx.request.body.course_information,
    course_credit: ctx.request.body.course_credit,
    course_instructor: ctx.request.body.course_instructor,
    course_semester: ctx.request.body.course_semester,
    course_time: ctx.request.body.course_time,
    course_classroom: ctx.request.body.course_classroom,
    course_class_time: ctx.request.body.course_class_time,
    course_limit: ctx.request.body.course_limit,
    course_key: ctx.request.body.course_key,
    course_year: ctx.request.body.course_year
  })
      .then((res) => {
        resp = {
          status: "success",
          data: res
        }
      })
      .catch((err) => {
        console.log(err);
        resp = {
          status: "fail",
          data: null
        }
      })

  ctx.body = resp;

}

module.exports = {
  createCourse
};
