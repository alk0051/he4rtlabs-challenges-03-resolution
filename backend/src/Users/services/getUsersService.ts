import db from '../../databases/connection';
import User from '../models/user_model';
import { Response } from 'express';

const getUsers = (req: any, res: any) => 
{
  db().all('SELECT * FROM users;', (err: Error, users: User[]) => {
    if (err) {
      throw err;
    }

    return res.send(users);
  }
);

  db().close();
}

export default getUsers;