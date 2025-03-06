const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/api/example', (req, res) => {
  res.json({ message: 'Hello, world!' });
});

app.post('/api/example', (req, res) => {
  const data = req.body;
  res.json({ received: data });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});