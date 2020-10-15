const Course = require("./common");

async function findallUser(ctx) {
    console.log(ctx.request.body)
    const findalluser=await Course.findAll({ 
        where: { 
            user_id:ctx.request.body.user_id,
            user_password:ctx.request.body.user_password
        } });
    
    ctx.body = findalluser ? {
        status: "success",
        data: findalluser
    } : {
        status: "failed",
        data: null
    }
   // ctx.redirect('/view/index.html');
}

module.exports = {
    findallUser
}