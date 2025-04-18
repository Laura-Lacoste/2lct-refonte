import { sequelize } from "../libs/db";
import { DataTypes, Model } from "sequelize";

export class Advantage extends Model {}

Advantage.init(
	{
		name: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
		description: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
	},
	{
		sequelize,
		tableName: "advantage",
	},
);
