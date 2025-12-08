import { sequelize } from "../libs/db.js";
import { DataTypes, Model } from "sequelize";

export class Technology extends Model {}

Technology.init(
	{
		icon: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{
		sequelize,
		tableName: "technology",
	},
);
