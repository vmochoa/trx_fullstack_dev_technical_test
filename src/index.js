const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const vehicleRoutes = require('./routes/vehicle');
require('dotenv').config();

const app = express();
app.use(cors());
const port = process.env.PORT || 9000;


//moddleware
app.use(express.json());
app.use('/api',vehicleRoutes)

//routes
app.get('/', (req, res) => {
  res.send('Ruta Inicial Ok');
});

//mongodb conection
mongoose.connect("mongodb+srv://devvochoa:pk3kcxxmtTacAlfr@cluster0.tqz4zpz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(() => console.log("conected to mongodb"))
.catch((err)=> console.log(err));


app.listen(port, () => 
  console.log('Server is running on port '+ port));