import { Model, Column, DataType, Table, PrimaryKey, HasMany } from "sequelize-typescript";
import type { User as IUser } from '../types/User.ts'

@Table({
    tableName: "users",
    timestamps: true,
})
export class UserModel extends Model<UserModel> implements IUser {
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
        email!: string;

        @Column({
                type: DataType.STRING,
                allowNull: false
        })
        password_hash!: string;

        @Column({
                type: DataType.DATE,
                defaultValue: DataType.NOW
        })
        created_at!: Date;

        @Column({
                type: DataType.DATE,
        })
        updated_at!: Date;
}

