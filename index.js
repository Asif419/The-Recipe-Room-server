const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000

app.use(cors());

app.get('/', (req, res) => {
  res.send('the-recipe-room');
})

app.listen(port, () => {
  console.log(`the recipe room is running on ${port}`)
})