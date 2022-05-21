const UserModel = require('../models/users.models');

exports.check_if_phone_number_exist = async (phone_number, dialcode) => {
    let phone_number_exist = false
    const user = await UserModel.findOne({ phone_number, dialcode})
    if(user) return phone_number_exist = true
    return phone_number_exist = false
};