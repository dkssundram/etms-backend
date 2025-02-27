// backend/src/index.js

const app = require('./app');
const { sequelize } = require('./models/MainModel');
// const { Role, User, Training } = require('./models');

// Root route
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Sync database

// { alter: true }
sequelize.sync().then(() => {
  console.log('Database synced');
  // Start the server
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});

