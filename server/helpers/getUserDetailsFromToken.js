const jwt = require('jsonwebtoken')
const UserModel = require('../models/UserModel')

const getUserDetailsFromToken = async (token)=>{
    
    if(!token){
        return {
            message : "session out",
            logout : true,
        }
    }
    console.log(token)
    const decode = await jwt.verify(token,'wretrhtjgdgj')
    console.log("decode")

    const user = await UserModel.findById(decode.id).select('-password')

    return user
}

module.exports = getUserDetailsFromToken