import { Model, Column, DataType, Table, PrimaryKey, HasMany } from "sequelize-typescript";
import type { Manual } from '../types/Manual.ts'

@Table({
    tableName: "manuals",
    timestamps: true,
})
export class ManualModel extends Model<ManualModel> implements Manual {
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
        file_url!: string;

        @Column({
                type: DataType.STRING,
                allowNull: false
        })
        source_url!: string;

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

