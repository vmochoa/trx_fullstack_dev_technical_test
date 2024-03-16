const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const vehicleRoutes = require('./routes/vehicle');

const app = express();
const port = process.env.PORT || 9000;


//moddleware
app.use(express.json());
app.use('/api',vehicleRoutes)

//routes
app.get('/', (req, res) => {
  res.send('vehiculos');
});

//mongodb conection
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log("conected to mongodb"))
.catch((err)=> console.log(err));


app.listen(port, () => 
  console.log('Server is running on port '+ port));