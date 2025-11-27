<template>
    <div class="w-full h-screen flex justify-center items-center">
    </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useExerciseStore } from '@/stores/exercise.store';

const exerciseStore = useExerciseStore()
const { workoutHistory } = storeToRefs(exerciseStore)

console.log('workoutHistory.value.daily_exercise: ', workoutHistory.value);

onMounted(async() => await exerciseStore.fetchDailyExercises())
</script>