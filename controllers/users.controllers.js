const User = require("../models/users.models");
// const ErrorResponse = require("../utils/errorResponse");
// const crypto = require("crypto");
const dc_service = require("../utils/dialcode")
const {check_if_phone_number_exist} = require("../services/users")

const sendToken = (user, statusCode, res) => {
    const token = user.getSignedToken();
    res.status(statusCode).json({
      success: true,
      token,
      userId: user._id,
      email: user.email,
      first_name: user.first_name,
      last_name: user.last_name,
    });
};


exports.register = async (req, res) => {
    const { first_name, last_name, email, password, dialcode, phone_number} = req.body;
    try {
        if (phone_number && !dialcode ) {
            return res.status(403).json({ success: false, message: "if you're adding phone_number, you must also a add dialcode" });
        }

        if(dialcode){
            check_dialcode = await dc_service.verify_dialcode(dialcode)
            if(check_dialcode === false){
                return res.status(403).json({ success: false, message: "this is an invalid dialcode" });
            }
        }
        
        if(phone_number && dialcode){
            check_phone = check_if_phone_number_exist(phone_number, dialcode)
            if(check_phone === true) return res.status(403).json({ success: false, message: "this phone_number and dialcode already exist" });
        }
    
        const user = await User.create({
            first_name,
            last_name,
            email,
            dialcode,
            phone_number,
            password,
        });
        return res.status(200).json({success: true, user})
    } catch (error) {
        res.status(500).json({ success: false, error });
    }
};

exports.login = async (req, res) => {
    const { email, password} = req.body;
  
    try {
        res.status(200).json({success: true})
    } catch (error) {
        res.status(500).json({ success: false, error });
    }
  };