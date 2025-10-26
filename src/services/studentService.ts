import Student from '../models/studentModel';

//works
export async function getAllStudents() {
  try {
    const students = await fetch('http://localhost:3000/students');
    const response = await students.json();
    if (response.length !== 0) {
      console.log("From Service: ", response);
    } else {
      console.log('There are no students');
    }
    return response;
  }
  catch (error) {
    console.log("Error message: " + error);
  }

};

//works
export function postNewStudent(student: Student) {
  try {

    const postStudent = fetch('http://localhost:3000/students', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "id": student.id,
        "studentFirstName": student.studentFirstName,
        "studentLastName": student.studentLastName,
        "studentEmail": student.studentEmail
      }),
    });
    //res.status(201).end();
  }
  catch (error) {
    console.log("Error message: " + error);
  }

}

//works
export async function getStudentById(id: string) {
  if (id !== null) {

    try {
      const findStudent = await fetch('http://localhost:3000/students/' + id);
      const result = await findStudent.json();
      console.log(result);
      return result;
    }
    catch (error) {
      console.log("Error message: " + error);
    }
  } else {
    console.log('User does not exist.');
  }

}

//works
export async function updateStudentById(id: string, student: Student) {
  try {
    const data = await fetch('http://localhost:3000/students/' + id, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "studentFirstName": student.studentFirstName,
        "studentLastName": student.studentLastName,
        "studentEmail": student.studentEmail
      })
    });
    const response = await data.json();
    console.log(response);
    //res.status(201).end();

  }
  catch (error) {
    console.log("Error message: " + error);
  }

}

//works
export function deleteStudentById(id: string) {
  try {
    const deleteStudent = fetch('http://localhost:3000/students/' + id, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      }
    });
    //res.status(204).end();
  } catch (error) {
    console.log('Error message: ' + error);
  }

}
