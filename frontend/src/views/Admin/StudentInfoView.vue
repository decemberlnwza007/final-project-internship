<template>
    <div class="flex h-screen home">
        <AdminSidebarComponent />

        <div class="flex-1 relative overflow-hidden">
            <ShowStudentInfoComponent />
        </div>
    </div>
</template>

<script setup>
import AdminSidebarComponent from '../../components/Sidebar/AdminSidebarComponent.vue';
import ShowStudentInfoComponent from '../../components/Admin/ShowStudentInfoComponent.vue';
import { ref, onMounted } from 'vue';

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