<template>
    <div class="flex h-screen home">
        <AdminSidebarComponent />

        <div class="flex-1 relative overflow-hidden">

            <div
                class="relative bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl border border-red-200/50 p-12 ml-6 mt-6 mb-10 mr-6 min-h-[calc(100vh-5rem)] overflow-hidden">
                <div class="absolute inset-0 opacity-5">
                    <div
                        class="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-red-600 to-red-800 pattern-dots">
                    </div>
                </div>

                <div class="relative flex justify-center mb-8">
                    <ShowStudentInfoComponent />
                </div>

                <div class="relative text-center space-y-8">

                </div>
            </div>
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