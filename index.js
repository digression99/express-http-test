const express = require('express');

const app = express();
app.set('port', process.env.PORT || 4000);

app.get('/', (req, res) => {
  res.send('hi');
});

// app.get('/path-parameter;*', (req, res) => {
//   console.log('url : ', req.url);
//   res.send('GET /path-parameter;*');
// });

app.get('/path-parameter', (req, res) => {
  console.log('url : ', req.url);
  res.send('GET /path-parameter');
});

const router = express.Router();

router.get('/nested-path;*', (req, res) => {
  console.log('GET /nested-path;*');
  console.log('url : ', req.url);
  res.send('GET /nested-path;*');
});

app.use('/path-parameter2;*', router);

app.listen(app.get('port'), () => {
  console.log('app listening on, ', app.get('port'));
});
