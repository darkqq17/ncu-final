const Department = require("./common");

async function readAllDepartment(ctx) {
    const allDepartment = await Department.findAll();
    ctx.body = allDepartment ? {
        status: "success",
        data: allDepartment
    } : {
        status: "failed",
        data: null
    }
}

module.exports = {
    readAllDepartment
}