// koa-router
const Router = require("koa-router");
// Our Controllers
const DepartmentController = require("../controllers/DepartmentController");
const UserController = require("../controllers/UserController");
const DepartmentruleController = require("../controllers/DepartmentRulesController");
const CourseController = require("../controllers/CourseController");
const SelectedCourseController = require("../controllers/SelectedCourseController")

const router = new Router({
  prefix: "/api",
});

// DepartmentInfo
router
  .get("/department/read", DepartmentController.readAllDepartment)
  .put("/department/create", DepartmentController.createDepartment)
  .put('/departmemt/delete', DepartmentController.deleteDepartment)
  .patch('/departmemt/update', DepartmentController.updateDepartment)

// CourseInfo
router
  .post('/course/create', CourseController.createCourse)
  .get('/course/read', CourseController.readAllCourse)
  .put('/course/update', CourseController.updateCourse)
  .put('/course/delete', CourseController.deleteCourse)

// UserInfo
router
  .put('/user/create', UserController.createUser)
  .patch('/user/update', UserController.updateUser)
  .delete('/user/delete', UserController.deleteUser)
  .post('/user/login', UserController.authUser)
  .get("/user/read", UserController.readAllUser)
  
//DepartmentRule
router
  .get("/departmentrule/read", DepartmentruleController.readAllRule)
  .put("/departmentrule/create", DepartmentruleController.createDepartmentRule)
  .put('/departmemtrule/delete', DepartmentruleController.deleteDepartmentRule)
  .patch('/departmemtrule/update', DepartmentruleController.updateDepartmentRule)
  
//SelectedCourse
router
  .get('/selected/read', SelectedCourseController.userselected)
  .put('/selected/create', SelectedCourseController.createSelectedCourse)
  .delete('/selected/delete', SelectedCourseController.deleteSelectedCourse)
  .patch('/selected/update', SelectedCourseController.updateSelectedCourse)

module.exports = router;