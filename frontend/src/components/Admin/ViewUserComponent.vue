<template>
    <div class="p-8 max-w-12xl mx-auto">
        <div class="mb-8">
            <div class="flex items-center gap-4 mb-6">
                <div class="w-12 h-12 bg-red-700 rounded-xl flex items-center justify-center shadow-lg">
                    <User2 class="w-6 h-6 text-white" />
                </div>
                <div>
                    <h1 class="text-3xl font-bold text-gray-800">ข้อมูลผู้ใช้ทั้งหมด</h1>
                </div>
            </div>
        </div>

        <div class="bg-white/90 backdrop-blur-sm rounded-xl shadow-xl border border-white/20 overflow-hidden">
            <div class="overflow-x-auto">
                <table class="min-w-full">
                    <thead class="bg-gradient-to-r from-red-600 to-red-700 text-white">
                        <tr>
                            <th class="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">ID</th>
                            <th class="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">ชื่อผู้ใช้
                            </th>
                            <th class="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">ชื่อ</th>
                            <th class="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">นามสกุล</th>
                            <th class="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">สถานะ</th>
                            <th class="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">การใช้งาน
                            </th>
                            <th class="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">จัดการ</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-100">
                        <tr v-for="(user, index) in users" :key="user.id"
                            class="hover:bg-gradient-to-r hover:from-red-50 hover:to-pink-50 transition-all duration-300 group">
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="flex items-center">
                                    <div
                                        class="w-8 h-8 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center text-white text-lg font-bold mr-3">
                                        {{ index + 1 }}
                                    </div>
                                </div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div
                                    class="text-lg font-medium text-gray-900 group-hover:text-red-700 transition-colors duration-200">
                                    {{ user.username }}</div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="text-lg text-gray-700">{{ user.firstname }}</div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="text-lg text-gray-700">{{ user.lastname }}</div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <span class="inline-flex px-3 py-1 text-lg font-semibold text-lg rounded-full">
                                    <p v-if="user.status === 'student'">นักเรียน</p>
                                    <p v-if="user.status === 'admin'">แอดมิน</p>
                                </span>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="flex items-center">
                                    <div class="w-3 h-3 rounded-full mr-2 transition-colors duration-300"
                                        :class="user.isactive ? 'bg-green-400' : 'bg-red-400'"></div>
                                    <span class="text-lg font-semibold transition-colors duration-300"
                                        :class="user.isactive ? 'text-green-700' : 'text-red-700'">
                                        {{ user.isactive ? 'เปิดใช้งาน' : 'ปิดใช้งาน' }}
                                    </span>
                                </div>
                            </td>

                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="flex space-x-2">
                                    <button
                                        class="p-2 text-blue-600 hover:bg-blue-100 rounded-lg transition-colors duration-200 hover:scale-110 transform cursor-pointer"
                                        @click="handleUpdateStatusEnable(user.id)">
                                        <ShieldCheck />
                                    </button>
                                    <button
                                        class="p-2 text-red-600 hover:bg-red-100 rounded-lg transition-colors duration-200 hover:scale-110 transform cursor-pointer"
                                        @click="handleUpdateStatusDisable(user.id)">
                                        <Ban />
                                    </button>
                                    <button
                                        class="p-2 text-red-600 hover:bg-red-100 rounded-lg transition-colors duration-200 hover:scale-110 transform cursor-pointer"
                                        @click="handleDelete(user.id)">
                                        <Trash2 />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>


        </div>
    </div>
</template>

<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';

import { Ban, Trash2, ShieldCheck, User2 } from 'lucide-vue-next';

import { useToastService } from '../../lib/toastService';

const { showSuccess } = useToastService();

const showSuccessToast = (message) => {
    showSuccess(message);
}

const url = import.meta.env.VITE_API_URL;


const users = ref([]);

const fetchData = async (req, res) => {
    try {
        const response = await axios.get(url + '/users');
        users.value = response.data;
    } catch (error) {
        console.log(error)
    }
}

const handleDelete = async (id) => {
    try {
        await axios.delete(`${url}/users/${id}`);
        users.value = users.value.filter(u => u.id !== id);
        showSuccessToast("ลบผู้ใช้สำเร็จ");
    } catch (error) {
        console.error(error);
        alert('ลบไม่สำเร็จ');
    }
}

const handleUpdateStatusDisable = async (id) => {
    try {
        const response = await axios.put(url + '/users/disable', { id });
        
        users.value = users.value.map(user =>
            user.id === id ? { ...user, isactive: 0 } : user
        );

        showSuccess(`Update สถานะสำเร็จ`);

    } catch (error) {
        console.error('อัปเดตสถานะล้มเหลว:', error);
    }
}

const handleUpdateStatusEnable = async (id) => {
    try {
        const response = await axios.put(url + '/users/enable', { id });
        console.log('อัปเดตสถานะสำเร็จ:', response.data);

        users.value = users.value.map(user =>
            user.id === id ? { ...user, isactive: 1 } : user
        );

        showSuccess(`Update สถานะสำเร็จ`);

    } catch (error) {
        console.error('อัปเดตสถานะล้มเหลว:', error);
    }
}


onMounted(() => {
    fetchData();
})
</script>
