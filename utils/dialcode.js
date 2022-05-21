const fs = require('fs');
const { promisify } = require('util');
const readFile = promisify(fs.readFile);


exports.verify_dialcode = async (dial_code) => {
    const dc = await readFile('./dialcode.json', 'utf8');
    const allDialCodes = JSON.parse(dc);
    const dialcode = allDialCodes.find((x) => x.dial_code === dial_code);
    console.log(dialcode)
    if (dialcode) return true
    else return false

};