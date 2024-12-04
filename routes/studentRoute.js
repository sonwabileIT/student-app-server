import express from 'express';
import { getStudents, getStudentById, postStudent, deleteAllStudents, deleteStudentById} from '../controllers/studentController.js';


const router = express.Router();

router.get('/api/students/', getStudents )

router.get('/api/students/:id', getStudentById )

router.post('/api/students', postStudent )

router.delete('/api/students', deleteAllStudents )

router.delete('/api/students/:id', deleteStudentById )

export default router