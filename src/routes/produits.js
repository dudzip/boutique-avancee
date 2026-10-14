const router = require('express').Router();
const Produit = require('../models/produit');
router.get('/', (req, res) => res.json(Produit.tous()));
router.get('/:id', (req, res) => {
  const p = Produit.parId(Number(req.params.id));
  p ? res.json(p) : res.status(404).json({ erreur: 'Produit introuvable' });
});
module.exports = router;
