require('dotenv').config();
const path = require('path');


const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
const Router = require('./src/routers/router');


app.set('view engine', 'ejs');
app.set('views', ('./src/views'));

app.use(express.static('public'));

const securedPathToViews = path.join(__dirname, 'src/views');
app.set('views', securedPathToViews);

const securedPathToAssets = path.join(__dirname, 'public');
app.use(express.static(securedPathToAssets));


app.listen(port, () => {
  console.log(`Example app listening on port ${process.env.BASE_URL}:${port}`)
})

app.use(Router);

app.use ((req, res) => {
  res.status(404).render("pages/404");
})