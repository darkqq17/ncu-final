const DepartmentRule = require("./common");
const SelectedCourse = require("../SelectedCourseController/common");
const UserInfo = require("../UserController/common");
const DepartmentInfo = require("../DepartmentController/common");
const sequelize = require("../../database");
const selected_course = require("../../models/selected_course");
require("../../database.js");
// const fs = require("fs");


async function check() {
  switch (rule) {
    case "All_PASS": {
      return course.filter(
        (courseID) => UserInfo.getCourseScore(courseID) < 60
      );
    }
    case "HAS_SELECTED": {
      return course.filter(
        (courseID) => UserInfo.getCourseScore(courseID) !== -1
      );
    }
  }
}

DepartmentInfo.hasMany(UserInfo,
  {
    // foreignkey: 'user_id',
    as: 'Department'
  })
UserInfo.belongsTo(DepartmentInfo,
  {
    as: 'User'
  })

  DepartmentInfo.hasOne(DepartmentRule,
    {
      // foreignkey: 'user_id',
      as: 'Rule'
    })
  DepartmentRule.belongsTo(DepartmentInfo,
    {
      as: 'Department'
    })





async function userdepartment(ctx) {

  const UserDEP = await UserInfo.findAll(
    {
      subQuery: false,
      // raw: true,
      attributes: [
        'user_id', 'user_realname'
      ],
      include: [
        {
          model: DepartmentInfo,
          required: false,
          as: 'User',
          attributes: ['department_name'],
          include: [
            {
              model: DepartmentRule,
              required: false,
              as: 'Rule',
              attributes: ['rule_type','rule_content']
            }
          ]
        },
      ]
    }
  )

  ctx.body = UserDEP
    ? {
      status: "success",
      data: UserDEP
    }
    : {
      status: "failed",
      data: null
    }
}
// async function selectedcourseuser(ctx) {
//   db.user
//     .findAll({
//       include: [{ model: db.selectedcourse }],
//     })
//     .then((user) => {
//       const resObj = user.map((user) => {
//         //tidy up the user data
//         return Object.assign(
//           {},
//           {
//             user_id: user.user_id,
//             username: user.user_realname,
//             department: user.user_department,
//             selectedcourse: user.selectedcourse.map((selectedcourse) => {
//               return Object.assign(
//                 {},
//                 {
//                   selection_id: selectedcourse.selection_id,
//                   selected_user: selectedcourse.selected_user,
//                   course_fk: selectedcourse.course_fk,
//                   course_score: selectedcourse.course_score,
//                 }
//               );
//             }),
//           }
//         );
//       });
//     });
//   ctx.body(resObj);
// }



//1 source  =>1 target        target  is the model that contains a foreign id/key).

/*const users = await DepartmentRule.findAll({ include : Course });
console.log(JSON.stringify(users, null, 2));
*/

module.exports = {
  userdepartment,
  check,
};



/*const newDepartment = {
    "rule" : "required",
    "course" : ["IM1234"]
}

function writeJson(newDepartment) {
    //先將原本的 json 檔讀出來
    fs.readFile('../../userInfo.json', function (err, userInfo) {
        if (err) {
            return console.error(err);
        }
 //將二進制數據轉換為字串符
        var user = userInfo.toString();
 //將字符串轉換為 JSON 對象
        user = JSON.parse(user);
 //將傳來的資訊推送到數組對象中
        user.userInfo.push(newDepartment);
        user.total = user.userInfo.length;
        console.log(user.userInfo);

 //因為寫入文件（json）只認識字符串或二進制數，所以需要將json對象轉換成字符串
        var str = JSON.stringify(user);
 //將字串符傳入您的 json 文件中
        fs.writeFile('./userInfo.json', str, function (err) {
            if (err) {
                console.error(err);
            }
            console.log('Add new department to userInfo...')
        })
    })
}

*/