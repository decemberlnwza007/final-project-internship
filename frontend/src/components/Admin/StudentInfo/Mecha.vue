<template>
    <div class="flex h-screen overflow-hidden">
        <AdminSidebarComponent />

        <div class="flex-1 relative overflow-hidden">
            <div
                class="relative bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl border border-red-200/50 p-12 ml-6 mt-6 mb-10 mr-6 min-h-[calc(100vh-5rem)] overflow-hidden">

                <div class="max-h-[85vh] overflow-y-auto pr-6 scroll-style pb-6">
                    <h1
                        class="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-red-700 via-red-800 to-red-900 bg-clip-text text-transparent drop-shadow">
                        ข้อมูลนักศึกษาสาขาวิชาเมคคาทรอนิกส์และหุ่นยนต์
                    </h1>

                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div v-for="student in students" :key="student.id"
                            class="bg-gradient-to-br from-white to-red-50 rounded-2xl border border-red-200 shadow-lg p-6 hover:shadow-xl transition">
                            <h2 class="text-2xl font-bold text-gray-800 mb-2 text-center">
                                {{ student.firstname_th }} {{ student.lastname_th }}
                            </h2>
                            <p class="text-gray-700 mb-1 text-center">รหัสนักศึกษา {{ student.student_code }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import AdminSidebarComponent from '../../Sidebar/AdminSidebarComponent.vue';
import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_URL;

const students = ref([]);

const fetchData = async () => {
    try {
        const response = await axios.get(BASE_URL + '/student/student_department/mecha');

        students.value = response.data;
    } catch (error) {
        console.error(error);
    }
}

onMounted(() => {
    fetchData();
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