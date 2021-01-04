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

// {
//     "selected_id":"3",
//     "Selection_state":"req",
//     "course_fk":"IM1003",
//     "course_score":"95",
//     "userInfoUserid":"106403051"
// }