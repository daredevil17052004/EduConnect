import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { sequelize } from './models/index.js'; // Sequelize instance
import userRoutes from './routes/userRoutes.js';

dotenv.config();

const app = express();

// Middleware setup
app.use(express.json());
app.use(cors());

// Authenticate and synchronize database
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connected to SQL Database');

    // Synchronize models with the database
    await sequelize.sync({ alter: true }); // Use `alter: true` to update table structure without data loss
    console.log('Database synchronized successfully');
  } catch (error) {
    console.error('Database connection error:', error);
    process.exit(1); // Exit the process if the database connection fails
  }
})();

// Routes
app.use('/api', userRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
