const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Topic extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Quest }) {
      Topic.Quest = Topic.hasMany(Quest, { foreignKey: 'topicId' });
    }
  }
  const attributes = {
    title: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING,
    },
  };

  const options = {
    sequelize,
    modelName: 'Topic',
    tableName: 'Topics',
  };

  Topic.init(attributes, options);
  return Topic;
};
