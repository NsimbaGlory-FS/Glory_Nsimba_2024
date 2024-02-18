const express = require("express");
const router = express.Router();

const Movie = require("../models/movie");

// GET ALL

router.get("/", async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET ONE

router.get("/:id", (req, res) => {
  res.send(`Movie ID: ${req.params.id}`);
});

// POST CREATE

router.post("/", async (req, res) => {
  const movie = new Movie({
    car: req.body.car,
    year: req.body.year,
  });
  try {
    const newMovie = await movie.save();
    res.status(201).json(newMovie);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// PATCH UPDATE

router.patch("/:id", (req, res) => {
  res.send(`Movie ID: ${req.params.id}`);
});

// DELETE

router.delete("/:id", (req, res) => {
  res.send(`Movie ID: ${req.params.id}`);
});

module.exports = router;
