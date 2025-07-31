<template>
    <div class="flex h-screen home">
        <SidebarComponent />

        <div class="flex-1 relative overflow-hidden">

            <div
                class="relative bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl border border-red-200/50 p-12 ml-6 mt-6 mb-10 mr-6 min-h-[calc(100vh-5rem)] overflow-hidden">
                <SettingComponent />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import SidebarComponent from '../../components/Sidebar/SidebarComponent.vue';
import SettingComponent from '../../components/Setting/SettingComponent.vue';

const firstname = ref('');

onMounted(() => {
    firstname.value = localStorage.getItem('firstname') || '';
})
</script>

<style scoped>
.home {
    overflow: hidden;
}

.animation-delay-500ms {
    animation-delay: 0.5s;
}

.animation-delay-1s {
    animation-delay: 1s;
}

.animation-delay-1500ms {
    animation-delay: 1.5s;
}

.animation-delay-2s {
    animation-delay: 2s;
}

.animation-delay-3s {
    animation-delay: 3s;
}

.pattern-dots {
    background-image: radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.15) 1px, transparent 0);
    background-size: 20px 20px;
}
</style>