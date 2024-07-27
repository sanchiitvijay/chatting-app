const UserModel = require("../models/UserModel")
const bcryptjs = require('bcryptjs')

async function registerUser(request,response){
    try {
        const { name, email , password, profile_pic } = request.body

        const checkEmail = await UserModel.findOne({ email })
        console.log("-------------------",request.body)
        if(checkEmail){
            return response.status(400).json({
                message : "Already user exits",
                error : true,
            })
        }


        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);


        const payload = {
            name,
            email,
            profile_pic,
            password : hashedPassword
        }

        const user = new UserModel(payload)
        const userSave = await user.save()
        console.log("-------------------")
        return response.status(201).json({
            message : "User created successfully",
            data : userSave,
            success : true
        })

    } catch (error) {
        return response.status(500).json({
            message : error.message || error,
            error : true
        })
    }
}

module.exports = registerUser