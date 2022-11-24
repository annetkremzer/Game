const router = require('express').Router();
const { Quest } = require('../db/models');

router.get('/', async (req, res) => {
  try {
    const quests = await Quest.findAll({
      include: Quest.Topic,
      raw: true,
    });
    res.json(quests);
  } catch (e) {
    console.log(e.message);
  }
});

module.exports = router;
