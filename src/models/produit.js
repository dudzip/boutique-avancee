const produits = [
  { id: 1, nom: 'Clavier mécanique', prix: 79.9, stock: 12 },
  { id: 2, nom: 'Souris sans fil', prix: 29.9, stock: 30 },
  { id: 3, nom: 'Écran 27"', prix: 249.0, stock: 5 }
];
module.exports = {
  tous: () => produits,
  parId: (id) => produits.find(p => p.id === id)
};
