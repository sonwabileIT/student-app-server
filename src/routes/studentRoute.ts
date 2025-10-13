import express, { Request, Response } from 'express'

//const app = express();
const router = express.Router()

//get all students
router.get('/api/students/', async (req: Request, res: Response) => {
  try {
    const students = await fetch('http://localhost:3000/students');
    const response = await students.json()
    console.log(response);
    res.json(response);
  }
  catch (error) {
    console.log("Error message: " + error);
  }
  //const students = fetch('http://localhost:3000/students');
  //res.json(students);
  //res.send("Get all students")

});

router.post('/api/students/', (req: Request, res: Response) => {
  //post
  res.send("Post succeeded!");
  const postStudent = fetch('https://localhost:3000/students', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      "studentFirstName": "Dineo",
      "studentLastName": "Manna",
      "studentEmail": "dineomanna@myedu.co.za"
    }),
  })
});

//delete all students
router.delete('api/students/', (req: Request, res: Response) => {
  //delete all students
})

//get a student
router.get(`/api/students/:id`, async (req: Request, res: Response) => {
  const studentId = req.params.id;
  //console.log(studentId);
  try {
    const findStudent = await fetch('http://localhost:3000/students/' + studentId);
    const result = await findStudent.json();
    console.log(result);
    res.json(result)
  }
  catch (error) {
    console.log("Error message: " + error);
  }
  //res.json(student);
  //res.send("Get a student");
})

//delete a student
router.delete(`/api/students/:id`, (req: Request, res: Response) => {
  const studentToDelete = req.params.id;
  //delete all students
})

//update a student
router.patch(`/api/students/:id`, (req: Request, res: Response) => {

})

export default router;
