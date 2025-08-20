<template>
  <div
    class="min-h-screen flex flex-wrap w-11/12 gap-8 items-center justify-center mx-auto py-10"
  >
    <div
      v-for="student in students"
      :key="student.id"
      class="bg-white rounded-3xl shadow-md hover:shadow-2xl hover:scale-[1.02] transform transition-all duration-300 overflow-hidden max-w-xs w-full border border-gray-100"
    >
      <div class="relative bg-gradient-to-r from-red-600 to-red-800 h-28 flex items-center justify-center">
        <span
          class="absolute top-3 right-3 bg-white/90 text-red-700 text-xs font-semibold px-3 py-1 rounded-full shadow"
        >
          นักศึกษา
        </span>
        <img
          class="w-24 h-24 rounded-full border-4 border-white shadow-lg object-cover absolute -bottom-12"
          src="https://i.pinimg.com/736x/bb/d2/2f/bbd22f6b6258a773da63e3b2207996a9.jpg"
          alt="Student Profile"
        />
      </div>

      <div class="pt-16 pb-6 px-6 text-center">
        <h2 class="text-lg font-bold text-gray-800">{{ student.student_code }}</h2>
        <p class="text-gray-600 mt-1 text-sm">
          {{ student.firstname_th }} {{ student.lastname_th }}
        </p>

        <div class="mt-5">
          <button
            class="px-5 py-2 bg-gradient-to-r cursor-pointer from-red-600 to-red-700 w-full text-white rounded-xl font-medium hover:from-red-500 hover:to-red-600 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            ดูข้อมูล
          </button>
        </div>
      </div>

      <div
        class="bg-gray-50 px-6 py-4 text-sm text-gray-600 border-t border-gray-100"
      >
        <p class="flex items-center gap-2 mb-2">
          <Phone class="w-4 h-4 text-red-500" />
          <span>{{ student.mobile }}</span>
        </p>
        <p class="flex items-center gap-2">
          <Mail class="w-4 h-4 text-red-500" />
          <span>{{ student.email }}</span>
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
const students = ref([]);

const fetchData = async () => {
  try {
    const response = await axios.get(BASE_URL + "/user/student");
    students.value = response.data;
  } catch (error) {
    console.error(error);
  }
};

onMounted(() => {
  fetchData();
});
</script>
