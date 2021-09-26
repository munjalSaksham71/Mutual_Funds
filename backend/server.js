import path from "path";
import  express  from "express";
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js';
import connectDB from './config/db.js'

dotenv.config();

connectDB();

const app = express();
app.use(express.json());

app.use('/api/users', userRoutes);

const __dirname = path.resolve();

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/funds/build')))

    app.get('*', (req, res) =>
      res.sendFile(path.resolve(__dirname, 'funds', 'build', 'index.html'))
    )
  } else {
    app.get('/', (req, res) => {
      res.send('API is running....')
    })
  }

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log("Server Started at Port 5000"))