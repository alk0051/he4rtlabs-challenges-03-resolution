import IUser from '../models/user_model';
import db from '../../databases/connection';


const createUser = (user: IUser) => {
  try {
    db().run(`INSERT INTO users (name, email, password) VALUES (?,?,?)`, [user.name, user.email, user.password], async (err: Error) => {
      if (err) {
        throw err;
      }
      else {
        console.log(`${user} created.`)
        await db().close();
        console.log('db connection closed!');
      }
    });
  } catch(err) {
    throw err;
  }
}

export default createUser;