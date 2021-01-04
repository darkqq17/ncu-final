const { createUser } = require("./create");
const { updateUser } = require('./update');
const { deleteUser } = require('./delete');
const { authUser } = require('./auth');
const { readAllUser } = require('./read');

module.exports = {
    createUser,
    updateUser,
    deleteUser,
    authUser,
    readAllUser
}