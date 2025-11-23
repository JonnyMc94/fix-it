import { Model, Column, DataType, Table, PrimaryKey, HasMany } from "sequelize-typescript";
import type { Products } from '../types/Products.ts'

@Table({
    tableName: "products",
    timestamps: true,
})
export class ProductsModel extends Model<ProductsModel> implements Products {
        @PrimaryKey
        @Column({
                type: DataType.UUID,
                defaultValue: DataType.UUIDV4
        })
        id!: string;

        @Column({
                type: DataType.STRING,
                allowNull: false
        })
        name!: string;

        @Column({
                type: DataType.STRING,
                allowNull: false
        })
        brand!: string;

        @Column({
                type: DataType.STRING,
                allowNull: false
        })
        model_number!: string;

        @Column({
                type: DataType.STRING,
                allowNull: false
        })
        category!: string;

        @Column({
                type: DataType.STRING,
                allowNull: false
        })
        image_url!: string;

        @Column({
                type: DataType.DATE,
                defaultValue: DataType.NOW
        })
        created_at!: Date;

}

