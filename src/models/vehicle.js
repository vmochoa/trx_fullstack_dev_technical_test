const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema({
  placa: {
    type: String,
    required: true,
  },
  numero_economico: {
    type: String,
    required: true,
  },
  vim: {
    type: String,
    required: true,
  },
  tipo: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    required: true,
  },
  asientos: {
    type: Number,
    required: true,
  },
  seguro: {
    type: String,
    required: true,
  },
  segure_numebr: {
    type: String,
    required: true,
  },
  BRAND: {
    type: String,
    required: true,
  },
  MODEL: {
    type: String,
    required: true,
  },
  YEAR: {
    type: String,
    required: true,
  },
  COLOR: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Vehicle", vehicleSchema);
