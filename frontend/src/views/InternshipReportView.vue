<template>
    <div class="flex h-screen overflow-hidden">
        <SidebarComponent />

        <div class="flex-1 relative overflow-hidden">
            <InternshipReportComponent />
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import SidebarComponent from '../components/Sidebar/SidebarComponent.vue';
import InternshipReportComponent from '../components/Document/InternshipReportComponent.vue';
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