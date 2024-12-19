const express = require('express');
const cors = require("cors");
require("dotenv").config();

const db = require('./models/db')
const app = express();

const PORT = process.env.PORT || 5000;


// import user Router
const userRouter = require("./routes/userRouter")

app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
  res.send('Server is running!');
});



// Handles  endpoints

app.use("/user",userRouter)





app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
