const express = require('express');

const app = express();
app.set('port', process.env.PORT || 4000);

app.get('/', (req, res) => {
  res.send('hi');
});

app.listen(app.get('port'), () => {
  console.log('app listening on, ', app.get('port'));
});
