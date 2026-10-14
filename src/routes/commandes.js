const router = require('express').Router();
const commandes = [];
router.get('/', (req, res) => res.json(commandes));
router.post('/', (req, res) => {
  const commande = { id: commandes.length + 1, ...req.body, date: new Date() };
  commandes.push(commande);
  res.status(201).json(commande);
});
module.exports = router;
