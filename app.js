//1- Requerimos Express que es una libreria
const express = require('express');
const morgan = require('morgan');
const repairsRoutes = require('./routes/repairs.routes');
const usersRoutes = require('./routes/users.routes');

//2- Iniciamos la aplicación de express en la variable app
const app = express();
app.use(morgan('dev'));
app.use(express.json());

app.use((req, res, next) => {
  console.log('Hello from the middleware! 😎');
  next();
});
app.use(()=>{
  req.rquestTime = newDate();
  next();
});



app.use('/api/v1/repairs', repairsRoutes);
app.use('/api/v1/users', usersRoutes);

module.exports = app;


