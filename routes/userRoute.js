import express from 'express';
import { getUsers, getUserById, postUser, deleteAllUsers, deleteUserById } from '../controllers/userController.js'


const router = express.Router();

router.get('/api/users', getUsers)

router.get('/api/users/:id', getUserById)

router.post('/api/users', postUser)

router.delete('/api/users', deleteAllUsers)

router.delete('/api/users/:id', deleteUserById )

export default router;