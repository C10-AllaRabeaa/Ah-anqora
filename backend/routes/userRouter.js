const express = require("express")

const userRouter = express.Router()

const {creatUser} = require('../controllers/users')

userRouter.post('/register',creatUser);

module.exports = userRouter;