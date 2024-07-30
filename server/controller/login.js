const UserModel = require("../models/UserModel")
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

async function login(request,response){
    try {
        const { email, password } = request.body
        console.log("login",request.body)
        
        const user = await UserModel.findOne({email})
        console.log("2-----------------")
        
        if(!user){
            return response.status(400).json({
                message : "user not exit",
                error : true
            })
        }
        console.log("3-----------------",user)
        
        const verifyPassword = await bcryptjs.compare(password,user.password)
        
        if(!verifyPassword){
            return response.status(400).json({
                message : "Please check password",
                error : true
            })
        }
        console.log("4-----------------")
        
        const tokenData = {
            id : user._id,
            email : user.email 
        }
        console.log("5-----------------")
        const token = await jwt.sign(tokenData,'wretrhtjgdgj',{ expiresIn : '7d'})
        
        console.log("6-----------------")
        const cookieOptions = {
            http : true,
            secure : true
        }

        return response.cookie('token',token,cookieOptions).status(200).json({
            message : "Login successfully",
            token : token,
            success :true
        })

    } catch (error) {
        return response.status(500).json({
            message : error.message || error,
            error : true
        })
    }
}

module.exports = login