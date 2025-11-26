import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const User = sequelize.define(
    "User",
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        daily_exercise: {
            type: DataTypes.JSON,
            defaultValue: [
                { name: 'push_ups', value: 0, display_name: 'Push ups', unit_type: 'reps' },
                { name: 'sit_ups', value: 0, display_name: 'Sit ups', unit_type: 'reps' },
                { name: 'squats', value: 0, display_name: 'Squats', unit_type: 'reps' },
                { name: 'running', value: 0, display_name: 'Running', unit_type: 'km' },
            ]
        },
    },
    {
        tableName: "users",
        timestamps: true,
        paranoid: true,
        underscored: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: 'deleted_at',
    }
);

export default User;
