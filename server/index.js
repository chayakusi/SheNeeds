const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

// rest of your server code goes here

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
