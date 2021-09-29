const express = require('express');
const response = require('./responses/response')
const router = express.Router();
let app = express();

app.use(express.json());
app.use(router);

/* testing to use express in new port */
const test = (req, res) => {
  /* console.log(req.query.id);
  console.log(req.body); */
  response.success(req, res, "ok test")
}

const post = (req, res) => {
  /* console.log(req.body);
  console.log(res.header());
  res.header({
    "custom-header": "custom head"
  });*/
  response.success(req, res, "ok publish", 201)
}

router.get('/', test);
router.post('/', post);


/* how extends with estatic files */
app.use('/app', express.static('public'))

app.listen(3000);
console.log('app in http://localhost:3000');