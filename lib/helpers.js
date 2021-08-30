const helpers = {};
const brcypt = require('bcryptjs')

helpers.encryptPassword = async (password) => {
    const salt = await brcypt.genSalt(10);
    const hash = await brcypt.hash(password, salt);
    return hash
}

helpers.matchPassword = async (password, savedPassword) => {
    try{
        return await brcypt.compare(password, savedPassword)
    }catch(e){
        console.log(e);
        return e
    }
}

module.exports = helpers;