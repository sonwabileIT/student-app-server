import express, { Request, Response } from 'express';

export const getAllStudentsController = async (req: Request, res: Response) => {
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

};

export const postNewStudentController = (req: Request, res: Response) => {
  const id: string = req.body.id;
  const studentFirstName: string = req.body.studentFirstName;
  const studentLastName: string = req.body.studentLastName;
  const studentEmail: string = req.body.studentEmail;


  const newStudent = {
    id: id,
    studentFirstName: studentFirstName,
    studentLastName: studentLastName,
    studentEmail: studentEmail
  }

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
};

export const getStudentByIdController = async (req: Request, res: Response) => {
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

}

export const deleteStudentByIdController = (req: Request, res: Response) => {
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

}

export const updateStudentByIdController = async (req: Request, res: Response) => {
  const getStudentId = req.params.id;
  const patchStudent = req.body;

  try {
    const data = await fetch('http://localhost:3000/students/' + getStudentId, {
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

}
