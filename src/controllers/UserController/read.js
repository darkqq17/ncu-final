const UserInfo = require("./common");

async function readAllUser(ctx) {
    const allUser = await UserInfo.findAll();
    ctx.body = allUser ? {
        status: "success",
        data: allUser
    } : {
            status: "failed",
            data: null
        }
}

module.exports = {
    readAllUser
}