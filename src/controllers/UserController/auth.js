const Course = require("./common");

async function authUser(ctx) {
  let resp = {};
  await Course.findAll({
    where: {
      user_id: ctx.request.body.user_id,
      user_password: ctx.request.body.user_password
    }
  }).then((obj) => {
    if (obj.length === 0) {
      resp = {
        status: "fail",
        data: "wrong username or password"
      }
    } else {
      console.log("success.....", obj);
      resp = {
        status: "success",
        data: obj
      }
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
  authUser
}