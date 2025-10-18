import express, { Request, Response } from 'express';
//import bodyParser from 'body-parser',

const app = express();
//app.use(express.json());
//app.use(express.urlencoded());
const router = express.Router();


//get all students
//works
router.get('/api/students/', async (req: Request, res: Response) => {
  try {
    const students = await fetch('http://localhost:3000/students');
    const response = await students.json();
    if (response.length !== 0) {
      console.log(response);
      res.json(response);
    } else {
      res.send('There are no students');
    }
  }
  catch (error) {
    console.log("Error message: " + error);
  }
});

//post a student
//works
router.post('/api/students/', (req: Request, res: Response) => {
  const id: string = req.body.id;
  const studentFirstName: string = req.body.studentFirstName;
  const studentLastName: string = req.body.studentLastName;
  const studentEmail: string = req.body.studentEmail;
  //console.log("Saved in req body: " + studentFirstName, studentLastName, studentEmail);


  const newStudent = {
    id: id,
    studentFirstName: studentFirstName,
    studentLastName: studentLastName,
    studentEmail: studentEmail
  }
  //console.log(JSON.stringify(newStudent));
  //res.send(JSON.stringify(newStudent));

  try {

    const postStudent = fetch('http://localhost:3000/students', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "id": newStudent.id,
        "studentFirstName": newStudent.studentFirstName,
        "studentLastName": newStudent.studentLastName,
        "studentEmail": newStudent.studentEmail
      }),
    });
    res.status(201).end();
  }
  catch (error) {
    console.log("Error message: " + error);
  }
});

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
router.get(`/api/students/:id`, async (req: Request, res: Response) => {
  const studentId = req.params.id;
  if (studentId !== null) {

    try {
      const findStudent = await fetch('http://localhost:3000/students/' + studentId);
      const result = await findStudent.json();
      console.log(result);
      res.json(result)
    }
    catch (error) {
      console.log("Error message: " + error);
    }
  } else {
    res.send('User does not exist.');
  }
})

//delete a student
//works
router.delete(`/api/students/:id`, (req: Request, res: Response) => {
  const studentId = req.params.id;
  console.log(studentId);

  try {
    const deleteStudent = fetch('http://localhost:3000/students/' + studentId, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      }
    });
    res.status(204).end();
  } catch (error) {
    console.log('Error message: ' + error);
  }
  //delete all students
})

//update a student
router.patch(`/api/students/:id`, (req: Request, res: Response) => {

})

export default router;
