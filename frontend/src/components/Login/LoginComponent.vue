<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center p-4">
    <div class="w-full max-w-md">
      <div class="text-center mb-8">
        <div class="flex justify-center mb-4">
          <div class="p-4 rounded-2xl">
            <img src="../../assets/logo/skntc_logo.png" class="w-48">
          </div>
        </div>
        <p class="text-dark-900 text-4xl text-bold">
          วิทยาลัยเทคนิคสมุทรสาคร
        </p>
      </div>

      <div class="bg-white rounded-2xl shadow-lg border border-slate-200 p-6">
        <div class="flex items-center justify-center mb-6">
          <h2 class="text-lg font-semibold text-slate-800">เข้าสู่ระบบ</h2>
        </div>

        <form @submit.prevent="handleLogin" class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-slate-700 mb-2">
              รหัสผู้ใช้งาน
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <UserIcon class="h-5 w-5 text-slate-400" />
              </div>
              <input
                v-model="formData.username"
                type="text"
                name="username"
                class="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-200 focus:outline-none"
                placeholder="กรอกรหัสผู้ใช้งาน"
                required
              />
            </div>
          </div>

          <div>
            <label class="block text-sm font-medium text-slate-700 mb-2">
              รหัสผ่าน
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <LockIcon class="h-5 w-5 text-slate-400" />
              </div>
              <input
                v-model="formData.password"
                :type="showPassword ? 'text' : 'password'"
                name="password"
                class="w-full pl-10 pr-12 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-200 focus:outline-none"
                placeholder="กรอกรหัสผ่าน"
                required
              />
              <button
                type="button"
                @click="togglePassword"
                class="absolute inset-y-0 right-0 pr-3 flex items-center hover:text-slate-600 transition-colors duration-200"
              >
                <EyeIcon v-if="!showPassword" class="h-5 w-5 text-slate-400" />
                <EyeOffIcon v-else class="h-5 w-5 text-slate-400" />
              </button>
            </div>
          </div>

          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <input
                v-model="rememberMe"
                id="remember-me"
                type="checkbox"
                class="h-4 w-4 text-red-600 focus:ring-red-500 border-slate-300 rounded"
              />
              <label for="remember-me" class="ml-2 block text-sm text-slate-700">
                จดจำการเข้าสู่ระบบ
              </label>
            </div>
            <a href="#" class="text-sm text-red-600 hover:text-red-700 transition-colors duration-200">
              ลืมรหัสผ่าน?
            </a>
          </div>

          <button
            type="submit"
            :disabled="isLoading"
            class="w-full bg-red-600 text-white py-3 px-4 cursor-pointer rounded-xl hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all duration-200 font-medium flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none"
          >
            <LogInIcon v-if="!isLoading" class="h-5 w-5" />
            <div v-else class="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
            <span>{{ isLoading ? 'กำลังเข้าสู่ระบบ...' : 'เข้าสู่ระบบ' }}</span>
          </button>
        </form>

        <div class="mt-6 mb-4">
          <div class="relative">
            <div class="absolute inset-0 flex items-center">
              <div class="w-full border-t border-slate-300"></div>
            </div>
            <div class="relative flex justify-center text-sm">
              <span class="px-2 bg-white text-slate-500">หรือ</span>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-3">
          <button class="flex items-center justify-center px-4 py-2 border border-slate-300 rounded-xl hover:bg-slate-50 transition-colors duration-200 text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400">
            <UserIcon class="h-4 w-4 mr-2" />
            นักศึกษา
          </button>
          <button class="flex items-center justify-center px-4 py-2 border border-slate-300 rounded-xl hover:bg-slate-50 transition-colors duration-200 text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400">
            <BuildingIcon class="h-4 w-4 mr-2" />
            บุคลากร
          </button>
        </div>
      </div>

      <div class="text-center mt-6">
        <p class="text-xs text-slate-500">
          © 2025 วิทยาลัยเทคนิคสมุทรสาคร
        </p>
        <p class="text-xs text-slate-400 mt-1">
          ระบบจัดการเอกสารทวิภาคี ของนักศึกษาปริญญาตรี
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import {
  Building2 as BuildingIcon,
  Shield as ShieldIcon,
  User as UserIcon,
  Lock as LockIcon,
  Eye as EyeIcon,
  EyeOff as EyeOffIcon,
  LogIn as LogInIcon
} from 'lucide-vue-next'

import { useRouter } from 'vue-router'
import { useToastService } from '../../lib/toastService';
import axios from 'axios';

const url = import.meta.env.VITE_API_URL;

const { showSuccess, showError } = useToastService();

const showSuccessToast = (message) => {
  showSuccess(message);
}

const showErrorToast = (message) => {
  showError(message);
}

const router = useRouter();

const formData = ref({
  username: '',
  password: ''
})

const showPassword = ref(false)
const rememberMe = ref(false)
const isLoading = ref(false)

const togglePassword = () => {
  showPassword.value = !showPassword.value
}

const handleLogin = async () => {
  try {
    const response = await axios.post(url + '/users/login', {
      username: formData.value.username,
      password: formData.value.password
    });


    if (response.data.success) {
      const token = response.data.token;
      localStorage.setItem('token', token);
      localStorage.setItem('firstname', response.data.user.firstname);
      localStorage.setItem('lastname', response.data.user.lastname);
      
      if(response.data.user.status === 'admin') {
        router.push('/homeadmin');
      }else if(response.data.user.status === 'student') {
        router.push('/home');
      }
      showSuccessToast('เข้าสู่ระบบสำเร็จ')
    }else {
      showErrorToast('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง')
    }
  } catch (error) {
    showErrorToast('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง')
  }
}
</script>