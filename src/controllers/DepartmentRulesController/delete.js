const DepartmentRule = require("./common");

async function deleteDepartmentRule(ctx) {
    let resp = {};
    await DepartmentRule.create({
        rule_id: ctx.request.body.rule_id,
    }).then((obj) => {
        console.log("success.....", obj);
        resp = {
            status: "success",
            data: obj
        }
    }).catch((err) => {
        console.log("error....", err);
        resp = {
            status: "fail",
            data: null
        }
    });

    ctx.body = resp;
}

module.exports = {
    deleteDepartmentRule
}