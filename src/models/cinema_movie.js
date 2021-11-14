"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Cinema_movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Cinema, Movie }) {
      // define association here
      this.belongsTo(Cinema, { foreignKey: "cinemaId" });
      this.belongsTo(Movie, { foreignKey: "movieId" });
    }
  }
  Cinema_movie.init(
    {
      cinemaId: DataTypes.INTEGER,
      movieId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Cinema_movie",
    }
  );
  return Cinema_movie;
};
