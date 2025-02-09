import { DataTypes } from "sequelize";
import { sequelize } from "./index.js";

const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: 'users', // Explicitly specify the table name
    timestamps: true, // Adds `createdAt` and `updatedAt` fields
});

export default User;