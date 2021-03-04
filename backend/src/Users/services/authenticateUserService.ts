import User from '../models/user_model';
import { compare } from 'bcryptjs';
import { Request } from 'express';
import db from '../../databases/connection';


const authenticateUserService = (req: Request) => {
  const { email, password } = req.body;

  db().each(`SELECT email, password FROM users WHERE email="${email}"`, async (err: Error, user: User) => {
    if (err) throw err;

    if (user.email == "") {
      throw new Error('email not found');
    }

    const passwordMatched = await compare(password, user.password);

    if (!passwordMatched) {
      throw new Error('incorrect email/password combination.');
    }

    console.log(user);

    return {
      user
    };
  });
  
}

export default authenticateUserService;