const User = require("./common");

async function updateUser(ctx) {
    let resp = {};
    await User.update({
        user_id: ctx.request.body.user_id,
        user_realname: ctx.request.body.user_realname,
        user_credential: ctx.request.body.user_credential,
        user_department: ctx.request.body.user_department,
        user_intro: ctx.request.body.user_intro,
        user_salt: ctx.request.body.user_salt,
        createdAt: ctx.request.body.createdAt,
        isDeleted: ctx.request.body.isDeleted,
        isAdmin: ctx.request.body.isAdmin,
        user_password: ctx.request.body.user_password
    }, {
        where: {
            user_id: ctx.request.body.user_id
        }
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

    ctx.body = resp
}

module.exports = {
    updateUser
}