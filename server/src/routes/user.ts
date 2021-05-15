import express from 'express';

import * as UserController from '../controller/userController';

const router = express.Router();

/**
 * @route POST user/add
 * @desc Add user 
 */
 router.post('/add',UserController.addUser);

 /**
 * @route GET api/user
 * @desc Get All Users 
 */
router.get('/',UserController.fetchUser);

export {router as userRouter};
