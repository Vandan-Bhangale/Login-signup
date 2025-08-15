const express = require('express');
require('dotenv').config();
const { default: mongoose } = require('mongoose');
const cors = require ('cors');
const session = require('express-session');
const authRoutes = require("./routes/userRoute");

const app = express();
app.use(cors({origin: 'http://localhost:5173', credentials: true}));

app.use(session({
  secret: 'your_secret_key',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false, sameSite: 'lax' }
}));

app.use(express.json());

app.use("/",authRoutes);

const URL = process.env.MONGO_URI;

const PORT = 3000;

mongoose.connect(URL).then(
      app.listen(PORT,()=> {
        console.log(`Server is now live on http://localhost:${PORT}`);
    })
).catch((err) => {
    console.log("Error while connecting to database: ",err);
});