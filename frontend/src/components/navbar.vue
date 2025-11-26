
<template>
    <div class="w-full fixed bg-stone-950 py-3 px-20 flex justify-between">
        <Logo 
            class="size-8 invert"
        />
        <div 
            v-if="authenticated" 
            class="font-thin text-2xl flex items-center gap-10"
        >
            <router-link 
                :to="{ name: 'home' }"
            >
                Home
            </router-link>
            <button
                @click="logout"
            >
                <ArrowRightStartOnRectangleIcon class="size-6 cursor-pointer"/>
            </button>
        </div>
    </div>
</template>

<script setup>
import { useAuthStore } from "@/stores/auth.store";

import Logo from '@/assets/icons/logo.vue'
import { ArrowRightStartOnRectangleIcon } from '@heroicons/vue/24/outline';
import { storeToRefs } from "pinia";

const authStore = useAuthStore();
const { authenticated } = storeToRefs(authStore)

const logout = async () => {
    authStore.logoutUser()
    authenticated.value = false
}

</script>