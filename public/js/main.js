fetch('/api/produits').then(r => r.json()).then(list => {
  document.getElementById('catalogue').innerHTML =
    list.map(p => `<li>${p.nom} — ${p.prix} €</li>`).join('');
});
