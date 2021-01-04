const Department = require("./common");

async function createDepartment(ctx) {
    await Department.create({
        department_id: ctx.request.body.department_id,
        department_name: ctx.request.body.department_name,
        department_semester: ctx.request.body.department_semester,
    })

    ctx.body = createDepartment
        ? {
            status: "success",
            data: createDepartment
        }
        : {
            status: "fail",
            data: null
        }
}


module.exports = {
    createDepartment
}