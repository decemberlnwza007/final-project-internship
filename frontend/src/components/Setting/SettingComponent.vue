<template>
  <div class="max-w-7xl mx-auto py-10 px-6 bg-white">
    <h2 class="text-4xl font-bold mb-6 text-red-700 text-center">แก้ไขโปรไฟล์</h2>
    
    <form @submit.prevent="submitForm" class="space-y-5">
      <div>
        <label class="block text-lg font-medium text-gray-700 mb-1">ชื่อ</label>
        <input v-model="form.name" type="text" class="input-style" />
      </div>

      <div>
        <label class="block text-lg font-medium text-gray-700 mb-1">อีเมล</label>
        <input v-model="form.email" type="email" class="input-style" />
      </div>

      <div>
        <label class="block text-lg font-medium text-gray-700 mb-1">เบอร์โทร</label>
        <input v-model="form.phone" type="text" class="input-style" />
      </div>

      <div>
        <label class="block text-lg font-medium text-gray-700 mb-1">รหัสผ่านใหม่</label>
        <input v-model="form.password" type="password" class="input-style" />
      </div>

      <div class="pt-4 text-center">
        <button type="submit" class="w-full bg-gradient-to-br from-red-500 to-red-800 hover:from-red-600 hover:to-red-900 transition-all ease duration-300 cursor-pointer text-white px-6 py-4  rounded-2xl hover:bg-blue-700 transition-all">บันทึกการเปลี่ยนแปลง</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const form = reactive({
  name: '',
  email: '',
  phone: '',
  password: '',
})

function submitForm() {
  console.log('ข้อมูลที่กรอก:', form)

  alert('บันทึกโปรไฟล์เรียบร้อยแล้ว')
}
</script>
