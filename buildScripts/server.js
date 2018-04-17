import express from 'express';
import path from 'path';
import open from 'open';

const port = 3001;
const app = express();
app.listen(port, function (error) {
  if(error) {
    console.log(error);
  } else {
    open(`http://localhost:${port}`)
  }
});


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});


