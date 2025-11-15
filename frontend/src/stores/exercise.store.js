import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { EXERCISE_TYPES } from '../stores/store'
import { useAuthState } from "@/composables/auth";

export const useExerciseStore = defineStore( "exercise-store", () => {
    const { getUser } = useAuthState()
    
    const dailyExercise = ref([])
    const loadingdailyExercises = ref(false)

    /* const dailyExercise = computed(() => {
        return EXERCISE_TYPES.filter(el => ['push_ups', 'sit_ups', 'squats', 'running'].includes(el.name))
    }) */

    const fetchDailyExercises = async() => {
        try{
            const response = await getUser()
            return response?.daily_exercise;
        } catch (err) {
            throw err
        }
    }

    const updateDailyExercises = (exerciseName, exerciseValue) => {
        
    }

    return {
        dailyExercise,
        fetchDailyExercises,
        updateDailyExercises,
    }
})