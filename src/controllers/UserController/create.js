const User = require("./common");

async function createUser(ctx) {
  let resp = {};
  await User.create({
    user_id: ctx.request.body.user_id,
    user_realname: ctx.request.body.user_realname,
    user_intro: ctx.request.body.user_intro,
    user_credential: ctx.request.body.user_credential,
    UserDepartmentId: ctx.request.body.UserDepartmentId,
    user_department: ctx.request.body.user_department,
    user_salt: ctx.request.body.user_salt,
    createdAt: ctx.request.body.createdAt,
    isDeleted: ctx.request.body.isDeleted,
    isAdmin: ctx.request.body.isAdmin,
    user_password: ctx.request.body.user_password
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
  createUser
}