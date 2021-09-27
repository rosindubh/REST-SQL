const { Router } = require('express');
const { addUser } = require('./user.controllers');
const { createToken } = require('../middleware');
const userRouter = Router();

userRouter.post('/user', createToken, addUser);

module.exports = userRouter;
