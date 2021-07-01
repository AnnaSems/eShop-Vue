const express = require('express')
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');
const path = require('path');

const publicPath = path.join(__dirname, '../public/');
const app = express();

app.use(express.static(publicPath));
app.use(cors());
app.use(bodyParser.json());

app.listen(8081, function () {
  console.log('server is running on port 8080!');
});

app.get('/catalogData', (req, res) => {
  fs.readFile('./database/catalog.json', 'utf8', (err, data) => {
    if (err) {
      console.log(err);
    }
    res.send(data);
  })
});

app.get('/getGoods', (req, res) => {
  fs.readFile('./database/cart.json', 'utf8', (err, data) => {
    res.send(data);
  })
})
app.post('/addToCart', (req, res) => {
  if (err) {
    res.send('{"result": 0}');
  } else {
    fs.readFile('./database/cart.json', 'utf8', (err, data) => {
      const cart = JSON.parse(data);
      const item = req.body;

      cart.push(item);

      fs.writeFile('./database/cart.json', JSON.stringify(cart), (err) => {
        if (err) {
          res.send('{"result": 0}');
        } else {
          res.send('{"result": 1}');
        }
      });
    });
  }
});
