const express = require('express');
const bodyParser = require('body-parser');
const todosRouter = require('./routes/todo');
const usersRouter = require('./routes/user');


const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/todos', todosRouter);

app.use('/api/users', usersRouter);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
