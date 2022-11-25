/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const questData = [
      {
        topicId: 1, question: 'Кто убьет за логинизацию?', answer: 'Лена', score: 100,
      },
      {
        topicId: 1, question: 'Кто тут мама?', answer: 'Толя', score: 200,
      },
      {
        topicId: 1, question: 'Кто тут папа?', answer: 'Толя', score: 300,
      },
      {
        topicId: 1, question: 'Король вечеринок...', answer: 'Артем', score: 400,
      },
      {
        topicId: 1, question: 'Основал секту...', answer: 'Юра', score: 500,
      },

      {
        topicId: 2, question: 'Если ты не один, то ты...', answer: 'два', score: 100,
      },
      {
        topicId: 2, question: 'Кто в цирке не выступает', answer: 'Лис', score: 200,
      },
      {
        topicId: 2, question: 'Хто ты?', answer: 'Эльбрусовец', score: 300,
      },
      {
        topicId: 2, question: 'Среди вас мафия, кто это?', answer: 'Артем', score: 400,
      },
      {
        topicId: 2, question: 'Кто проживает на дне леса?', answer: 'Лисы', score: 500,
      },

      {
        topicId: 3, question: 'It -это...', answer: 'Оно', score: 100,
      },
      {
        topicId: 3, question: 'IT - это...', answer: 'информатик техноложи', score: 200,
      },
      {
        topicId: 3, question: 'Так, что такое IT?', answer: 'IT', score: 300,
      },
      {
        topicId: 3, question: 'У России два пути: webCAM и ...', answer: 'АЙТИ', score: 400,
      },
      {
        topicId: 3, question: 'Подведем итоги, так что такое IT?', answer: 'компутер саенс', score: 500,
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
