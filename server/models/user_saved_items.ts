import { Model, Column, DataType, Table, PrimaryKey, HasMany } from "sequelize-typescript";
import type { User_Saved_Item } from '../types/UserSavedItem.ts'

@Table({
    tableName: "user_saved_items",
    timestamps: true,
})
export class UserSavedItemsModel extends Model<UserSavedItemsModel> implements User_Saved_Item {
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
        user_id!: string;

        @Column({
                type: DataType.UUID,
        })
        manual_id!: string;

        @Column({
                type: DataType.UUID,
        })
        fix_id!: string;

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

