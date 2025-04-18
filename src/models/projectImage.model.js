import { sequelize } from "../libs/db";
import { DataTypes, Model } from "sequelize";

export class ProjectImage extends Model {}

ProjectImage.init(
	{
		image: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
	},
	{
		sequelize,
		tableName: "project_image",
	},
);