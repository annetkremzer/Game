const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate({ Ad }) {
      Category.hasMany(Ad, { foreignKey: 'category_id' });
    }
  }
  Category.init({
    title: { type: DataTypes.TEXT, allowNull: false },
  }, {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};
