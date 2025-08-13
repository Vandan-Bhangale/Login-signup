const express = require('express');
const { default: mongoose } = require('mongoose');
const cors = require ('cors');
// const employeeModel = require("./model/user");
const authRoutes = require("./routes/userRoute")

const app = express();
app.use(cors());
app.use(express.json());

app.use(authRoutes)

const URL = "mongodb+srv://admin:admin@login.0w6cmxd.mongodb.net/Login?retryWrites=true&w=majority&appName=Login";

const PORT = 3000;

mongoose.connect(URL).then(
      app.listen(PORT,()=> {
        console.log(`Server is now live on http://localhost${PORT}`);
    })
).catch((err) => {
    console.log("Error while connecting to database: ",err);
})