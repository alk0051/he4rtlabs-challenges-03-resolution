import express from 'express';
import connection from './databases/connection';
import routes from './routes/routes';

const app = express();

connection();

app.use(routes);

app.listen(3333);

console.log("listen in 3333...");

