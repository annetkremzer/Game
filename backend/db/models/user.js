const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Song, Like }) {
      User.Song = User.hasMany(Song, { foreignKey: 'userId' });
      User.Like = User.hasMany(Like, { foreignKey: 'userId' });
    }
  }

  const attributes = {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },

    login: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING,
    },

    password: {
      allowNull: false,
      type: DataTypes.STRING,
    },

    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },

    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  };

  const options = {
    sequelize,
    modelName: 'User',
    tabelName: 'Users',
  };
  User.init(attributes, options);
  return User;
};
