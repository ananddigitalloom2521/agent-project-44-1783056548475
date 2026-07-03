require('dotenv').config();
const express = require('express');
const app = express();
const indexRouter = require('./routes/index');
app.use(express.json());
app.use('/', indexRouter);
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});