const { readAllRule } = require("./read");
const { deleteDepartmentRule } = require("./delete");
const { updateDepartmentRule } = require("./update");
const { userdepartment } = require("./create");
const { createDepartmentRule } = require("./create");

module.exports = {
    readAllRule,
    createDepartmentRule,
    deleteDepartmentRule,
    updateDepartmentRule,
    userdepartment
}
/*const User = require("./common");

model.exports = app =>{
    const DataTypes = app.Sequelize;
    
    const Users = app.model.define('user_info', {
        userid: DataTypes.INTEGER(11)
    },
    {timestamps: false });
    const SC = sequelize.define('selected_course', {
        name: DataTypes.STRING,
        size: DataTypes.STRING
    },
    { timestamps: false });

    Users.hasMany(Course);
    Course.belongsTo(Users);
    Users.hasMany(SC, { as: 'Instruments' });
    
    const users = await User.findAll({ include : Course });
    console.log(JSON.stringify(users, null, 2));
}*/