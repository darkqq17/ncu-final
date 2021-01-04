const DepartmentRule = require("./common");

async function updateDepartmentRule(ctx) {
    let resp = {};
    await DepartmentRule.update({
        rule_id: ctx.request.body.rule_id,
        department_fk: ctx.request.body.department_fk,
        rule_type: ctx.request.body.rule_type,
        rule_content: JSON.parse(ctx.request.body.rule_content)
    }, {
        where: {
            rule_id: ctx.request.body.rule_id,
        }
    }).then((res) => {
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
        });

    ctx.body = resp;
}

module.exports = {
    updateDepartmentRule
}