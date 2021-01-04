const User = require("./common");

async function deleteUser(ctx) {
  let resp = {};
  await User.destroy({
    where: {
      user_id: ctx.request.body.user_id,
      user_password: ctx.request.body.user_password
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

  ctx.body = resp;

}

module.exports = {
  deleteUser
}