import express, { Request, Response } from 'express';
import { getAllStudentsController, postNewStudentController, getStudentByIdController, deleteStudentByIdController, updateStudentByIdController } from '../controllers/studentController';
//import bodyParser from 'body-parser',

const app = express();
//app.use(express.json());
//app.use(express.urlencoded());
const router = express.Router();


//get all students
//works
router.get('/api/students/', getAllStudentsController);

//post a student
//works
router.post('/api/students/', postNewStudentController);

//delete all students
//not working
//router.delete('/api/students', async (req: Request, res: Response) => {
//delete all students
//  try {
//    const deleteStudents = await fetch('http://localhost:3000/students', {
//      method: 'DELETE'
//    });
//    const response = await deleteStudents.json();
//    console.log(response);
//    if (response.ok) {
//      res.end();
//    }
//    res.end();
//if (response.status === 404) {
//console.log("No content found.");
//res.end();
//}
//  }
//  catch (error) {
//    console.log('Error message: ' + error);
//  }
//})

//get a student
//works
router.get(`/api/students/:id`, getStudentByIdController);

//delete a student
//works
router.delete(`/api/students/:id`, deleteStudentByIdController);

//update a student
//works
router.patch(`/api/students/:id`, updateStudentByIdController);

export default router;
