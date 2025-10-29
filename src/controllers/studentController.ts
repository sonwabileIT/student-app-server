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

};

//works
export const getStudentByIdController = async (req: Request, res: Response) => {
  const studentId = req.params.id;
  const getStudent = await getStudentById(studentId);
  res.send(getStudent);
}

//works
export const deleteStudentByIdController = (req: Request, res: Response) => {
  const studentId = req.params.id;
  const getStudent = deleteStudentById(studentId);
  res.status(204).end();
  //console.log(studentId);

}

//works
export const updateStudentByIdController = async (req: Request, res: Response) => {
  const studentId = req.params.id;
  const patchStudent = req.body;
  const update = await updateStudentById(studentId, patchStudent);
  res.status(201).end();
}
