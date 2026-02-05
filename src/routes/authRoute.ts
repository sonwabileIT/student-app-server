import express, { Request, Response } from 'express';
//import session from 'express-session';
import { postUserController } from '../controllers/userController';
import { postNewStudentController } from '../controllers/studentController';
import { postNewStudent } from '../services/studentService';

const app = express();
app.use(express.json());
const router = express.Router();

//test
router.get('/api/auth', (req: Request, res: Response) => {
  res.send("Hello from auth");
  console.log("req.session: ", req.session);
  console.log("req.sessionID: " + req.sessionID);
})
//signup
//router.post('users/register', postUserController);

//router.post('/api/auth/students/register', postNewStudentController);
router.post('/api/auth/students/register', (req: Request, res: Response) => {

  //post student
  const id: string = req.body.id;
  const studentFirstName: string = req.body.studentFirstName;
  const studentLastName: string = req.body.studentLastName;
  const studentEmail: string = req.body.studentEmail;
  const password: string = req.body.password;

  const student = {
    id: id,
    studentFirstName: studentFirstName,
    studentLastName: studentLastName,
    studentEmail: studentEmail,
    password: password
  }

  const newStudent = postNewStudent(student);
  res.status(201).send(newStudent);

  //after post method
  //
  //View session
  req.session.studentID = req.body.id;
  req.session.studentEmail = req.body.studentEmail;
  //console.log("Session: ", req.session);
  //console.log("SessionID: ", req.sessionID);
  //console.log("Session: ", req.session);
  //console.log("SessionID: ", req.sessionID);
})

//login
router.post('/api/auth/users/login', async (req: Request, res: Response) => {
  try {
    res.send("This is from users Login page");
  }
  catch (error) {
    console.error("Error message from loginRoute: ", error);
  }
});

router.post('/api/auth/students/login', async (req: Request, res: Response) => {
  try {
    res.send("This is from students login page");
  }
  catch (error) {
    console.error("Error message from student login: ", error);
  }
});

export default router;
