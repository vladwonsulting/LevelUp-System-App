<template>
    <div v-if="loading">
        <Loading />
    </div>
    <div
        v-else
        class="w-full h-96 flex-col justify-between items-center bg-light-gray"
    >
        <h1>Daily exercise</h1>
        <div
            v-for="exercise in dailyExercise"
            class="flex items-center justify-between bg-amber-500 mb-2"
        >
            <p>{{ exercise?.display_name }}</p>

            <div class="flex items-center justify-center">
                {{ exercise?.value }} km
                <div class="bg-red-300 flex flex-col text-center px-3 ml-3">
                    <span
                        @click="increeseCount(exercise?.name, exercise?.value)"
                        class=""
                    >
                        ^
                    </span>
                    <span
                        @click="decreeseCount(exercise?.name, exercise?.value)"
                        class="rotate-180"
                    >
                        ^
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import { storeToRefs } from "pinia";
import { useExerciseStore } from "@/stores/exercise.store.js";
import Loading from "../assets/icons/loading.vue";

const exerciseStore = useExerciseStore();

const loading = ref(false);
const dailyExercise = ref([null]);

const handleFetchExercises = async () => {
    loading.value = true;
    dailyExercise.value = await exerciseStore.fetchDailyExercises();
    loading.value = false;
}

/* const increeseCount = (exercise, count) => {
    const data = dailyExercise.value.find((item) => item.name === exercise);
    data.value++;
    dailyExercise.value;
    console.log("increase: ", increase);
}; */

const increeseCount = ( name, count) => {

    let exercise = dailyExercise.value.indexOf(ex => ex.name === name)
    exercise++
    console.log('exercise: ', exercise);
};

const decreeseCount = (exercise, count) => {
    count--;
};
onMounted(() => {
    handleFetchExercises();
});
</script>
