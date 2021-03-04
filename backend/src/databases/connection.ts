const sqlite3 = require('sqlite3').verbose()

const openConnection = () => {
  let db = new sqlite3.Database('./src/databases/he4rtChall.db', async (err: Error) => {
    if (err) {
      console.log(err);
    }
    console.log('connected to he4rtChall.db')

    await db.run("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR, email VARCHAR, password VARCHAR)");
  });
  
  return db;
}

export default openConnection;
