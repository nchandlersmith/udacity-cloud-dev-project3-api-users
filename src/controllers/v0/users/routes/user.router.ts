import {Router, Request, Response} from 'express';

import {User} from '../models/User';
import {AuthRouter} from './auth.router';

const router: Router = Router();

router.use('/auth', AuthRouter);

router.get('/', async (req: Request, res: Response) => {
  return res.status(400).send({message: 'User id param required and not found.'})
})

router.get('/:id', async (req: Request, res: Response) => {
  const {id} = req.params;
  const item = await User.findByPk(id);
  if (item === null) {
    return res.status(404).send({message: 'User not found.'})
  }
  return res.status(200).send(item);
});

export const UserRouter: Router = router;
