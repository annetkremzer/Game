/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const questData = [
      {
        topicId: 1, question: 'question1', answer: 'answer1', score: 100,
      },
      {
        topicId: 1, question: 'question2', answer: 'answer2', score: 200,
      },
      {
        topicId: 1, question: 'question3', answer: 'answer3', score: 300,
      },

      {
        topicId: 2, question: 'question4', answer: 'answer4', score: 100,
      },
      {
        topicId: 2, question: 'question5', answer: 'answer5', score: 200,
      },
      {
        topicId: 2, question: 'question6', answer: 'answer6', score: 300,
      },

      {
        topicId: 3, question: 'question7', answer: 'answer7', score: 100,
      },
      {
        topicId: 3, question: 'question8', answer: 'answer8', score: 200,
      },
      {
        topicId: 3, question: 'question9', answer: 'answer9', score: 300,
      },

    ];
    const quests = questData.map((quest) => ({
      ...quest,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));

    await queryInterface.bulkInsert('Quests', quests);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Quests');
  },
};
