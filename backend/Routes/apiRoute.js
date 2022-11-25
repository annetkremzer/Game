const router = require('express').Router();
const { Topic, Quest } = require('../db/models');

router.get('/', async (req, res) => {
  try {
    const quests = await Quest.findAll({
      raw: true,
    });
    const topics = await Topic.findAll({
      raw: true,
    });
    const data = topics.map((topic) => ({
      title: topic.title,
      quests: quests.filter((quest) => quest.topicId === topic.id),
    }));
    res.json(data);
  } catch (e) {
    console.log(e.message);
  }
});

module.exports = router;
