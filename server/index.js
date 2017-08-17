const express = require('express');

const app = express();

app.use(express.static('dist'));
const port = process.env.port || 3000;

app.get('*', (req, res) => {
  res.sendFile(`${__dirname}/dist/index.html`);
});
app.listen(port, (err) => {
  if (err) {
    console.log('Error');
  } else {
    console.log('App listening');
  }
});
