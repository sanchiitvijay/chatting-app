const express = require('express')
const registerUser = require('../controller/registerUser')
const userDetails = require('../controller/userDetails')
const logout = require('../controller/logout')
const updateUserDetails = require('../controller/updateUserDetails')
const searchUser = require('../controller/searchUser')
const login = require('../controller/login')

const router = express.Router()

//create user api
router.post('/register',registerUser)
//login user details
router.get('/user-details',userDetails)
//logout user
router.get('/logout',logout)
//update user details
router.post('/update-user',updateUserDetails)
//search user
router.post("/search-user",searchUser)
//login
router.post('/login',login)

module.exports = router