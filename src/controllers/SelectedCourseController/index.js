const { userselected } = require("./read");
const { createSelectedCourse } = require("./create");
const { deleteSelectedCourse } = require("./delete");
const { updateSelectedCourse } = require("./update");

module.exports = {
    createSelectedCourse,
    deleteSelectedCourse,
    userselected,
    updateSelectedCourse,
}