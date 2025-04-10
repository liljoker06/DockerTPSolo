const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const quotes = [
  "La simplicité est la sophistication suprême.",
  "Le succès est la somme de petits efforts répétés jour après jour.",
  "Fais de ta vie un rêve, et d’un rêve, une réalité."
];

app.get('/quotes', (req, res) => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  res.json({ quote: quotes[randomIndex] });
});

app.listen(port, () => {
  console.log(`Backend is running on port ${port}`);
});
