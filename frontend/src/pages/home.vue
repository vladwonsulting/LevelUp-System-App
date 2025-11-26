<template>
    <div class="w-full h-screen flex justify-center items-center">
        <div class="p-3 w-2/3 flex text-4xl flex-col font-extralight justify-center items-center border border-light-gray rounded-3xl">
            <DailyExercise/>
        </div>
    </div>
</template>

<script setup>
import DailyExercise from '@/components/daily-exercise.vue'
import Logo from '@/assets/icons/logo.vue'

</script>