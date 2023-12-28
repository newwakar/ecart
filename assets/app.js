// server.js or app.js
const express = require('express');
const app = express();
const storeOrder = require('./api/store-order'); // Import the store-order.js script

app.use(express.json()); // Enable JSON parsing middleware

// Use the store-order.js script as a middleware for the specified endpoint
app.post('/your-webhook-endpoint', storeOrder);

// Add other routes and server configurations as needed

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
