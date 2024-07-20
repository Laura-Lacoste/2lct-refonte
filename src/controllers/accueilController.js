const accueilPage = (req, res) => {
res.status(200).render("pages/accueil");
}

module.exports = {accueilPage};