const express = require('express');

const pokemonController = require('../controllers/pokemon');

const router = express.Router();

router.get('/pokemon', pokemonController.getpokemon);

router.get('/pokemon-moves', pokemonController.getPokemonMoves);

module.exports = router;