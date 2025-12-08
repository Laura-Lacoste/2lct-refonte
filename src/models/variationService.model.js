import { sequelize } from "../libs/db.js";
import { DataTypes, Model } from "sequelize";

export class VariationService extends Model {}

VariationService.init(
	{
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		wordpress_price:{
			type: DataTypes.STRING,
			allowNull: true,
		},
		development_price:{
			type: DataTypes.STRING,
			allowNull: true,
		},
	},
	{
		sequelize,
		tableName: "variation_service",
	},
);
