import dotenv from 'dotenv'
import router from 'express'
import dailyExerciseController from '../controllers/dailyExerciseController.js'

router.get('/get-exercises', async(req, res) => {
    const data = req.body
    console.log('data: ', data);
    //const response = await dailyExerciseController()
})