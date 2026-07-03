const express = require('express');
const router = express.Router();
const indexModel = require('../models/index');
router.get('/', async (req, res) => {
  try {
    const data = await indexModel.getAll();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
router.post('/', async (req, res) => {
  try {
    const data = await indexModel.create(req.body);
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
module.exports = router;