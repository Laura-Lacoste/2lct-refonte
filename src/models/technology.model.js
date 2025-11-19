import { sequelize } from "../libs/db.js";
import { DataTypes, Model } from "sequelize";

export class Technology extends Model {}

Technology.init(
	{
		icon: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
		name: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
	},
	{
		sequelize,
		tableName: "technology",
	},
);
