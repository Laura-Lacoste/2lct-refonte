import { sequelize } from "../libs/db";
import { DataTypes, Model } from "sequelize";

export class DetailVariationService extends Model {}

DetailVariationService.init(
    {
        name: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    },
    {
        sequelize,
        tableName: "detail_variation_service",
    },
);
