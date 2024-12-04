import express from 'express';


export const getStudents = (req, res) => {
    res.send("Students list");
}

export const getStudentById = (req, res) => {
    res.send('student number: ' + req.params.id );
}

export const postStudent = (req, res) => {
    const studentName = req.body.studentName;
    const studentLastName = req.body.studentLastName;
    const email = req.body.email;
    const student = {studentName, studentLastName, email}
    res.status(201).send(student)
}

export const deleteAllStudents = (req, res) => {
    res.send("Resources deleted")
}

export const deleteStudentById = (req, res) => {
    res.send("Resource " + req.params.id + " has been deleted.")
}