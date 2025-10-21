import express, { Request, Response } from 'express';
import { getAllUsersService, postUserService, getUserByIdService, updateUserByIdService, deleteUserByIdService } from '../services/userService';

export const getAllUsersController = async (req: Request, res: Response) => {
  const users = await getAllUsersService();
  console.log("From Controller: ", users);
  res.send(users);
};

//works
export const postUserController = (req: Request, res: Response) => {
  const newUser = req.body;
  const userService = postUserService(newUser);
  res.status(201).end();
};

export const getUserByIdController = async (req: Request, res: Response) => {
  const getUserId = req.params.id;
  const user = await getUserByIdService(getUserId);
  res.send(user).end();
};

export const updateUserByIdController = async (req: Request, res: Response) => {
  const getUserId = req.params.id;
  const patchUser = req.body;
  const userService = await updateUserByIdService(getUserId, patchUser);
  console.log("From Controller: ", userService)
  res.send(userService).end();
};

//works
export const deleteUserByIdController = (req: Request, res: Response) => {
  const getUserId = req.params.id;
  const deleteUser = deleteUserByIdService(getUserId);
  res.status(204).end();
};
