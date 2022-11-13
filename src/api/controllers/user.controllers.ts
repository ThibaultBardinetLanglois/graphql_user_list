import express, { Request, Response } from "express";
import User from "../../dao/entities/User.entities";
import * as UserService from "../../dao/services/user.services";

const router = express.Router();

// GET /api/user
export const getAll =  async (request: Request, response: Response) => {
  const users: User[] = await UserService.getAll();
  response.json({message: "users"});
};

// POST /users
// BODY {}
export const createUser = async (request: Request, response: Response) => {
  try {
    const userRequest: User = request.body;
    const userCreated: User = await UserService.create(userRequest);
    response.send(userCreated);
  } catch (e) {
    response.send("ERROR");
  }
};

// PUT /user/4
// BODY {}
export const updateUser = async (request: Request, response: Response) => {
  const userId: number = parseInt(request.params.id);
  const userRequest: User = request.body;
  const userUpdated: User | null = await UserService.updateUser(
    userRequest,
    userId
  );
  response.send(userUpdated);
};

// DELETE /wilders/6
export const deleteUser = async (request: Request, response: Response) => {
  const userId: number = parseInt(request.params.id);
  await UserService.deleteUser(userId);
  response.sendStatus(204);
};

export default router;