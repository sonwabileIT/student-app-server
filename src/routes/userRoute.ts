import express, { Request, Response } from 'express';
import { getAllUsersController, getUserByIdController, updateUserByIdController, postUserController, deleteUserByIdController } from '../controllers/userController';

const app = express();
const router = express.Router();

//Get all users
//works
router.get('/api/users', getAllUsersController);

//Add new user
//works
router.post('/api/users', postUserController);


//Get single user
//works
router.get('/api/users/:id', getUserByIdController);


router.patch('/api/users/:id', updateUserByIdController);

//Delete User
//works
router.delete('/api/users/:id', deleteUserByIdController);

export default router;
