const Course = require("./common");

async function createCourse(ctx) {
    Course.create({
        course_id: ctx.request.body.course_id,
        course_name: ctx.request.body.course_name,
        course_information: ctx.request.body.course_information,
        course_credit: ctx.request.body.course_credit,
        course_instructor: ctx.request.body.course_instructor,
        course_semester: ctx.request.body.course_semester,
        course_time: ctx.request.body.course_time,
        course_classroom: ctx.request.body.course_classroom,
        course_limit: ctx.request.body.course_limit,
        course_key: ctx.request.body.course_key,
        course_year: ctx.request.body.course_year
    })

    ctx.body = createCourse ? {
        status: "success",
        data: createCourse
    } : {
            status: "fail",
            data: null
        }
}
module.exports = { 
    createCourse 
};
