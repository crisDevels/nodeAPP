const express = require('express');
const router = express.Router();
let app = express();
app.use(express.json());

app.use(router);

/* testing to use express in new port */
const test = (req, res) => {
  console.log(req.body);
  res.send('test');
} 

router.get('/', test);

app.listen(3000);
console.log('app in http://localhost:3000');