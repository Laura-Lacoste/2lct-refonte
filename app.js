
const express = require('express')
const app = express()
const port = 3000
const accueilRouter = require(`${__dirname}/routers/accueilRouter`);
const aProposRouter = require(`${__dirname}/routers/aProposRouter`);
const prestationsRouter = require(`${__dirname}/routers/prestationsRouter`);
const gestionProjetRouter = require(`${__dirname}/routers/gestionProjetRouter`);
const portfolioRouter = require(`${__dirname}/routers/portfolioRouter`);
const contactRouter = require(`${__dirname}/routers/contactRouter`);

app.set('view engine', 'ejs');
app.set('views', ('./views'));

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.use(accueilRouter);
app.use(aProposRouter);
app.use(prestationsRouter);
app.use(gestionProjetRouter);
app.use(portfolioRouter);
app.use(contactRouter);


app.use ((req, res) => {
  res.status(404).render("pages/404");
})