const express = require("express");
const vehicleSchema = require("../models/vehicle");

const router = express.Router();

//creater vehicle
router.post("/vehicles", (req, res) => {
  const vehicle = vehicleSchema(req.body);
  vehicle
    .save()
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err }));
});

//get all vehicles
router.get("/vehicles", (req, res) => {

  let query = {};
  
  for (let param in req.query) {
    query[param] = req.query[param];
  }

  vehicleSchema
    .find(query)
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err }));
});

//get a vehicles
router.get("/vehicles/:id", (req, res) => {
  const { id } = req.params;
  vehicleSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err }));
});

//update a vehicles
router.put("/vehicles/:id", (req, res) => {
  const { id } = req.params;
  const {
    placa,
    numero_economico,
    vim,
    asientos,
    seguro,
    BRAND,
    MODEL,
    YEAR,
    COLOR,
  } = req.body;
  vehicleSchema
    .updateOne(
      { _id: id },
      {
        $set: {
          placa,
          numero_economico,
          vim,
          asientos,
          seguro,
          BRAND,
          MODEL,
          YEAR,
          COLOR,
        },
      }
    )
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err }));
});

//delete a vehicles
router.delete("/vehicles/:id", (req, res) => {
  const { id } = req.params;
  vehicleSchema
    .deleteOne({ _id: id })
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err }));
});

module.exports = router;
