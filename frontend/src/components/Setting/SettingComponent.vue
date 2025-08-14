<template>
  <div class="max-w-5xl mx-auto py-10 px-6">
    <h2 class="text-3xl sm:text-4xl font-bold mb-8 text-red-700 text-center">
      แก้ไขโปรไฟล์
    </h2>

    <div class="flex flex-col items-center mb-10">
      <div class="relative group">
        <img :src="form.profileImage || defaultImage"
          class="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover border-4 border-red-500 shadow-lg" />
        <label for="profileUpload"
          class="absolute bottom-0 right-0 bg-red-600 hover:bg-red-700 text-white p-2 rounded-full cursor-pointer shadow-md transition">
          
          <lucide-camera class="w-5 h-5" />
        </label>
        <input id="profileUpload" type="file" accept="image/*" class="hidden" @change="handleImageUpload" />
      </div>
      <p class="mt-3 text-gray-600 text-sm">คลิกปุ่มกล้องเพื่อเปลี่ยนรูปโปรไฟล์</p>
    </div>

    <form @submit.prevent="submitForm" class="space-y-8">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label class="block text-base font-medium text-gray-700 mb-2">
            Username
          </label>
          <input v-model="form.username" type="text" placeholder="กรอกชื่อผู้ใช้" class="input-style w-full" />
        </div>

        <div>
          <label class="block text-base font-medium text-gray-700 mb-2">
            รหัสนักศึกษา
          </label>
          <input v-model="form.studentId" type="text" placeholder="กรอกรหัสนักศึกษา" class="input-style w-full" />
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label class="block text-base font-medium text-gray-700 mb-2">
            ชื่อ
          </label>
          <input v-model="form.firstName" type="text" placeholder="กรอกชื่อ" class="input-style w-full" />
        </div>

        <div>
          <label class="block text-base font-medium text-gray-700 mb-2">
            นามสกุล
          </label>
          <input v-model="form.lastName" type="text" placeholder="กรอกนามสกุล" class="input-style w-full" />
        </div>
      </div>

      <div>
        <label class="block text-base font-medium text-gray-700 mb-2">
          รหัสผ่านใหม่
        </label>
        <input v-model="form.password" type="password" placeholder="กรอกรหัสผ่านใหม่" class="input-style w-full" />
      </div>

      <div class="pt-6 text-center">
        <button type="submit"
          @click="handleUpdateData"
          class="w-full sm:w-auto bg-gradient-to-br from-red-500 to-red-800 hover:from-red-600 hover:to-red-900 transition-all duration-300 text-white px-8 py-4 rounded-2xl shadow-lg">
          บันทึกการเปลี่ยนแปลง
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { onMounted, reactive } from 'vue';
import { LucideCamera } from 'lucide-vue-next';
import axios from 'axios';

const defaultImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIY4JUP8oxMxK-jSspp2bRgfWB0AFY8F9zGg&s'

const BASE_URL = import.meta.env.VITE_API_URL;

const form = reactive({
  username: '',
  studentId: '',
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  password: '',
  profileImage: '',
});

const handleUpdateData = async () => {
  try {
    const response = await axios.put(BASE_URL + '/users/update', {
      id: form.studentId,
      username: form.username,
      firstname: form.firstName,
      lastname: form.lastName
    })

    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

function submitForm() {
  console.log('ข้อมูลที่กรอก:', form)
  alert('บันทึกโปรไฟล์เรียบร้อยแล้ว')
}

function handleImageUpload(event) {
  const file = event.target.files[0];

  if(file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      form.profileImage = e.target.result;
    }

    reader.readAsDataURL(file);
  }
}

onMounted(() => {
  form.username = localStorage.getItem('username') || '';
  form.firstName = localStorage.getItem('firstname') || '';
  form.lastName = localStorage.getItem('lastname') || '';
  form.studentId = localStorage.getItem('studentId') || '';
})
</script>
