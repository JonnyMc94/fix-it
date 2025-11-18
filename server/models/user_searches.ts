import { Model, Column, DataType, Table, PrimaryKey, HasMany } from "sequelize-typescript";
import type { User_Searches } from '../types/UserSearches.ts'

@Table({
    tableName: "user_searches",
    timestamps: true,
})
export class UserSearchesModel extends Model<UserSearchesModel> implements User_Searches {
        @PrimaryKey
        @Column({
                type: DataType.UUID,
                defaultValue: DataType.UUIDV4
        })
        id!: number;

        @Column({
                type: DataType.UUID,
                allowNull: false
        })
        user_id!: number;

        @Column({
                type: DataType.TEXT,
                allowNull: false
        })
        query_text!: string;

        @Column({
                type: DataType.TEXT,
        })
        image_url!: string;

        @Column({
                type: DataType.UUID,
                allowNull: false
        })
        identified_product_id!: number;

        @Column({
                type: DataType.DATE,
                defaultValue: DataType.NOW
        })
        created_at!: Date;
}
