import { Model, Column, DataType, Table, PrimaryKey, HasMany } from "sequelize-typescript";
import type { Fix } from '../types/Fix.ts'

@Table({
    tableName: "fixes",
    timestamps: true,
})
export class FixesModel extends Model<FixesModel> implements Fix {
        @PrimaryKey
        @Column({
                type: DataType.UUID,
                defaultValue: DataType.UUIDV4
        })
        id!: string;

        @Column({
                type: DataType.UUID,
                allowNull: false
        })
        product_id!: string;

        @Column({
                type: DataType.STRING,
                allowNull: false
        })
        title!: string;

        @Column({
                type: DataType.STRING,
                allowNull: false
        })
        description!: string;

        @Column({
                type: DataType.STRING,
                allowNull: false
        })
        steps!: string;

        @Column({
                type: DataType.STRING,
                allowNull: false
        })
        source_type!: string;

        @Column({
                type: DataType.BOOLEAN,
                allowNull: false
        })
        verified!: boolean;

        @Column({
                type: DataType.DATE,
                defaultValue: DataType.NOW
        })
        created_at!: Date;

        @Column({
                type: DataType.DATE,
                defaultValue: DataType.NOW
        })
        updated_at!: Date;

}

