import express, { Request, Response } from 'express';
import { getAllStudents, getStudentById, postNewStudent, updateStudentById, deleteStudentById } from '../services/studentService';

//Works
export const getAllStudentsController = async (req: Request, res: Response) => {
  const students = await getAllStudents();
  console.log("From Controller: ", students);
  res.send(students);

};

//works
export const postNewStudentController = (req: Request, res: Response) => {
  const id: string = req.body.id;
  const studentFirstName: string = req.body.studentFirstName;
  const studentLastName: string = req.body.studentLastName;
  const studentEmail: string = req.body.studentEmail;


  const student = {
    id: id,
    studentFirstName: studentFirstName,
    studentLastName: studentLastName,
    studentEmail: studentEmail
  }
  /*
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
    */

  const newStudent = postNewStudent(student);
  res.status(201).send(newStudent);

};

//works
export const getStudentByIdController = async (req: Request, res: Response) => {
  const studentId = req.params.id;
  const getStudent = await getStudentById(studentId);
  res.send(getStudent);
  /*
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
*/
}

//works
export const deleteStudentByIdController = (req: Request, res: Response) => {
  const studentId = req.params.id;
  const getStudent = deleteStudentById(studentId);
  res.status(204).end();
  //console.log(studentId);
  /*
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
  */

}

//works
export const updateStudentByIdController = async (req: Request, res: Response) => {
  const studentId = req.params.id;
  const patchStudent = req.body;
  const update = await updateStudentById(studentId, patchStudent);
  res.status(201).end();
  /*
    try {
      const data = await fetch('http://localhost:3000/students/' + studentId, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "studentFirstName": patchStudent.studentFirstName,
          "studentLastName": patchStudent.studentLastName,
          "studentEmail": patchStudent.studentEmail
        })
      });
      const response = await data.json();
      console.log(response);
      res.status(201).end();
  
    }
    catch (error) {
      console.log("Error message: " + error);
    }
  */
}
