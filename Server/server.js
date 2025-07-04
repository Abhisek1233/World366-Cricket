import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './config/database.js';
// import allRoutes from './routes/allRoutes.js'; 
// import errorHandler from './middleware/errorHandler.js';

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// app.use('/api', allRoutes);


app.get('/', (req, res) => {
  res.send('🚀 Server is running...');
});

// app.use(errorHandler);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});
