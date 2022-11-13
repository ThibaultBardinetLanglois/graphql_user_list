import { Router, Request } from 'express';
import * as UserServices from "../../../dao/services/user.services";

const userRouter: Router = Router();

userRouter.get('/', UserServices.getAll);
userRouter.post('/', UserServices.create);
userRouter.put('/:id', () => {
  UserServices.updateUser;
}) 
userRouter.delete('/:id', UserServices.deleteUser);

// userRouter.put('/:id/skills', UserServices.updateUserSkills);


export default userRouter;