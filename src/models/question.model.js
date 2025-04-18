import { sequelize } from "../libs/db";
import { DataTypes, Model } from "sequelize";

export class Question extends Model {}

Question.init(
	{
		question: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
        answer: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
	},
	{
		sequelize,
		tableName: "question",
	},
);
