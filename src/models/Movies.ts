import { DataTypes, Model, UUIDV4 } from "sequelize";
import sequelize from "../config/database";

class Movies extends Model {
  public id!: string;
  public title!: string;
  public description!: string;
  public releasedDate!: string;
}

Movies.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    releasedDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Movies",
  }
);

export default Movies;
