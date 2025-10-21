import express, { Request, Response } from 'express';
import { getAllUsersService, postUserService, getUserByIdService, updateUserByIdService, deleteUserByIdService } from '../services/userService';

export const getAllUsersController = async (req: Request, res: Response) => {
  /*
  try {
    const data = await fetch('http://localhost:3000/users');
    const response = await data.json();
    res.send(response);
    console.log(response);
  }
  catch (error) {
    console.log('Error Message: ' + error);
  }
*/
  const users = await getAllUsersService();
  console.log("From Controller: ", users);
  res.send(users);
};

//works
export const postUserController = (req: Request, res: Response) => {
  const newUser = req.body;
  const userService = postUserService(newUser);
  res.status(201).end();
  /*
  try {
    const addUser = fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "id": newUser.id,
        "firstName": newUser.firstName,
        "lastName": newUser.lastName,
        "email": newUser.email,
        "role": newUser.role
      })
    })
    res.status(201).end();
  }
  catch (error) {
    console.log('Error message: ' + error);
  }
*/
};

export const getUserByIdController = async (req: Request, res: Response) => {
  const getUserId = req.params.id;
  const user = await getUserByIdService(getUserId);
  res.send(user).end();
  /*
  try {
    const getUser = await fetch('http://localhost:3000/users/' + getUserId);
    const response = await getUser.json();
    res.send(response);
    console.log(response);
  }
  catch (error) {
    console.log('Error message: ' + error);
  }
*/
};

export const updateUserByIdController = async (req: Request, res: Response) => {
  const getUserId = req.params.id;
  const patchUser = req.body;
  const userService = await updateUserByIdService(getUserId, patchUser);
  console.log("From Controller: ", userService)
  res.send(userService).end();
  /*
  try {
    const updateUser = await fetch('http://localhost:3000/users/' + getUserId, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "firstName": patchUser.firstName,
        "lastName": patchUser.lastName,
        "email": patchUser.email,
        "role": patchUser.role
      })
    });
    const response = await updateUser.json();
    res.status(200).end();
    console.log(updateUser);

  }
  catch (error) {
    console.log("Error message: " + error)
  }
*/
};

//works
export const deleteUserByIdController = (req: Request, res: Response) => {
  const getUserId = req.params.id;
  const deleteUser = deleteUserByIdService(getUserId);
  res.status(204).end();
  /*try {
    const deleteUser = fetch('http://localhost:3000/users/' + getUserId, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    res.status(204).end();

  }
  catch (error) {
    console.log('Error message: ' + error)
    res.end()
  }
*/
};
