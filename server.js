const app = require('./app');
const { db } = require('./database/db');

db.authenticate()

  .then(() =>
    console.log('Database.Authenticated!')
  )
  .catch((error) => console.log(error));

db.sync()
  .then(() => console.log('Database Synce!'))
  .catch((error) => console.log(error));

const port =  4000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
