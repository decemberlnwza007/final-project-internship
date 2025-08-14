<template>
  <div class="min-h-screen flex w-8/12 gap-6 items-center justify-center">
    <div
      v-for="student in data"
      :key="student.id"
      class="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden max-w-sm w-full border border-gray-100"
    >
      <div class="flex justify-center mt-6 relative">
        <div class="absolute top-2 right-2 bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full shadow-sm">
          นักศึกษา
        </div>
        <img
          class="w-24 h-24 rounded-full border-4 border-white shadow-lg object-cover"
          src="https://i.pinimg.com/736x/bb/d2/2f/bbd22f6b6258a773da63e3b2207996a9.jpg"
          alt="User Profile"
        />
      </div>

      <div class="p-6 text-center">
        <h2 class="text-xl font-bold text-gray-800">{{ student.student_code }}</h2>
        <p class="text-gray-900 mt-1">{{ student.firstname_th }} {{ student.lastname_th }}</p>

        <div class="mt-5 flex">
          <button
            class="px-5 py-2 bg-red-600 cursor-pointer w-full text-white rounded-lg hover:bg-red-700 duration-300"
          >
            ดูข้อมูล
          </button>
        </div>
      </div>

      <div class="bg-gray-50 px-6 py-4 text-sm text-gray-600 space-y-1 border-t border-gray-100">
        <p class="flex items-center gap-2">
          <Phone /> <span>{{ student.mobile }}</span>
        </p>
        <p class="flex items-center gap-2">
          <Mail /> <span>{{ student.email }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { Phone, Mail } from "lucide-vue-next";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;
const data = ref([]);

const fetchData = async () => {
  try {
    const response = await axios.get(BASE_URL + "/user/student");
    data.value = response.data;
  } catch (error) {
    console.error(error);
  }
};

onMounted(() => {
  fetchData();
});
</script>
