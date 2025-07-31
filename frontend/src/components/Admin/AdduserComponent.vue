<template>
    <div class="max-h-[85vh] overflow-y-auto pr-6 scroll-style pb-6">
        <div class="mb-8">
            <div class="flex items-center gap-4 mb-6">
                <div class="w-12 h-12 bg-red-700 rounded-xl flex items-center justify-center shadow-lg">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                    </svg>
                </div>
                <div>
                    <h1 class="text-3xl font-bold text-gray-800">เพิ่มผู้ใช้ใหม่</h1>
                    <p class="text-gray-600">จัดการข้อมูลผู้ใช้งานในระบบ</p>
                </div>
            </div>
        </div>

        <div class="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200/50 p-8">
            <form @submit.prevent="submitForm" class="space-y-6">

                <div class="grid grid-cols-1 lg:grid-cols-1 gap-8">


                    <div class="space-y-6">
                        <div
                            class="bg-gradient-to-r from-red-100 to-red-100 rounded-xl p-6 border border-purple-200/50">
                            <h3 class="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                                <svg class="w-5 h-5 text-purple-600" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                                ข้อมูลบัญชี
                            </h3>

                            <div class="space-y-4">
                                <div>
                                    <label class="block text-sm font-medium text-gray-700 mb-2">ชื่อผู้ใช้</label>
                                    <input v-model="formData.username" type="text" class="input-style"
                                        placeholder="กรอกชื่อผู้ใช้" required>
                                </div>

                                <div>
                                    <label class="block text-sm font-medium text-gray-700 mb-2">ชื่อจริง</label>
                                    <input v-model="formData.firstName" type="text" class="input-style"
                                        placeholder="กรอกชื่อจริง" required>
                                </div>

                                <div>
                                    <label class="block text-sm font-medium text-gray-700 mb-2">นามสกุล</label>
                                    <input v-model="formData.lastName" type="text" class="input-style"
                                        placeholder="กรอกนามสกุล" required>
                                </div>

                                <div>
                                    <label class="block text-sm font-medium text-gray-700 mb-2">รหัสผ่าน</label>
                                    <input v-model="formData.password" type="password" class="input-style"
                                        placeholder="กรอกรหัสผ่าน" required>
                                </div>

                                <div>
                                    <label class="block text-sm font-medium text-gray-700 mb-2">ยืนยันรหัสผ่าน</label>
                                    <input v-model="formData.confirmPassword" type="password" class="input-style"
                                        placeholder="ยืนยันรหัสผ่าน" required>
                                </div>

                                <div>
                                    <label class="block text-sm font-medium text-gray-700 mb-2">บทบาท</label>
                                    <select v-model="formData.role" class="input-style" required>
                                        <option value="">เลือกบทบาท</option>
                                        <option value="student">นักเรียน</option>
                                        <option value="admin">แอดมิน</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <transition name="fade-slide" mode="out-in">
                    <div v-if="formData.role === 'student'"
                        class="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200/50">
                        <h3 class="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                            <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                            ข้อมูลนักเรียน
                        </h3>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">รหัสนักศึกษา</label>
                                <input v-model="formData.studentId" type="text" class="input-style"
                                    placeholder="กรอกรหัสนักศึกษา">
                            </div>

                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">ชื่อนักศึกษา</label>
                                <input v-model="formData.studentName" type="text" class="input-style"
                                    placeholder="กรอกชื่อนักศึกษา">
                            </div>

                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">นามสกุลนักศึกษา</label>
                                <input v-model="formData.studentLastName" type="text" class="input-style"
                                    placeholder="กรอกนามสกุลนักศึกษา">
                            </div>
                        </div>
                    </div>
                </transition>

                <div class="flex justify-end gap-4 pt-6 border-t border-gray-200">
                    <button type="button" @click="resetForm"
                        class="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition duration-200 font-medium">
                        รีเซ็ต
                    </button>

                    <button type="submit" @click="handleAddUser" :disabled="isSubmitting"
                        class="px-8 py-3 bg-red-700 text-white rounded-xl hover:bg-red-800  transition duration-200 font-medium shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2">
                        <svg v-if="isSubmitting" class="animate-spin w-5 h-5" fill="none" stroke="currentColor"
                            viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                        <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                        {{ isSubmitting ? 'กำลังบันทึก...' : 'เพิ่มผู้ใช้' }}
                    </button>
                </div>
            </form>
        </div>

        <div v-if="message.show"
            :class="message.type === 'success' ? 'bg-green-100 border-green-500 text-green-700' : 'bg-red-100 border-red-500 text-red-700'"
            class="mt-6 border-l-4 p-4 rounded-r-xl">
            <div class="flex items-center">
                <svg v-if="message.type === 'success'" class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd" />
                </svg>
                <svg v-else class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                        clip-rule="evenodd" />
                </svg>
                <p class="font-medium">{{ message.text }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import axios from 'axios';
import { useToastService } from '../../lib/toastService';

const { showSuccess, showError, showWarning } = useToastService();

const showSuccessToast = (message) => {
    showSuccess(message);
}

const showErrorToast = (message) => {
    showError(message);
}

const showWarningToast = (message) =>{ 
    showWarning(message);
}

const formData = reactive({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    username: '',
    password: '',
    confirmPassword: '',
    role: '',
    studentId: '',
    grade: '',
    studentName: '',
    studentLastName: ''
})

const url = import.meta.env.VITE_API_URL;

const handleAddUser = async () => {
    try {
        const response = await axios.post(url + '/users', {
            username: formData.username,
            password: formData.password,
            firstname: formData.firstName,
            lastname: formData.lastName,
            status: formData.role,
            isactive: 1
        })

        showSuccessToast('เพิ่มผู้ใช้สำเร็จ')
    } catch (error) {
        console.error('เกิดข้อผิดพลาด:', error.response?.data || error.message);
    }
}

const isSubmitting = ref(false);
const message = reactive({
    show: false,
    type: 'success',
    text: ''
})

const submitForm = async () => {
    if (formData.password !== formData.confirmPassword) {
        showMessage('error', 'รหัสผ่านไม่ตรงกัน');
        return;
    }

    if (formData.role === 'student' && !formData.studentId) {
        showMessage('error', 'กรุณากรอกรหัสนักเรียน');
        return;
    }

    isSubmitting.value = true;

    try {
        await new Promise(resolve => setTimeout(resolve, 1500));

        showMessage('success', 'เพิ่มผู้ใช้สำเร็จ!');
        resetForm();

    } catch (error) {
        showMessage('error', 'เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง');
    } finally {
        isSubmitting.value = false;
    }
}

const resetForm = () => {
    Object.keys(formData).forEach(key => {
        formData[key] = '';

        message.show = false;
    })

    // showWarning('รีเซ็ตสำเร็จ')
}

const showMessage = (type, text) => {
    message.type = type;
    message.text = text;
    message.show = true;

    setTimeout(() => {
        message.show = false;
    }, 5000);
}
</script>

<style scoped>
.scroll-style::-webkit-scrollbar {
    width: 10px;
}

.scroll-style::-webkit-scrollbar-thumb {
    background: linear-gradient(to bottom, #f87171, #dc2626);
    border-radius: 9999px;
}

.scroll-style::-webkit-scrollbar-track {
    background: transparent;
}

.fade-slide-enter-active,
.fade-slide-leave-active {
    transition: all 0.4s ease;
}

.fade-slide-enter-from {
    opacity: 0;
    transform: translateY(10px);
}

.fade-slide-enter-to {
    opacity: 1;
    transform: translateY(0);
}

.fade-slide-leave-from {
    opacity: 1;
    transform: translateY(0);
}

.fade-slide-leave-to {
    opacity: 0;
    transform: translateY(10px);
}
</style>
