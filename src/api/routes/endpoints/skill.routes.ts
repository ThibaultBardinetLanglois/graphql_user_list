import { Router } from 'express';
import * as SkillServices from "../../../dao/services/skill.services";

const skillRouter: Router = Router();

skillRouter.get('/', SkillServices.getAll);
skillRouter.post('/', SkillServices.create);
skillRouter.put('/:id', () => {
  SkillServices.update;
} );
skillRouter.delete('/:id', SkillServices.deleteSkill);


export default skillRouter;