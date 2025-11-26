<template>
    <div v-if="loading">
        <Loading />
    </div>
    <div
        v-else
        class="w-full h-96 text-3xl font-thin flex-col justify-between items-center"
    >
        <h1>Daily exercise</h1>
        <div
            v-for="exercise in dailyExercise"
        >
            <div class="flex items-center justify-between mb-2">
                <h3>{{ exercise?.display_name }}</h3>

                <div class="flex items-center justify-center">
                    {{ exercise?.value }} km
                    <div class=" flex flex-col text-center px-3 ml-3">
                        <span
                            @click="increeseCount(exercise?.name, exercise?.value)"
                        >
                            <ChevronUpIcon class="size-10"/>
                        </span>
                        <Divider />
                        <span
                            @click="decreeseCount(exercise?.name, exercise?.value)"
                        >
                            <ChevronDownIcon class="size-10"/>
                        </span>
                    </div>
                </div>
            </div>
            <Divider />
        </div>
    </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import { storeToRefs } from "pinia";
import { useExerciseStore } from "@/stores/exercise.store.js";
import Loading from "../assets/icons/loading.vue";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/vue/24/outline";
import Divider from './divider.vue'

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
