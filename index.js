const express = require('express');
const app = express();
const fs = require('fs-extra');
const markdownIt = require('markdown-it');
const md = new markdownIt();

// Use the PORT environment variable or default to 3000
const port = process.env.PORT || 3000;

// Create a single route that responds with 'Hello, World!'
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Create a route to serve the documentation
app.get('/docs', async (req, res) => {
  try {
    const data = await fs.readFile('./docs/README.md', 'utf8');
    const htmlContent = md.render(data);
    res.send(htmlContent);
  } catch (err) {
    res.status(500).send('Error reading documentation file');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});