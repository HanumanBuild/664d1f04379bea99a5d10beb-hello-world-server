const express = require('express');
const app = express();

// Use the PORT environment variable or default to 3000
const port = process.env.PORT || 3000;

// Create a single route that responds with 'Hello, World!'
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});