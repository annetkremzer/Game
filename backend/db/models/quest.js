const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Quest extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Topic }) {
      Quest.Topic = Quest.belongsTo(Topic, { foreignKey: 'topicId' });
    }
  }

  const attributes = {
    topicId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Topics',
        key: 'id',
      },
    },
    question: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    answer: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    score: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },

  };

  const options = {
    sequelize,
    modelName: 'Quest',
  };

  Quest.init(attributes, options);
  return Quest;
};
