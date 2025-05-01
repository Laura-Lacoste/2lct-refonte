import { sequelize } from "../libs/db";
import { DataTypes, Model } from "sequelize";

export class VariationService extends Model {}

VariationService.init(
	{
		name: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
		wordpress_price:{
			type: DataTypes.TEXT,
			allowNull: true,
		},
		development_price:{
			type: DataTypes.TEXT,
			allowNull: true,
		},
	},
	{
		sequelize,
		tableName: "variation_service",
	},
);
