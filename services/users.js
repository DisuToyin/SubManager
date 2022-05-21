const UserModel = require('../models/users_models');

exports.check_if_phone_number_exist = async (phone_number, dialcode) => {
    let phone_number_exist = false
    const user = await UserModel.findOne({ phone_number, dialcode})
    if(user) return phone_number_exist = true
    return phone_number_exist = false
};

exports.find_by_email = async (email) => {
    return await UserModel.findOne({ email }).select("+password");
    
}

exports.check_password = async (user) => {
    const is_match = await user.matchPasswords(user.password);
    console.log(is_match)
    if (is_match) return user
    else return false
}