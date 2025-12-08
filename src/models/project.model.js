import { sequelize } from "../libs/db.js";
import { DataTypes, Model } from "sequelize";

export class Project extends Model {}

Project.init(
	{
		image: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		slug: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		card_description: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
		short_description: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
		long_description: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
	},
	{
		sequelize,
		tableName: "project",
	},
);
