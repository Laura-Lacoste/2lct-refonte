import { sequelize } from "../libs/db";
import { DataTypes, Model } from "sequelize";

export class Project extends Model {}

Project.init(
	{
		image: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
		name: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
		slug: {
			type: DataTypes.TEXT,
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
