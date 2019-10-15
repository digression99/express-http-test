const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();
app.set('port', process.env.PORT || 4000);

app.use(morgan('dev'));
app.use(express.static(path.resolve(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send('hi');
});

app.listen(app.get('port'), () => {
  console.log('app listening on, ', app.get('port'));
});
