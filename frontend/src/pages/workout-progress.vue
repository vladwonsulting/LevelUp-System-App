<template>
    <div class="w-full flex">
        <div class="mx-auto bg-stone-900 rounded-2xl h-full mt-28">
            <div class=" flex items-center text-center px-3 h-full">
                <span
                    @click="moveBackwardHandler"
                    class="cursor-pointer"
                >
                    <ChevronLeftIcon class="size-10"/>
                </span>
                <Transition
                    enter-active-class="transition-all duration-200 "
                    enter-from-class="opacity-0"
                    enter-to-class="opacity-100"

                    leave-active-class="transition-all duration-200 "
                    leave-from-class="opacity-100"
                    leave-to-class="opacity-0"

                    mode="out-in"
                >
                    <WorkoutDetailsCard
                        v-model="workoutDetails"
                        :key="currentWorkout"
                    />
                </Transition>
                <span
                    @click="moveForwardHandler"
                    class="cursor-pointer"
                >
                    <ChevronRightIcon class="size-10"/>
                </span>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import { useExerciseStore } from "@/stores/exercise.store.js";

import WorkoutDetailsCard from '@/components/workout-details-card.vue'
import { DAILY_EXERCISE } from "@/stores/store";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/vue/24/outline";


const exerciseStore = useExerciseStore();
const dailyExercise = ref(DAILY_EXERCISE)
const loading = ref(false);

const workouts = ref([]);
const currentWorkout = ref(null);
const previousDetails = computed(() => workouts?.value[currentWorkout.value - 1])
const workoutDetails = computed(() => workouts?.value[currentWorkout.value])
const futureDetails = computed(() => workouts?.value[currentWorkout.value + 1])

const handleFetchExercises = async () => {
    workouts.value = await exerciseStore.fetchDailyExercises();
    currentWorkout.value = workouts.value.length - 1
}

const moveBackwardHandler = async () => {
    if (currentWorkout.value != 0) currentWorkout.value--
    return
}

const moveForwardHandler = async () => {
    if (currentWorkout.value != workouts.value.length - 1) currentWorkout.value++
    return
}


/* watch( workouts, (value) => {
    workoutDetails.value = workouts.value
    console.log('workoutDetails: ', workoutDetails.value);
}) */

onMounted( async() => {
    await handleFetchExercises();
});
</script>