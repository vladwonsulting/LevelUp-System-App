<template>
    <navbar/>
    <div>
        <router-view />
    </div>
</template>

<script setup>
import Navbar from './components/navbar.vue'

console.log('something');
</script>