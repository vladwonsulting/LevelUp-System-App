// controllers/daily-exercise-controller.js
import DailyExercise from "../models/DailyExercise.js";
import User from "../models/User.js"

const dailyExerciseController = async(data) => {
    const { id, push_ups, sit_ups, squats, running } = data;

    const updateExercises = [
        { name: 'push_ups', value: 0, display_name: 'Push ups' },
        { name: 'sit_ups', value: 0, display_name: 'Sit ups' },
        { name: 'squats', value: 0, display_name: 'Squats' },
        { name: 'running', value: 0, display_name: 'Running' },
    ];

    try {
        const existingUser = await User.findOne({ where: { id } });
        if (!existingUser) {
            res.status(404).json({ success: false, message: "User Not found" });
            return;
        }

        existingUser.daily_exercise = updateExercises

        await existingUser.save()
        return existingUser
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: "Server error" });
    }
};

export default dailyExerciseController;