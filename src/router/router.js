// koa-router
const Router = require("koa-router");
// Our Controllers
const DepartmentController = require("../controllers/DepartmentController");
const UserController = require("../controllers/UserController");
const DepartmentruleController = require("../controllers/DepartmentRulesController");
const CourseController = require("../controllers/CourseController");
// const { a, b, c } = require() => a b c
// const f = require() => f.a f.b f.c

// http header contains '/api'
const router = new Router({
  prefix: "/api",
});

// DepartmentInfo
router
  .get("/department/all", DepartmentController.readAllDepartment)
  .put("/department", DepartmentController.createDepartment);

// CourseInfo
router
  .post('/course/create', CourseController.createCourse)
  .get('/course/read', CourseController.readAllCourse)
  .put('/course/update', CourseController.updateCourse)
  .put('/course/delete', CourseController.deleteCourse)
  .get('/course/findall', CourseController.findallCourse)

// UserInfo
router
  .put('/user', UserController.createUser)
  .patch('/user', UserController.updateUser)
  .delete('/user/delete', UserController.deleteUser)
  .post('/login', UserController.authUser)
  
//DepartmentRule
router
  .get("/departmentrule/all", DepartmentruleController.readAllRule)
  .get("/departmentrule/user/rule", DepartmentruleController.check);

module.exports = router;