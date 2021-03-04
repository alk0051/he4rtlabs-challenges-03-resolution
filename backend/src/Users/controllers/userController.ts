import User from '../models/user_model'
import createUserService from '../services/createUserService';
import path from 'path';
import { hash } from 'bcryptjs';
import { Request } from 'express';
import db from '../../databases/connection';
import fs from 'fs';


export const createUserController = async (req: Request) => {
  const { name, email, password } = await req.body;
  
  fs.readFile(path.join(__dirname, '..', '/assets', 'weakPasswords.txt'), 'utf8', (err, data) => {
    if (err) throw err;

    const compare: Boolean = data.indexOf(password) > -1;

    if (compare === true) {
      throw new Error('Your password is too common');
    } 
  });

  await db().all('SELECT * FROM users;', (err: Error, users: User[]) => {
    if (err) {
      throw err;
    }
    users.map((user) => {
      if (user.email === email) {
        throw new Error('email already registered');
      }
    });
  });

  const hashedPassword = await hash(password, 8);

  const user: User = {
    name,
    email,
    password: hashedPassword
  };

  console.log(user);

  createUserService(user);
}
