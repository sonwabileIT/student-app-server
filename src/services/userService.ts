import User from '../models/userModel';
import bcrypt from 'bcrypt';

//const bcrypt = bcrypt();

//works
export async function getAllUsersService() {
  try {
    const data = await fetch('http://localhost:3000/users');
    const response = await data.json();
    //res.send(response);
    console.log("From Service: ", response);
    return response;
  }
  catch (error) {
    console.log('Error Message: ' + error);
  }
  //return response;

}

//works
export async function postUserService(user: User) {
  try {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(user.password, salt);
    const addUser = await fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "id": user.id,
        "firstName": user.firstName,
        "lastName": user.lastName,
        "email": user.email,
        "password": hashedPassword,
        "role": user.role
      })
    })
    //res.status(201).end();
  }
  catch (error) {
    console.log('Error message: ' + error);
  }

}

//works
export async function getUserByIdService(id: string) {
  try {
    const getUser = await fetch('http://localhost:3000/users/' + id);
    const response = await getUser.json();
    //res.send(response);
    console.log(response);
    return response;
  }
  catch (error) {
    console.log('Error message: ' + error);
  }

}

//works
export async function updateUserByIdService(id: string, user: User) {
  try {
    const updateUser = await fetch('http://localhost:3000/users/' + id, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "firstName": user.firstName,
        "lastName": user.lastName,
        "email": user.email,
        "password": user.password,
        "role": user.role
      })
    });
    const response = await updateUser.json();
    //res.status(200).end();
    console.log("From Service: ", response);
    return response;

  }
  catch (error) {
    console.log("Error message: " + error)
  }

}

//works
export function deleteUserByIdService(id: string) {
  try {
    const deleteUser = fetch('http://localhost:3000/users/' + id, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    //res.status(204).end();

  }
  catch (error) {
    console.log('Error message from Service: ' + error)
    //res.end()
  }

}
