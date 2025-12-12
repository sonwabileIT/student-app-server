import express, { Request, Response } from 'express';
//import session from 'express-session';
import { postUserController } from '../controllers/userController';
import { postNewStudentController } from '../controllers/studentController';

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
router.post('users/register', postUserController);

//router.post('/api/auth/students/register', postNewStudentController);
router.post('/api/auth/students/register', (req: Request, res: Response) => {
  //after post method
  //
  //set session
  //req.session.email = req.body.studentEmail;
  //req.session.password = req.body.password;

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
