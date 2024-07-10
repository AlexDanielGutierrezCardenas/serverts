import { Router, response } from 'express';
import { request } from 'http';

const usersRouter = Router();

usersRouter.get('/', (request, response) => {
  return response.json("OK");
});

export default usersRouter;