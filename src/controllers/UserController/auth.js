const Course = require("./common");

async function authUser(ctx) {
    const currentUser = await Course.findAll({
        where: {
            user_id: ctx.request.body.user_id,
            user_password: ctx.request.body.user_password
        }
    });

    ctx.body = currentUser ? {
        status: "success",
        data: currentUser
    } : {
            status: "failed",
            data: null
        }
}

module.exports = {
    authUser
}